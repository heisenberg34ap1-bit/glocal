const fs = await import("node:fs/promises");
const path = await import("node:path");
const { Presentation, PresentationFile } = await import("@oai/artifact-tool");

const W = 1280;
const H = 720;
const OUT_DIR = "C:\\Users\\Sorak\\グローカル\\webgl\\slides\\outputs";
const SCRATCH_DIR = "C:\\Users\\Sorak\\グローカル\\webgl\\slides\\tmp";
const PREVIEW_DIR = path.join(SCRATCH_DIR, "preview");
const INSPECT_PATH = path.join(SCRATCH_DIR, "inspect.ndjson");
const PPTX_PATH = path.join(OUT_DIR, "output.pptx");

const BG = "#F7F5EF";
const INK = "#182126";
const SUB = "#44535C";
const MUTED = "#6C7A80";
const WHITE = "#FFFFFF";
const GREEN = "#4B8F75";
const SAGE = "#DCE8DF";
const GOLD = "#D6B15E";
const CLAY = "#D98A63";
const NAVY = "#23404A";
const LINE = "#C9D4CF";

const TITLE = "Poppins";
const BODY = "Lato";
const MONO = "Aptos Mono";

const sourceNote = "Source: webgl/要件定義書.md";
const inspectRecords = [];

async function ensureDirs() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.mkdir(PREVIEW_DIR, { recursive: true });
}

function line(fill = LINE, width = 1.2) {
  return { style: "solid", fill, width };
}

function shape(slide, geometry, left, top, width, height, fill, stroke = LINE, strokeWidth = 1.2) {
  return slide.shapes.add({
    geometry,
    position: { left, top, width, height },
    fill,
    line: { style: "solid", fill: stroke, width: strokeWidth },
  });
}

function textbox(slide, slideNo, text, left, top, width, height, options = {}) {
  const {
    fontSize = 20,
    color = INK,
    bold = false,
    typeface = BODY,
    fill = "#00000000",
    stroke = "#00000000",
    strokeWidth = 0,
    alignment = "left",
    verticalAlignment = "top",
    role = "text",
  } = options;
  const box = shape(slide, "rect", left, top, width, height, fill, stroke, strokeWidth);
  box.text = text;
  box.text.fontSize = fontSize;
  box.text.color = color;
  box.text.bold = bold;
  box.text.typeface = typeface;
  box.text.alignment = alignment;
  box.text.verticalAlignment = verticalAlignment;
  box.text.insets = { left: 0, right: 0, top: 0, bottom: 0 };
  inspectRecords.push({
    kind: "textbox",
    slide: slideNo,
    role,
    text: String(text),
    textChars: String(text).length,
    textLines: String(text).split(/\n/).length,
    bbox: [left, top, width, height],
  });
  return box;
}

function bulletLines(items) {
  return items.map((item) => `• ${item}`).join("\n");
}

function baseSlide(presentation, slideNo, section, title, subtitle = "") {
  const slide = presentation.slides.add();
  slide.background.fill = BG;
  shape(slide, "rect", 0, 0, W, 92, NAVY, NAVY, 0);
  shape(slide, "rect", 64, 90, 1152, 2, GOLD, GOLD, 0);
  shape(slide, "rect", 64, 116, 8, 542, GREEN, GREEN, 0);
  textbox(slide, slideNo, section.toUpperCase(), 84, 30, 220, 24, {
    fontSize: 13,
    color: WHITE,
    bold: true,
    typeface: MONO,
    role: "section",
  });
  textbox(slide, slideNo, `${String(slideNo).padStart(2, "0")} / 07`, 1090, 30, 126, 24, {
    fontSize: 13,
    color: WHITE,
    bold: true,
    typeface: MONO,
    alignment: "right",
    role: "page",
  });
  textbox(slide, slideNo, title, 96, 126, 760, 84, {
    fontSize: 30,
    color: INK,
    bold: true,
    typeface: TITLE,
    role: "title",
  });
  if (subtitle) {
    textbox(slide, slideNo, subtitle, 98, 212, 760, 48, {
      fontSize: 17,
      color: SUB,
      role: "subtitle",
    });
  }
  textbox(slide, slideNo, sourceNote, 970, 676, 246, 18, {
    fontSize: 9,
    color: MUTED,
    alignment: "right",
    role: "source",
  });
  return slide;
}

