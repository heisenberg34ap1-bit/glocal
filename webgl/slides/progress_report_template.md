---
marp: true
theme: default
paginate: true
size: 16:9
header: "AKIYA REFORM VISION"
footer: "requirements definition"
style: |
  section {
    font-family: "Aptos", "Yu Gothic UI", "Segoe UI", sans-serif;
    padding: 32px 40px;
    background: #f4efe7;
    color: #243038;
  }
  h1, h2 {
    margin: 0 0 10px;
    font-family: "Aptos Display", "Trebuchet MS", sans-serif;
    line-height: 1.06;
    color: #1f2b31;
  }
  h1 { font-size: 1.95em; }
  h2 { font-size: 1.48em; }
  h3 {
    margin: 0 0 8px;
    font-size: 0.78em;
    color: #b76544;
    text-transform: uppercase;
    letter-spacing: 0.14em;
  }
  p, li {
    font-size: 0.9em;
    line-height: 1.5;
  }
  ul, ol {
    margin: 0.3em 0 0;
    padding-left: 1.1em;
  }
  li {
    margin: 0.18em 0;
  }
  header, footer {
    color: #707b82;
    font-size: 0.5em;
    letter-spacing: 0.08em;
  }
  .hero, .layout {
    display: grid;
    grid-template-columns: 0.88fr 1.12fr;
    gap: 20px;
    align-items: center;
  }
  .hero {
    grid-template-columns: 0.95fr 1.05fr;
  }
  .photo {
    width: 100%;
    height: 320px;
    object-fit: cover;
    border-radius: 18px;
    box-shadow: 0 10px 24px rgba(64, 49, 35, 0.12);
  }
  .card {
    padding: 4px 0 0;
  }
  .quote {
    font-size: 1.02em;
    line-height: 1.5;
    color: #314047;
  }
  strong {
    color: #8f5338;
  }
  .tag-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 12px;
  }
  .tag {
    padding: 5px 10px;
    background: rgba(191, 105, 70, 0.1);
    color: #8f5338;
    border-radius: 999px;
    font-size: 0.66em;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .source {
    margin-top: 8px;
    font-size: 0.5em;
    line-height: 1.25;
    color: #77838a;
    word-break: break-all;
  }
  .source a {
    color: #77838a;
  }
  .tiny {
    font-size: 0.8em;
    color: #6c777e;
  }
  .split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-top: 10px;
  }
---

<div class="hero">
  <div>
    <h3>document overview</h3>
    <h1>空き家3Dリフォーム可視化サービス</h1>
    <div class="card">
      <p class="quote">3Dスキャンを土台にして、古い内装だけでは伝わらない物件の可能性を、同一視点の改修イメージとして見せる。</p>
      <p>対象は離島の空き家。意思決定を助けるための Web サービスとして設計する。</p>
    </div>
    <div class="tag-row">
      <div class="tag">3D scan</div>
      <div class="tag">local AI</div>
      <div class="tag">before / after</div>
    </div>
  </div>
  <div>
    <img class="photo" src="./assets/stock/slide01-old-house.jpg" />
    <div class="source">Image URL: https://images.pexels.com/photos/24205802/pexels-photo-24205802.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600</div>
  </div>
</div>

---

<div class="layout">
  <div>
    <img class="photo" src="./assets/stock/slide02-old-room.jpg" />
    <div class="source">Image URL: https://images.pexels.com/photos/8222953/pexels-photo-8222953.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600</div>
  </div>
  <div class="card">
    <h3>problem and purpose</h3>
    <h2>現況だけでは、候補から外れやすい</h2>
    <ul>
      <li>古さや汚れで魅力が過小評価される</li>
      <li>内見前だと暮らしを想像しにくい</li>
      <li>関係者間で改修イメージを共有しづらい</li>
    </ul>
    <p class="tiny">このギャップを埋めるのが本サービスの目的。</p>
  </div>
