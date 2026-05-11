const http = require('http');
const fs = require('fs');
const path = require('path');

const host = '127.0.0.1';
const port = 8080;
const root = __dirname;
const capturesRoot = path.join(root, 'captures');
const maxBodyBytes = 80 * 1024 * 1024;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-cache',
  });
  res.end(JSON.stringify(payload, null, 2));
}

function sanitizeSegment(value, fallback) {
  const normalized = String(value || '')
    .trim()
    .replace(/[^a-zA-Z0-9_-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  return normalized || fallback;
}

function parseDataUrl(dataUrl, expectedPrefix) {
  if (typeof dataUrl !== 'string') {
    throw new Error(`Missing ${expectedPrefix}`);
  }

  const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
  if (!match) {
    throw new Error(`Invalid data URL for ${expectedPrefix}`);
  }

  return Buffer.from(match[2], 'base64');
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let total = 0;

    req.on('data', (chunk) => {
      total += chunk.length;
      if (total > maxBodyBytes) {
        reject(new Error('Request body too large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });

    req.on('end', () => {
      resolve(Buffer.concat(chunks).toString('utf8'));
    });

    req.on('error', reject);
  });
}

async function handleCaptureSave(req, res) {
  try {
    const rawBody = await readRequestBody(req);
    const payload = JSON.parse(rawBody);

    const propertyId = sanitizeSegment(payload.propertyId, 'property');
    const roomId = sanitizeSegment(payload.roomId, 'room');
    const viewId = sanitizeSegment(payload.viewId, `view-${Date.now()}`);
    const captureDir = path.join(capturesRoot, propertyId, roomId, viewId);

    await fs.promises.mkdir(captureDir, { recursive: true });

    const colorBuffer = parseDataUrl(payload.colorImage, 'color image');
    const depthBuffer = parseDataUrl(payload.depthImage, 'depth image');
    const maskBuffer = parseDataUrl(payload.maskImage, 'mask image');

    await Promise.all([
      fs.promises.writeFile(path.join(captureDir, 'color.png'), colorBuffer),
      fs.promises.writeFile(path.join(captureDir, 'depth.png'), depthBuffer),
      fs.promises.writeFile(path.join(captureDir, 'mask.png'), maskBuffer),
      fs.promises.writeFile(
        path.join(captureDir, 'camera.json'),
        JSON.stringify(payload.cameraState || {}, null, 2),
        'utf8'
      ),
    ]);

    const manifest = {
      property_id: propertyId,
      room_id: roomId,
      view_id: viewId,
      model_path: payload.modelPath || '',
      color_image_path: 'color.png',
      depth_image_path: 'depth.png',
      mask_image_path: 'mask.png',
      camera_json_path: 'camera.json',
      prompt: payload.prompt || '',
      negative_prompt: payload.negativePrompt || '',
      style_template: payload.styleTemplate || '',
      model_name: payload.modelName || '',
      seed: payload.seed || '',
      output_image_path: payload.outputImagePath || '',
      selection_point_count: Array.isArray(payload.selectionPoints) ? payload.selectionPoints.length : 0,
      selected_points: payload.selectionPoints || [],
      created_at: new Date().toISOString(),
    };

    await fs.promises.writeFile(
      path.join(captureDir, 'manifest.json'),
      JSON.stringify(manifest, null, 2),
      'utf8'
    );

    sendJson(res, 200, {
      ok: true,
      captureDir,
      manifestPath: path.join(captureDir, 'manifest.json'),
      viewId,
    });
  } catch (error) {
    sendJson(res, 400, {
      ok: false,
      error: error.message,
    });
  }
}

function handleStatic(req, res) {
  const requestPath = req.url === '/' ? '/index.html' : decodeURIComponent(req.url.split('?')[0]);
  const filePath = path.normalize(path.join(root, requestPath));

  if (!filePath.startsWith(root)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': mimeTypes[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api/captures') {
    handleCaptureSave(req, res);
    return;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    sendJson(res, 405, { ok: false, error: 'Method not allowed' });
    return;
  }

  handleStatic(req, res);
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