function card(slide, slideNo, left, top, width, height, label, body, accent = GREEN) {
  shape(slide, "roundRect", left, top, width, height, WHITE, LINE, 1.2);
  shape(slide, "rect", left, top, width, 8, accent, accent, 0);
  textbox(slide, slideNo, label, left + 22, top + 20, width - 44, 24, {
    fontSize: 15,
    color: accent === GOLD ? INK : NAVY,
    bold: true,
    typeface: MONO,
    role: "card-label",
  });
  textbox(slide, slideNo, body, left + 22, top + 58, width - 44, height - 80, {
    fontSize: 17,
    color: INK,
    role: "card-body",
  });
}

function chip(slide, slideNo, left, top, width, text, fill, color = INK) {
  shape(slide, "roundRect", left, top, width, 34, fill, fill, 0);
  textbox(slide, slideNo, text, left + 14, top + 8, width - 28, 18, {
    fontSize: 12,
    color,
    bold: true,
    typeface: MONO,
    alignment: "center",
    role: "chip",
  });
}

function coverSlide(presentation) {
  const slideNo = 1;
  const slide = presentation.slides.add();
  slide.background.fill = BG;
  shape(slide, "rect", 0, 0, 468, H, NAVY, NAVY, 0);
  shape(slide, "rect", 468, 0, 812, H, SAGE, SAGE, 0);
  shape(slide, "roundRect", 526, 88, 660, 544, WHITE, LINE, 1.2);
  textbox(slide, slideNo, "PROJECT OVERVIEW", 84, 82, 220, 24, {
    fontSize: 13,
    color: WHITE,
    bold: true,
    typeface: MONO,
    role: "kicker",
  });
  textbox(slide, slideNo, "空き家3Dリフォーム\n提案Webサービス", 84, 128, 312, 180, {
    fontSize: 34,
    color: WHITE,
    bold: true,
    typeface: TITLE,
    role: "cover-title",
  });
  textbox(slide, slideNo, "要件定義を、関係者が短時間で共有できる 16:9 スライドに再構成。", 84, 328, 314, 70, {
    fontSize: 19,
    color: "#E7EFEA",
    role: "cover-subtitle",
  });
  textbox(slide, slideNo, "対象", 84, 454, 120, 24, {
    fontSize: 14,
    color: GOLD,
    bold: true,
    typeface: MONO,
    role: "cover-label",
  });
  textbox(slide, slideNo, "移住希望者 / 自治体 / 不動産 / 所有者 / リフォーム事業者", 84, 484, 320, 86, {
    fontSize: 20,
    color: WHITE,
    role: "cover-audience",
  });
  textbox(slide, slideNo, "3D空間情報を基準に、現況の見え方で損をしている物件へ\n“住んだ後のイメージ”を提示する。", 566, 122, 574, 88, {
    fontSize: 26,
    color: INK,
    bold: true,
    typeface: TITLE,
    role: "cover-message",
  });
  chip(slide, slideNo, 566, 244, 142, "3D基準", SAGE, NAVY);
  chip(slide, slideNo, 722, 244, 168, "視点固定比較", "#F4E7CC", NAVY);
  chip(slide, slideNo, 904, 244, 214, "ローカルAI編集", "#F2DDD2", NAVY);
  card(slide, slideNo, 566, 310, 262, 128, "解く課題", "古い内装の第一印象だけで、空き家の魅力が過小評価される。", GREEN);
  card(slide, slideNo, 844, 310, 296, 128, "提供価値", "リフォーム後の仮説を同一視点で比較し、意思決定のたたき台にする。", GOLD);
  card(slide, slideNo, 566, 456, 574, 132, "MVPの着地点", "`.glb` 表示、視点キャプチャ、深度・マスク取得、単一視点の画像生成、Before / After 比較までを初期リリース対象とする。", CLAY);
  textbox(slide, slideNo, sourceNote, 970, 676, 246, 18, {
    fontSize: 9,
    color: MUTED,
    alignment: "right",
    role: "source",
  });
  slide.speakerNotes.setText(sourceNote);
}

function slide02(presentation) {
  const slide = baseSlide(
    presentation,
    2,
    "Challenge",
    "課題と利用者",
    "現況の見え方に引っ張られる判断を、3Dベースの比較材料で補う。 ",
  );
  card(slide, 2, 96, 300, 342, 252, "現場の課題", bulletLines([
    "古い・汚れた内装で魅力が伝わりにくい",
    "現地内見前に生活イメージを持ちにくい",
    "関係者ごとの解像度が揃わない",
  ]), GREEN);
  card(slide, 2, 468, 300, 342, 252, "主な利用者", bulletLines([
    "移住希望者",
    "空き家所有者",
    "自治体の移住促進担当",
    "不動産事業者",
    "リフォーム事業者",
  ]), GOLD);
  card(slide, 2, 840, 300, 344, 252, "判断を支える観点", bulletLines([
    "同一視点で現況と改修案を比較",
    "施工前の共通認識を作る",
    "候補物件の絞り込みを支援",
  ]), CLAY);
  slide.speakerNotes.setText(sourceNote);
}