</div>

---

<div class="layout">
  <div>
    <img class="photo" src="./assets/stock/slide01-house.jpg" />
    <div class="source">Image URL: https://images.pexels.com/photos/6226120/pexels-photo-6226120.jpeg?cs=srgb&amp;dl=pexels-eva-bronzini-6226120.jpg&amp;fm=jpg</div>
  </div>
  <div class="card">
    <h3>users and value</h3>
    <h2>主な利用者は 5者</h2>
    <ul>
      <li>移住希望者: 候補の絞り込みをしやすくする</li>
      <li>所有者: 物件の見せ方を改善する</li>
      <li>自治体 / 不動産 / 施工事業者: 相談の土台を共有する</li>
    </ul>
    <p class="tiny">価値の中心は、同一視点での比較と、自然言語による改修指示。</p>
  </div>
</div>

---

<div class="layout">
  <div>
    <img class="photo" src="./assets/stock/slide03-blueprints-table.jpg" />
    <div class="source">Image URL: https://images.pexels.com/photos/6894105/pexels-photo-6894105.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600</div>
  </div>
  <div class="card">
    <h3>scope</h3>
    <h2>やることと、やらないことを先に切る</h2>
    <div class="split">
      <div>
        <p><strong>対象範囲</strong></p>
        <ul>
          <li><code>.glb</code> 表示</li>
          <li>視点 / 深度 / 座標取得</li>
          <li>編集範囲指定</li>
          <li>ローカルAI画像編集</li>
          <li>保存と再表示</li>
        </ul>
      </div>
      <div>
        <p><strong>対象外</strong></p>
        <ul>
          <li>構造安全性の保証</li>
          <li>自動見積もり</li>
          <li>自由視点の完全整合生成</li>
          <li>建築判断の自動化</li>
        </ul>
      </div>
    </div>
  </div>
</div>

---

<div class="layout">
  <div>
    <img class="photo" src="./assets/stock/slide04-3d-design.jpg" />
    <div class="source">Image URL: https://images.pexels.com/photos/7504746/pexels-photo-7504746.jpeg?cs=srgb&amp;dl=pexels-cottonbro-7504746.jpg&amp;fm=jpg</div>
  </div>
  <div class="card">
    <h3>use case</h3>
    <h2>体験は 8 ステップで定義する</h2>
    <ol>
      <li>3Dスキャンして <code>.glb</code> を作る</li>
      <li>Web上で物件を表示する</li>
      <li>見たい視点を決める</li>
      <li>カラー / 深度 / カメラ行列を取る</li>
      <li>自然言語で改修要望を書く</li>
      <li>必要ならマスク指定する</li>
      <li>ローカルAIで改修後画像を生成する</li>
      <li>比較し、物件データに保存する</li>
    </ol>
  </div>
</div>

---

<div class="layout">
  <div>
    <img class="photo" src="./assets/stock/slide04-3d-laptop.jpg" />
    <div class="source">Image URL: https://images.pexels.com/photos/3913016/pexels-photo-3913016.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600</div>
  </div>
  <div class="card">
    <h3>functional requirements</h3>
    <h2>機能要件は 4 ブロックで捉える</h2>
    <ul>
      <li>物件管理: 物件 / 部屋 / 結果の管理</li>
      <li>3Dビューア: 表示、回転、ズーム、平行移動、視点取得</li>
      <li>編集指定: プロンプト、マスク、スタイル選択</li>
      <li>生成と表示: ローカル生成、条件保存、Before / After 比較</li>
    </ul>
    <p class="tiny">詳細実装は章に分けるが、スライドではカテゴリ単位で見せる。</p>
  </div>
</div>

---

