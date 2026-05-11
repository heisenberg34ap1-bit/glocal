---
marp: true
paginate: true
size: 16:9
header: "AKIYA REFORM VISION"
footer: "workflow presentation"
style: |
  section {
    font-family: "Yu Mincho", "Hiragino Mincho ProN", "BIZ UDPMincho", serif;
    color: #f3efe8;
    padding: 34px 44px 30px;
    background:
      radial-gradient(circle at 18% 18%, rgba(255,255,255,0.05), transparent 18%),
      radial-gradient(circle at 84% 24%, rgba(196, 170, 138, 0.08), transparent 20%),
      linear-gradient(115deg, rgba(255,255,255,0.06), transparent 34%),
      linear-gradient(180deg, #060606 0%, #101010 54%, #171717 100%);
  }
  section::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(135deg, rgba(255,255,255,0.02), transparent 24%, rgba(255,255,255,0.04) 46%, transparent 68%),
      linear-gradient(32deg, rgba(202, 186, 165, 0.06), transparent 30%, rgba(255,255,255,0.03) 52%, transparent 74%),
      radial-gradient(circle at 72% 78%, rgba(255,255,255,0.04), transparent 16%);
    opacity: 0.9;
    pointer-events: none;
    mix-blend-mode: screen;
  }
  section::after {
    content: "";
    position: absolute;
    inset: 18px;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 26px;
    box-shadow:
      0 0 0 1px rgba(255,255,255,0.03) inset,
      0 18px 48px rgba(0,0,0,0.26);
    pointer-events: none;
  }
  h1, h2, h3, p, li, div, span {
    position: relative;
    z-index: 1;
  }
  h1 {
    margin: 0;
    font-size: 1.82em;
    line-height: 1.12;
    letter-spacing: 0.02em;
    color: #fbf7f0;
    font-weight: 700;
  }
  h2 {
    margin: 0 0 12px;
    font-size: 0.82em;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #bea27b;
    font-weight: 700;
  }
  h3 {
    margin: 0 0 8px;
    font-size: 0.84em;
    color: #f4ede3;
    font-weight: 700;
  }
  p, li {
    font-size: 0.82em;
    line-height: 1.55;
    color: rgba(243, 239, 232, 0.88);
  }
  ul {
    margin: 0.3em 0 0;
    padding-left: 1.1em;
  }
  li {
    margin: 0.18em 0;
  }
  strong {
    color: #ffffff;
  }
  header, footer {
    color: rgba(239, 231, 217, 0.52);
    font-size: 0.5em;
    letter-spacing: 0.16em;
  }
  code {
    font-family: "Cascadia Code", "Consolas", monospace;
    font-size: 0.88em;
    color: #f7e0b7;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.10);
    padding: 0.08em 0.28em;
    border-radius: 6px;
  }
  .title-only {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .title-only h1 {
    font-size: 2.42em;
    letter-spacing: 0.06em;
    line-height: 1.26;
  }
  .page {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 20px;
    height: 100%;
  }
  .topline {
    display: grid;
    grid-template-columns: 220px 1fr;
    align-items: end;
    gap: 18px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(255,255,255,0.10);
  }
  .main {
    min-height: 0;
  }
  .agenda {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    margin-top: 8px;
  }
  .agenda-item, .card, .step, .img-card, .metric {
    border: 1px solid rgba(255,255,255,0.10);
    background:
      linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03)),
      linear-gradient(135deg, rgba(255,255,255,0.08), transparent 44%);
    border-radius: 18px;
    box-shadow:
      0 10px 24px rgba(0,0,0,0.18),
      0 1px 0 rgba(255,255,255,0.04) inset;
  }
  .agenda-item {
    padding: 18px 16px;
    min-height: 150px;
  }
  .agenda-item b {
    display: block;
    margin-bottom: 10px;
    font-size: 1.28em;
    color: #ffffff;
  }
  .split {
    display: grid;
    grid-template-columns: 1.02fr 0.98fr;
    gap: 16px;
    height: 100%;
  }
  .card {
    padding: 18px 18px 16px;
  }
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 18px;
    display: block;
  }
  .photo-wrap {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.12);
    box-shadow: 0 16px 32px rgba(0,0,0,0.28);
    min-height: 420px;
  }
  .photo-wrap::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.36)),
      linear-gradient(115deg, rgba(255,255,255,0.12), transparent 24%);
  }
  .flow-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
  .step {
    padding: 16px 14px 14px;
    min-height: 124px;
  }
  .step .n {
    display: inline-block;
    margin-bottom: 8px;
    color: #bea27b;
    font-size: 0.62em;
    letter-spacing: 0.16em;
  }
  .step strong {
    display: block;
    margin-bottom: 6px;
    font-size: 0.84em;
  }
  .arrow {
    margin: 10px 68px;
    height: 24px;
    position: relative;
  }
  .arrow::before {
    content: "";
    position: absolute;
    left: 0;
    right: 16px;
    top: 50%;
    height: 1px;
    background: linear-gradient(90deg, rgba(190,162,123,0.18), rgba(244,237,227,0.44), rgba(190,162,123,0.18));
  }
  .arrow::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 12px;
    height: 12px;
    border-top: 1px solid rgba(244,237,227,0.72);
    border-right: 1px solid rgba(244,237,227,0.72);
    transform: translateY(-50%) rotate(45deg);
  }
  .structure {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    align-items: start;
  }
  .img-card {
    overflow: hidden;
  }
  .img-card img {
    width: 100%;
    height: 190px;
    object-fit: cover;
    display: block;
  }
  .img-body {
    padding: 14px 14px 16px;
  }
  .img-body strong {
    display: block;
    margin-bottom: 6px;
  }
  .compare {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .compare figure {
    margin: 0;
  }
  .compare img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.12);
    display: block;
  }
  .compare figcaption {
    margin-top: 8px;
    font-size: 0.68em;
    color: rgba(243, 239, 232, 0.72);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .three {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    margin-top: 16px;
  }
  .metric {
    padding: 16px 16px 14px;
    min-height: 162px;
  }
  .metric strong {
    display: block;
    margin-bottom: 8px;
  }
  .closing {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    height: 100%;
  }
  blockquote {
    margin: 14px 0 0;
    padding: 12px 14px;
    border-left: 3px solid #bea27b;
    background: rgba(255,255,255,0.06);
    border-radius: 0 14px 14px 0;
    color: rgba(243, 239, 232, 0.88);
  }
---

<div class="title-only">
    <h1>空き家リフォーム<br>ワークフロー</h1>
</div>

---

<div class="page">
  <div class="topline">
    <h2>目次</h2>
    <h1>目次</h1>
  </div>
  <div class="main">
    <div class="agenda">
      <div class="agenda-item">
        <b>01</b>
        <p>導入</p>
        <p>背景と目的</p>
      </div>
      <div class="agenda-item">
        <b>02</b>
        <p>本論</p>
        <p>ワークフロー</p>
      </div>
      <div class="agenda-item">
        <b>03</b>
        <p>本論</p>
        <p>システム構成と出力</p>
      </div>
      <div class="agenda-item">
        <b>04</b>
        <p>結論</p>
        <p>まとめと今後</p>
      </div>
    </div>
  </div>
</div>

---

<div class="page">
  <div class="topline">
    <h2>導入</h2>
    <h1>背景と目的</h1>
  </div>
  <div class="main">
    <div class="split">
      <div class="card">
        <h3>背景</h3>
        <ul>
          <li>空き家改修の初期提案は、言葉や参考画像に依存しやすい。</li>
          <li>関係者ごとに完成イメージがズレやすい。</li>
          <li>設計前の段階では、比較材料が不足しやすい。</li>
        </ul>
        <h3 style="margin-top:18px;">目的</h3>
        <ul>
          <li>実空間を起点に、同一視点で改修案を比較できるようにする。</li>
          <li>提案初期の意思決定を速くする。</li>
        </ul>
        <blockquote>画像を上から貼り付けて見せる提案支援の仕組みとして位置づける。</blockquote>
      </div>
      <div class="photo-wrap">
        <img class="image" src="./assets/stock/slide02-old-room.jpg" />
      </div>
    </div>
  </div>
</div>

---

<div class="page">
  <div class="topline">
    <h2>本論</h2>
    <h1>ワークフロー</h1>
  </div>
  <div class="main">
    <div class="flow-grid">
      <div class="step">
        <div class="n">STEP 01</div>
        <strong>3Dスキャン</strong>
        <p>現地空間を取得し、<code>.glb</code> として扱える状態へ整える。</p>
      </div>
      <div class="step">
        <div class="n">STEP 02</div>
        <strong>視点を固定</strong>
        <p>部屋、視点、対象エリアを決めて、比較の前提を作る。</p>
      </div>
      <div class="step">
        <div class="n">STEP 03</div>
        <strong>条件を入力</strong>
        <p>テイスト、素材、色、用途などの条件を設定する。</p>
      </div>
    </div>
    <div class="arrow"></div>
    <div class="flow-grid">
      <div class="step">
        <div class="n">STEP 04</div>
        <strong>テクスチャ貼り付け</strong>
        <p>上からテクスチャを重ね、改修後の見え方を作る。</p>
      </div>
      <div class="step">
        <div class="n">STEP 05</div>
        <strong>比較する</strong>
        <p>元空間と合成結果を比べて方向性を確認する。</p>
      </div>
      <div class="step">
        <div class="n">STEP 06</div>
        <strong>次に進む</strong>
        <p>レビュー後、設計・見積・提案資料へつなぐ。</p>
      </div>
    </div>
    <blockquote>中心の流れは、視点固定 → 条件入力 → テクスチャ貼り付け → 比較 である。</blockquote>
  </div>
</div>

---

<div class="page">
  <div class="topline">
    <h2>本論</h2>
    <h1>システム構成</h1>
  </div>
  <div class="main">
    <div class="structure">
      <div class="img-card">
        <img src="./assets/stock/slide04-3d-laptop.jpg" />
        <div class="img-body">
          <strong>ベース空間</strong>
          <p>部屋と視点を選び、比較の前提となる見え方を固定する。</p>
        </div>
      </div>
      <div class="img-card">
        <img src="./assets/stock/slide03-blueprint.jpg" />
        <div class="img-body">
          <strong>テクスチャ</strong>
          <p>上から貼る素材やパターンを用意して方向性を決める。</p>
        </div>
      </div>
      <div class="img-card">
        <img src="./assets/stock/slide08-modern-empty-interior.jpg" />
        <div class="img-body">
          <strong>テクスチャ合成</strong>
          <p>テクスチャを上から重ねた見え方を表示し、比較表示へ渡す。</p>
        </div>
      </div>
    </div>
    <blockquote>ビューアは「何をどこから見るか」、合成側は「どう見せるか」を担当する。</blockquote>
  </div>
</div>

---

<div class="page">
  <div class="topline">
    <h2>本論</h2>
    <h1>出力の見せ方</h1>
  </div>
  <div class="main">
    <div class="compare">
      <figure>
        <img src="./assets/stock/slide02-old-room.jpg" />
        <figcaption>Before</figcaption>
      </figure>
      <figure>
        <img src="./assets/stock/slide06-modern-living.jpg" />
        <figcaption>After</figcaption>
      </figure>
    </div>
    <blockquote>出力は完成図ではなく、比較と判断のための材料として扱う。</blockquote>
  </div>
</div>

---

<div class="page">
  <div class="topline">
    <h2>本論</h2>
    <h1>評価と制約</h1>
  </div>
  <div class="main">
    <div class="three">
      <div class="metric">
        <strong>評価の観点</strong>
        <ul>
          <li>同一視点で比較できるか</li>
          <li>入力条件に沿っているか</li>
          <li>意思決定に使えるか</li>
        </ul>
      </div>
      <div class="metric">
        <strong>技術的な制約</strong>
        <ul>
          <li>スキャン精度に依存する</li>
          <li>GPU性能で速度が変わる</li>
          <li>自由視点の整合性はMVP外</li>
        </ul>
      </div>
      <div class="metric">
        <strong>運用上の注意</strong>
        <ul>
          <li>施工可能性は保証しない</li>
          <li>著作権や利用条件に注意</li>
          <li>レビュー基準を明確にする</li>
        </ul>
      </div>
    </div>
  </div>
</div>

---

<div class="page">
  <div class="topline">
    <h2>結論</h2>
    <h1>まとめ</h1>
  </div>
  <div class="main">
    <div class="closing">
      <div class="card">
        <h3>要点</h3>
        <ul>
          <li>3D空間を起点に、改修案を比較可能な形で提示できる。</li>
          <li>関係者の会話を抽象論から具体論へ移しやすい。</li>
          <li>提案初期の意思決定を速くできる。</li>
        </ul>
      </div>
      <div class="card">
        <h3>今後の展開</h3>
        <ul>
          <li>レビューコメントの構造化</li>
          <li>条件セットのテンプレート化</li>
          <li>提案資料への半自動反映</li>
        </ul>
      </div>
    </div>
    <blockquote>この仕組みは設計の代替ではなく、提案初期の比較と判断を支える可視化レイヤーである。</blockquote>
  </div>
</div>