function slide03(presentation) {
  const slide = baseSlide(
    presentation,
    3,
    "Value",
    "提供価値とシステム範囲",
    "画像生成だけでなく、3D空間・視点・深度・編集範囲を扱うことが前提。 ",
  );
  card(slide, 3, 96, 296, 520, 136, "提供価値", bulletLines([
    "3D空間に基づく自然なリフォーム後イメージ",
    "壁・床・天井・設備・家具の変更を自然言語で指定",
    "生成結果を視点情報と紐付けて保存・再利用",
  ]), GREEN);
  card(slide, 3, 640, 296, 544, 136, "対象範囲", bulletLines([
    "`.glb` のブラウザ表示",
    "視点 / 深度 / スクリーンショット / クリック座標の取得",
    "編集領域指定、ローカルAI画像編集、結果保存と再表示",
  ]), GOLD);
  card(slide, 3, 96, 458, 520, 144, "対象外", bulletLines([
    "構造安全性の保証",
    "実工事見積もりの自動算出",
    "完全自由視点で破綻しないリアルタイム生成",
  ]), CLAY);
  card(slide, 3, 640, 458, 544, 144, "基本思想", "3Dモデルを正解データとして扱い、その上に生成AIの提案レイヤーを重ねる。見た目の印象改善ではなく、比較可能な検討素材の提供を狙う。", NAVY);
  slide.speakerNotes.setText(sourceNote);
}

function slide04(presentation) {
  const slide = baseSlide(
    presentation,
    4,
    "Flow",
    "想定ユースケース",
    "物件登録から比較表示までを、単一視点中心のワークフローとして定義。 ",
  );
  const steps = [
    ["1", "3Dスキャン", "物件担当者が空き家をスキャンし `.glb` を作成"],
    ["2", "視点決定", "Web上で 3D モデルを表示し、見たい視点を固定"],
    ["3", "入力取得", "カラー画像、深度画像、カメラ行列、クリック座標を取得"],
    ["4", "編集指示", "自然言語プロンプトと必要なマスク範囲を指定"],
    ["5", "比較・保存", "ローカルAIで生成し、Before / After を比較して保存"],
  ];
  steps.forEach(([num, label, body], index) => {
    const left = 98 + index * 226;
    shape(slide, "roundRect", left, 348, 196, 196, WHITE, LINE, 1.2);
    shape(slide, "ellipse", left + 18, 20 + 348, 46, 46, GREEN, GREEN, 0);
    textbox(slide, 4, num, left + 18, 376, 46, 26, {
      fontSize: 18,
      color: WHITE,
      bold: true,
      typeface: MONO,
      alignment: "center",
      role: "step-no",
    });
    textbox(slide, 4, label, left + 18, 432, 156, 28, {
      fontSize: 16,
      color: NAVY,
      bold: true,
      typeface: MONO,
      role: "step-label",
    });
    textbox(slide, 4, body, left + 18, 470, 160, 54, {
      fontSize: 15,
      color: INK,
      role: "step-body",
    });
    if (index < steps.length - 1) {
      shape(slide, "rightArrow", left + 186, 432, 30, 20, GOLD, GOLD, 0);
    }
  });
  slide.speakerNotes.setText(sourceNote);
}

function slide05(presentation) {
  const slide = baseSlide(
    presentation,
    5,
    "Functions",
    "機能要件とMVP",
    "ビューア、編集指定、生成、比較表示の4ブロックを中核とする。 ",
  );
  card(slide, 5, 96, 294, 350, 284, "主要機能", bulletLines([
    "物件情報登録と部屋単位管理",
    "Three.js による `.glb` 表示",
    "視点キャプチャ、深度取得、camera JSON 保存",
    "world position 取得",
  ]), GREEN);
  card(slide, 5, 468, 294, 350, 284, "編集と生成", bulletLines([
    "自然言語プロンプト入力",
    "編集対象領域の指定",
    "color / depth / mask / prompt を入力に利用",
    "ローカル環境で画像生成を実行",
  ]), GOLD);
  card(slide, 5, 840, 294, 344, 284, "結果表示", bulletLines([
    "Before / After 比較表示",
    "同一視点で複数案を比較",
    "生成条件の保存",
    "AI生成画像であることを明示",
  ]), CLAY);
  shape(slide, "roundRect", 96, 600, 1088, 54, "#E8F0EA", LINE, 1.2);
  textbox(slide, 5, "MVP: `.glb` 表示 / 視点キャプチャ / 深度画像出力 / カメラJSON保存 / マスク指定 / 単一視点生成 / Before / After 比較", 122, 618, 1032, 20, {
    fontSize: 15,
    color: NAVY,
    bold: true,
    typeface: MONO,
    alignment: "center",
    role: "mvp",
  });
  slide.speakerNotes.setText(sourceNote);
}

