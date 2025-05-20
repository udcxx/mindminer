### 📝 Mind Miner ― 現時点の仕様サマリ

| 区分                                  | 内容                                                                                                                                                                                                                                            |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **形態**                              | 静的 Web ツール（Nuxt 3 SSG／レスポンシブ）＋ 小型 PHP API                                                                                                                                                                                                     |
| **フロント**                            | - **Nuxt 3**（`ssr:false`）<br>- **BeerCSS**：`beer.min.css`＋`beer.min.js` をプラグインで副作用読み込み<br>- **material-dynamic-colors**：BeerCSS のテーマ色用<br>- **カラー設計**：`#293462`, `#22577A`, `#38A3A5`, `#80ED99`, `#57CC99` → `assets/css/colors.css` でカスタム変数 |
| **主要 UI**                           | - `pages/index.vue` ＝ 1 画面構成<br>- `<WordCanvas>`：単語チップを絶対配置し、画面中心を `(0,0)` とする独自座標系<br>- `<WordChip>`：BeerCSS `chip`＋`v-drag` でドラッグ可能<br>- `<MobileMenu>`：BeerCSS `<dialog>` を使った全画面ドロワー                                                      |
| **状態管理**                            | `useWords.ts` composable で単語配列を保持／`localStorage` に即時永続化                                                                                                                                                                                       |
| **ドラッグ**                            | 任意の `v-drag` ディレクティブ（または `vue-drag-resize`）で位置更新 → composable に `updatePos()`                                                                                                                                                                 |
| **関連語生成**                           | - **backend/api/suggest.php** が OpenAI Chat Completion に問い合わせ<br>- プロンプト：「『入力語』から連想される日本語単語を5つ箇条書き」<br>- フロントから `fetch` POST → 返却 JSON の `data` 配列をそのまま新規単語として配置                                                                              |
| **データ構造**                           | `json { "id": "uuid", "text": "単語", "x": 120, "y": -80 } `                                                                                                                                                                                    |
| **ディレクトリ**                          | `frontend/` (Nuxt) と `backend/` (PHP)<br>主なファイル：`nuxt.config.ts` / `app.vue` / `plugins/beercss.client.ts` / `pages/index.vue` / `components/*` / `backend/api/suggest.php`                                                                   |
| **開発起動コマンド**                        | \`\`\`bash # back                                                                                                                                                                                                                             |
| cd backend && php -S localhost:8000 |                                                                                                                                                                                                                                               |

# front

cd frontend && npm run dev\`\`\` |
\| **動作確認済み** | 1. 画面描画＋デザイン反映<br>2. 単語追加・ドラッグ位置保存<br>3. BeerCSS JS 機能（リップル・ダイアログ）が有効 |

この状態で **「単語マインドマップ＋関連語自動展開」** の MVP が動作します。今後はエクスポート、PWA、重複除外などを拡張していく想定です。