<div class="layout">
  <div>
    <img class="photo" src="./assets/stock/slide03-blueprint.jpg" />
    <div class="source">Image URL: https://images.pexels.com/photos/5476052/pexels-photo-5476052.jpeg?cs=srgb&amp;dl=pexels-lezginepik-5476052.jpg&amp;fm=jpg</div>
  </div>
  <div class="card">
    <h3>non-functional and data</h3>
    <h2>非機能要件は、再現性と説明責任が中心</h2>
    <ul>
      <li>主要処理は利用者PC上で動作可能</li>
      <li>3Dビュー操作は実用速度を確保</li>
      <li>モデル、seed、prompt、視点情報を保存</li>
      <li>AI生成であり施工保証ではないことを明示</li>
    </ul>
    <p class="tiny">保存データは <code>property_id</code>、<code>view_id</code>、画像群、カメラJSON、生成条件、出力画像、作成時刻を最低限保持。</p>
  </div>
</div>

---

<div class="layout">
  <div>
    <img class="photo" src="./assets/stock/slide07-real-estate-docs.jpg" />
    <div class="source">Image URL: https://images.pexels.com/photos/34135038/pexels-photo-34135038.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600</div>
  </div>
  <div class="card">
    <h3>architecture</h3>
    <h2>構成は疎結合に分ける</h2>
    <ul>
      <li>フロントエンド: Three.js による 3D ビューアと操作UI</li>
      <li>ローカル生成基盤: ComfyUI を第一候補に利用</li>
      <li>データ保存: 画像、JSON、生成条件を物件単位で保存</li>
      <li>将来拡張: API連携、再投影表示、視点補間</li>
    </ul>
  </div>
</div>

---

<div class="layout">
  <div>
    <img class="photo" src="./assets/stock/slide06-future-room.jpg" />
    <div class="source">Image URL: https://images.pexels.com/photos/7407956/pexels-photo-7407956.jpeg?cs=srgb&amp;dl=pexels-cottonbro-7407956.jpg&amp;fm=jpg</div>
  </div>
  <div class="card">
    <h3>mvp</h3>
    <h2>初期リリースは単一視点に絞る</h2>
    <ol>
      <li><code>.glb</code> の表示</li>
      <li>視点キャプチャ</li>
      <li>深度画像出力</li>
      <li>カメラJSON保存</li>
      <li>world position 取得</li>
      <li>マスク指定</li>
      <li>単一視点での画像生成</li>
      <li>Before / After 比較表示</li>
    </ol>
  </div>
</div>

---

<div class="layout">
  <div>
    <img class="photo" src="./assets/stock/slide05-renovation.jpg" />
    <div class="source">Image URL: https://images.pexels.com/photos/19503382/pexels-photo-19503382.jpeg?cs=srgb&amp;dl=pexels-enrique-19503382.jpg&amp;fm=jpg</div>
  </div>
  <div class="card">
    <h3>constraints and risks</h3>
    <h2>制約を隠さず、先に明示する</h2>
    <ul>
      <li>建築的妥当性や構造安全性は保証しない</li>
      <li>構造変更の表現は初期対象外</li>
      <li>品質は3Dモデル、深度、マスク精度に依存する</li>
      <li>無料 / ローカル前提のため GPU 性能に依存する</li>
      <li>過度な美化や視点不整合のリスクがある</li>
    </ul>
  </div>
</div>

---

<div class="layout">
  <div>
    <img class="photo" src="./assets/stock/slide08-modern-empty-interior.jpg" />
    <div class="source">Image URL: https://images.pexels.com/photos/10981670/pexels-photo-10981670.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600</div>
  </div>
  <div class="card">
    <h3>success</h3>
    <h2>評価軸は、使われたかどうか</h2>
    <ul>
      <li>物件イメージを持ちやすくなったという回答率</li>
      <li>問い合わせ率、内見予約率の改善</li>
      <li>閲覧時間の増加</li>
      <li>Before / After 比較機能の利用率</li>
    </ul>
    <p class="tiny">次の拡張候補は、面認識、家具提案、複数視点整合、再投影表示、管理画面。</p>
  </div>
</div>
