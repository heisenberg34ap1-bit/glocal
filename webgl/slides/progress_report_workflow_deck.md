---
marp: true
paginate: true
size: 16:9
header: "AKIYA REFORM VISION"
footer: "workflow presentation"
style: |
  section {
    font-family: "Aptos", "Yu Gothic UI", "Segoe UI", sans-serif;
    color: #1f2b33;
    padding: 38px 46px 34px;
    background:
      radial-gradient(circle at 85% 16%, rgba(234, 95, 42, 0.10), transparent 18%),
      radial-gradient(circle at 12% 84%, rgba(13, 112, 110, 0.10), transparent 22%),
      linear-gradient(180deg, #f7f1e7 0%, #efe6d8 100%);
  }
  section::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(31, 43, 51, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(31, 43, 51, 0.05) 1px, transparent 1px);
    background-size: 42px 42px;
    opacity: 0.18;
    pointer-events: none;
  }
  section::after {
    content: "";
    position: absolute;
    inset: 20px;
    border: 1px solid rgba(31, 43, 51, 0.10);
    box-shadow:
      0 0 0 1px rgba(255,255,255,0.55) inset,
      0 18px 48px rgba(73, 54, 34, 0.06);
    pointer-events: none;
  }
  h1, h2, h3, p, li, div, span {
    position: relative;
    z-index: 1;
  }
  h1 {
    margin: 0 0 12px;
    font-family: "Bahnschrift", "Aptos Display", "Segoe UI", sans-serif;
    font-size: 1.98em;
    line-height: 1.02;
    letter-spacing: 0.02em;
    color: #18242b;
  }
  h2 {
    margin: 0 0 10px;
    font-family: "Bahnschrift", "Aptos Display", "Segoe UI", sans-serif;
    font-size: 0.92em;
    color: #b45733;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  h3 {
    margin: 0 0 8px;
    font-size: 0.72em;
    color: #0d706e;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }
  p, li {
    font-size: 0.84em;
    line-height: 1.5;
    color: #33454d;
  }
  ul {
    margin: 0.28em 0 0;
    padding-left: 1.1em;
  }
  li {
    margin: 0.16em 0;
  }
  strong { color: #18242b; }
  code {
    font-family: "Cascadia Code", "Consolas", monospace;
    color: #0d706e;
    background: rgba(255,255,255,0.7);
    border: 1px solid rgba(13, 112, 110, 0.16);
    padding: 0.08em 0.28em;
    border-radius: 6px;
  }
  header, footer {
    color: #6e787e;
    font-size: 0.5em;
    letter-spacing: 0.12em;
  }
  .lead {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 26px;
    height: 100%;
    align-items: center;
  }
  .kicker {
    color: #0d706e;
    font-size: 0.66em;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 16px;
  }
  .chip {
    padding: 7px 12px;
    color: #6f3c22;
    font-size: 0.6em;
    letter-spacing: 0.08em;
    border: 1px solid rgba(180, 87, 51, 0.16);
    background: rgba(180, 87, 51, 0.08);
    border-radius: 999px;
  }
  .board, .panel, .mini, .table-card {
    border: 1px solid rgba(31, 43, 51, 0.10);
    background: rgba(255,255,255,0.62);
    box-shadow: 0 14px 30px rgba(73, 54, 34, 0.06);
  }
  .board {
    padding: 22px;
    min-height: 360px;
    border-radius: 22px;
  }
  .statgrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 18px;
  }
  .stat {
    padding: 12px;
    border: 1px solid rgba(31, 43, 51, 0.08);
    background: linear-gradient(180deg, rgba(255,255,255,0.84), rgba(246,239,228,0.84));
    border-radius: 14px;
  }
  .stat b {
    display: block;
    font-size: 1.36em;
    color: #18242b;
    margin-bottom: 4px;
  }
  .stat span {
    font-size: 0.62em;
    color: #6e787e;
    letter-spacing: 0.1em;
  }
  .two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-top: 18px;
  }
  .panel {
    padding: 18px 18px 16px;
    border-radius: 18px;
  }
  .flow {
    margin-top: 18px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
  .node {
    min-height: 116px;
    padding: 15px 14px 13px;
    border: 1px solid rgba(31, 43, 51, 0.10);
    background: linear-gradient(180deg, rgba(255,255,255,0.88), rgba(241,232,219,0.82));
    border-radius: 18px;
  }
  .idx {
    color: #0d706e;
    font-size: 0.56em;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .node strong {
    display: block;
    margin-bottom: 6px;
    font-size: 0.84em;
    color: #18242b;
  }
  .node p {
    margin: 0;
    font-size: 0.67em;
    line-height: 1.42;
    color: #45565d;
  }
  .arrow {
    margin: 10px 60px;
    height: 18px;
    background: linear-gradient(90deg, rgba(13,112,110,0.22), rgba(180,87,51,0.34), rgba(13,112,110,0.22));
    clip-path: polygon(0 45%, calc(100% - 18px) 45%, calc(100% - 18px) 25%, 100% 50%, calc(100% - 18px) 75%, calc(100% - 18px) 55%, 0 55%);
  }
  .miniwrap {
    display: grid;
    grid-template-columns: 1fr 0.7fr 1fr;
    gap: 14px;
    align-items: center;
    margin-top: 18px;
  }
  .stack {
    display: grid;
    gap: 10px;
  }
  .mini {
    padding: 14px;
    border-radius: 16px;
  }
  .mini strong {
    display: block;
    margin-bottom: 6px;
    font-size: 0.76em;
    color: #18242b;
  }
  .center-arrow {
    text-align: center;
    font-size: 1.4em;
    color: #b45733;
  }
  .table-card {
    margin-top: 16px;
    overflow: hidden;
    border-radius: 18px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 10px 12px;
    border-bottom: 1px solid rgba(31, 43, 51, 0.08);
    font-size: 0.74em;
    line-height: 1.4;
  }
  th {
    color: #fffaf4;
    background: linear-gradient(90deg, #0d706e, #195e6d);
    text-align: left;
  }
  td {
    color: #33454d;
    background: rgba(255,255,255,0.66);
  }
  tr:nth-child(even) td {
    background: rgba(241,232,219,0.86);
  }
  .three {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    margin-top: 16px;
  }
  .box {
    padding: 16px 16px 14px;
    border: 1px solid rgba(31, 43, 51, 0.10);
    background: rgba(255,255,255,0.64);
    border-radius: 18px;
  }
  .box strong {
    display: block;
    margin-bottom: 8px;
    color: #18242b;
  }
  blockquote {
    margin: 16px 0 0;
    padding: 12px 14px;
    border-left: 4px solid #b45733;
    background: rgba(255,255,255,0.54);
    color: #33454d;
    border-radius: 0 14px 14px 0;
  }
---

<div class="lead">
  <div>
    <div class="kicker">title</div>
    <h1>空き家リフォームAI<br>ワークフロー</h1>
    <p>3Dスキャン済み空間を起点に、視点固定、改修条件入力、ローカルAI生成、Before / After 比較までをつなぐ提案支援フロー。</p>
    <div class="chips">
      <div class="chip">3Dスキャン</div>
      <div class="chip">ローカルAI</div>
      <div class="chip">Before / After</div>
      <div class="chip">比較レビュー</div>
    </div>
  </div>
  <div class="board">
    <h2>主題</h2>
    <div class="statgrid">
      <div class="stat"><b>提案</b><span>比較できる改修案を出す</span></div>
      <div class="stat"><b>目的</b><span>認識ズレを減らす</span></div>
      <div class="stat"><b>対象</b><span>営業・設計・オーナー</span></div>
      <div class="stat"><b>価値</b><span>意思決定を速くする</span></div>
    </div>
    <blockquote>改修案を、言葉ではなく比較できる画像として提示する。</blockquote>
  </div>
</div>

---

### 目次
# 発表の流れ

<div class="three">
  <div class="box">
    <strong>1. 導入</strong>
    <p>背景と目的を説明する。</p>
  </div>
  <div class="box">
    <strong>2. 本論</strong>
    <p>手法、構成、結果の見方を示す。</p>
  </div>
  <div class="box">
    <strong>3. 結論</strong>
    <p>まとめと今後の展開を整理する。</p>
  </div>
</div>

<blockquote>このデッキは、表紙 → 目次 → 導入 → 本論 → 結論 の順で進む。</blockquote>

---

### 導入
# 背景と目的

<div class="two">
  <div class="panel">
    <h2>背景</h2>
    <ul>
      <li>空き家改修の初期提案は、言葉や参考画像に依存しやすい。</li>
      <li>関係者ごとに完成イメージがズレやすい。</li>
    </ul>
  </div>
  <div class="panel">
    <h2>目的</h2>
    <ul>
      <li>実空間を起点に、同じ視点で改修案を比較できるようにする。</li>
      <li>提案初期の意思決定を速くする。</li>
    </ul>
  </div>
</div>

<blockquote>導入では、AI技術そのものより「認識ズレを減らす仕組み」であることを先に伝える。</blockquote>

---

### 本論 / 手法
# ワークフロー

<div class="flow">
  <div class="node">
    <div class="idx">01</div>
    <strong>3Dスキャン</strong>
    <p>現地空間を取得し、<code>.glb</code> として扱える状態へ整える。</p>
  </div>
  <div class="node">
    <div class="idx">02</div>
    <strong>視点を固定</strong>
    <p>部屋、視点、対象エリアを決めて、比較の前提を作る。</p>
  </div>
  <div class="node">
    <div class="idx">03</div>
    <strong>条件を入力</strong>
    <p>テイスト、素材、色、用途などの条件を入れる。</p>
  </div>
</div>

<div class="arrow"></div>

<div class="flow">
  <div class="node">
    <div class="idx">04</div>
    <strong>AI生成</strong>
    <p>ローカルAIで改修後イメージを生成する。</p>
  </div>
  <div class="node">
    <div class="idx">05</div>
    <strong>比較する</strong>
    <p>元空間と生成結果を比べて方向性を確認する。</p>
  </div>
  <div class="node">
    <div class="idx">06</div>
    <strong>次に進む</strong>
    <p>レビュー後、設計・見積・提案資料へつなぐ。</p>
  </div>
</div>

<blockquote>本論の中心は、<code>視点固定 -> 条件入力 -> AI生成 -> 比較</code> の流れである。</blockquote>

---

### 本論 / 手法
# システム構成

<div class="miniwrap">
  <div class="stack">
    <div class="mini"><strong>空間レイヤー</strong> 3D viewer / room selection / camera lock</div>
    <div class="mini"><strong>条件レイヤー</strong> style / material / color / usage / target area</div>
  </div>
  <div class="center-arrow">表示<br>⇄<br>生成</div>
  <div class="stack">
    <div class="mini"><strong>生成レイヤー</strong> local model / sampler / seed / output</div>
    <div class="mini"><strong>レビュー層</strong> compare UI / note / handoff</div>
  </div>
</div>

<div class="table-card">
  <table>
    <tr><th>層</th><th>持つ情報</th><th>役割</th></tr>
    <tr><td>空間</td><td><code>.glb</code>, room id, camera pose</td><td>比較前提を固定する</td></tr>
    <tr><td>条件</td><td>style, material, color, usage</td><td>改修案の方向性を決める</td></tr>
    <tr><td>生成</td><td>prompt, seed, model, sampler</td><td>再現可能な生成として扱う</td></tr>
  </table>
</div>

---

### 本論 / 結果
# 結果の見方

<div class="two">
  <div class="panel">
    <h2>出力</h2>
    <ul>
      <li>改修後イメージ</li>
      <li>Before / After 比較</li>
      <li>レビュー用の判断材料</li>
    </ul>
  </div>
  <div class="panel">
    <h2>評価観点</h2>
    <ul>
      <li>同一視点で比較できるか</li>
      <li>入力条件に沿っているか</li>
      <li>意思決定に使えるか</li>
    </ul>
  </div>
</div>

<div class="three">
  <div class="box">
    <strong>MVPで必須</strong>
    <ul>
      <li><code>.glb</code> 表示</li>
      <li>視点固定</li>
      <li>AI生成</li>
    </ul>
  </div>
  <div class="box">
    <strong>制約</strong>
    <ul>
      <li>スキャン精度</li>
      <li>GPU性能</li>
      <li>自由視点の外置き</li>
    </ul>
  </div>
  <div class="box">
    <strong>注意点</strong>
    <ul>
      <li>施工可能性は保証しない</li>
      <li>著作権や利用条件に注意</li>
      <li>レビュー基準を明確にする</li>
    </ul>
  </div>
</div>

---

### 結論
# まとめ

<div class="two">
  <div class="panel">
    <h2>要点</h2>
    <ul>
      <li>3D空間を起点に改修案を比較可能な形で提示できる。</li>
      <li>関係者の会話を抽象論から具体論へ移しやすい。</li>
      <li>提案初期の意思決定を速くできる。</li>
    </ul>
  </div>
  <div class="panel">
    <h2>今後</h2>
    <ul>
      <li>レビューコメントの構造化</li>
      <li>条件セットのテンプレート化</li>
      <li>提案資料への半自動反映</li>
    </ul>
  </div>
</div>

<blockquote>結論として、この仕組みは設計の代替ではなく、提案初期の比較と判断を支える可視化レイヤーである。</blockquote>