function slide06(presentation) {
  const slide = baseSlide(
    presentation,
    6,
    "Governance",
    "非機能・データ・制約",
    "品質よりも“比較に耐える再現性”を優先し、保存データで追跡可能にする。 ",
  );
  card(slide, 6, 96, 294, 352, 156, "非機能要件", bulletLines([
    "主要処理はローカルPCで実行可能",
    "実用上ストレスのないビュー操作",
    "モデル・seed・prompt・視点情報を保存",
  ]), GREEN);
  card(slide, 6, 472, 294, 352, 156, "最低限の保存項目", "識別: `property_id` / `room_id` / `view_id`\n入力: color / depth / mask / camera\n生成条件: prompt / style / model / seed\n結果: output_image_path / created_at", GOLD);
  card(slide, 6, 848, 294, 336, 156, "制約事項", bulletLines([
    "建築的妥当性は保証しない",
    "構造変更表現は初期対象外",
    "品質と速度はモデル精度・GPU性能依存",
  ]), CLAY);
  card(slide, 6, 96, 476, 520, 132, "リスク", bulletLines([
    "過度な美化による誤認",
    "深度やマスクの不正確さによる破綻",
    "視点変更時の整合性喪失",
  ]), NAVY);
  card(slide, 6, 640, 476, 544, 132, "信頼性の担保", "AI生成であること、実施工を保証しないこと、初期リリースでは単一視点に限定することを画面上で明示する。", GREEN);
  slide.speakerNotes.setText(sourceNote);
}

function slide07(presentation) {
  const slide = baseSlide(
    presentation,
    7,
    "Roadmap",
    "構成案・拡張候補・成功指標",
    "MVP を土台に、再投影や複数視点整合へ段階的に広げる。 ",
  );
  card(slide, 7, 96, 294, 344, 252, "システム構成案", bulletLines([
    "フロントエンド: Three.js ビューア",
    "生成基盤: ComfyUI を第一候補",
    "保存: 画像 / JSON / 生成条件を物件単位で管理",
  ]), GREEN);
  card(slide, 7, 468, 294, 344, 252, "将来拡張", bulletLines([
    "面認識",
    "家具レイアウト提案",
    "複数視点の整合生成",
    "再投影による疑似3D表示",
    "管理画面の整備",
  ]), GOLD);
  card(slide, 7, 840, 294, 344, 252, "成功指標", bulletLines([
    "物件イメージを持ちやすくなった回答率",
    "問い合わせ率・内見予約率の改善",
    "物件ごとの閲覧時間の増加",
    "Before / After 比較機能の利用率",
  ]), CLAY);
  slide.speakerNotes.setText(sourceNote);
}

async function saveBlob(blob, filePath) {
  const bytes = new Uint8Array(await blob.arrayBuffer());
  await fs.writeFile(filePath, bytes);
}

async function writeInspect(presentation) {
  const records = [
    JSON.stringify({ kind: "deck", slideCount: presentation.slides.count, size: [W, H] }),
    ...inspectRecords.map((record) => JSON.stringify(record)),
  ];
  await fs.writeFile(INSPECT_PATH, records.join("\n") + "\n", "utf8");
}

async function build() {
  await ensureDirs();
  const presentation = Presentation.create({ slideSize: { width: W, height: H } });
  coverSlide(presentation);
  slide02(presentation);
  slide03(presentation);
  slide04(presentation);
  slide05(presentation);
  slide06(presentation);
  slide07(presentation);
  await writeInspect(presentation);
  for (let i = 0; i < presentation.slides.items.length; i += 1) {
    const preview = await presentation.export({ slide: presentation.slides.items[i], format: "png", scale: 1 });
    await saveBlob(preview, path.join(PREVIEW_DIR, `slide-${String(i + 1).padStart(2, "0")}.png`));
  }
  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(PPTX_PATH);
  console.log(PPTX_PATH);
}

await build();
