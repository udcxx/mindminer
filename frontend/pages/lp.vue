<script lang="ts" setup>
useHead({
    title: 'Mind Miner - 思考発掘ツール',
    meta: [
        { name: 'description', content: '思考発掘ツール「Mind Miner」は、AIの力を借りながら、あなたの脳内に眠っている知識や記憶をひらめきに変えるツールです。' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#6c5ce7' },
        { property: 'og:title', content: 'Mind Miner - 思考発掘ツール' },
        { property: 'og:description', content: '思考発掘ツール「Mind Miner」は、AIの力を借りながら、あなたの脳内に眠っている知識や記憶をひらめきに変えるツールです。' },
        { property: 'og:image', content: '/screen.jpg' },
        { property: 'og:url', content: 'https://app.udcxx.me/mindminer/' },
    ]
});
</script>

<template>
    <div class="mind-miner-lp">
        <!-- ヘッダー -->
        <header class="primary-container">
            <nav>
                <div>
                    <img src="/logo.svg" alt="Mind Miner Logo" class="logo" />
                </div>
                <h1 class="max large-text left-align">Mind Miner</h1>
                <div>
                    <NuxtLink to="/?from=lp" class="button round middle-align primary hidden-xs-flex">今すぐ使ってみる</NuxtLink>
                    <NuxtLink to="/?from=lp" class="button round middle-align primary show-xs-flex">使ってみる</NuxtLink>
                </div>
            </nav>
        </header>

        <!-- デスクトップナビゲーション -->
        <div class="navi">
            <div class="container">
                <nav class="center-align">
                    <a href="#features" class="link">機能</a>
                    <a href="#how-to-use" class="link">使い方</a>
                    <a href="#target" class="link">対象者</a>
                    <a href="#safety" class="link">安心ポイント</a>
                </nav>
            </div>
        </div>
        <main class="responsive">
            <!-- ヒーローセクション -->
            <section class="hero-section">
                <div class="container">
                    <div class="row responsive reverse-xs">
                        <div class="col s12 m6 l6">
                            <h2 class="xlarge-text bold">眠っている<br class="show-xs">知識や記憶を、<br>AIの力でひらめきに変える</h2>
                            <p class="medium-text">思考発掘ツール「Mind Miner」</p>
                            <div class="mt-xl">
                                <NuxtLink to="/?from=lp" class="button round large primary">無料で始める</NuxtLink>
                            </div>
                        </div>
                        <div class="col s12 m6 l6">
                            <div class="image-container">
                                <img src="/screen.jpg" alt="Mind Miner アプリケーション" class="responsive-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 特徴セクション -->
            <section id="features" class="features-section">
                <h2 class="center-align large-text bold">主な特徴</h2>
                <div class="grid">
                    <div class="feature-card s12 m4">
                        <div class="icon-container">
                            <i class="material-icons xxlarge-text ">psychology</i>
                        </div>
                        <h3 class="large-text bold ">AIが関連語を提示</h3>
                        <p class="">記憶や知識の断片を呼び起こし、新たな発想のきっかけを提供します。</p>
                    </div>
                    <div class="feature-card s12 m4">
                        <div class="icon-container">
                            <i class="material-icons xxlarge-text ">map</i>
                        </div>
                        <h3 class="large-text bold ">ワードマップ機能</h3>
                        <p class="">自由に単語を配置・整理して、新しい発想を生み出せます。</p>
                    </div>
                    <div class="feature-card s12 m4">
                        <div class="icon-container">
                            <i class="material-icons xxlarge-text ">rocket_launch</i>
                        </div>
                        <h3 class="large-text bold ">登録不要・完全無料</h3>
                        <p class="">アクセスするだけで即使える、シンプルで使いやすいツールです。</p>
                    </div>
                </div>
            </section>

            <!-- 使い方セクション -->
            <section id="how-to-use" class="how-to-use-section">
                <h2 class="center-align large-text bold ">使い方（3ステップ）</h2>
                <div class="space hidden-xs"></div>
                <div class="grid">
                    <div class="col s12 m4">
                        <div class="step-card">
                            <div class="step-number">1</div>
                            <h3 class="large-text bold ">アクセスするだけで即スタート</h3>
                            <p class="">登録不要で、すぐに使い始めることができます。</p>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="step-card">
                            <div class="step-number">2</div>
                            <h3 class="large-text bold ">キーワードを入力</h3>
                            <p class="">思いついた単語を入力すると、AIが関連語を提示します。</p>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="step-card">
                            <div class="step-number">3</div>
                            <h3 class="large-text bold ">ワードマップを作成</h3>
                            <p class="">自由に単語を配置・整理して、新しいアイデアを発見しましょう。</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ターゲットユーザーセクション -->
            <section id="target" class="target-users-section">
                <h2 class="center-align large-text bold">こんな方におすすめ</h2>
                <div class="grid">
                    <div class="col s12 m6">
                        <div class="user-card">
                            <i class="material-icons xlarge-text ">brush</i>
                            <h3 class="medium-text bold ">クリエイター</h3>
                            <p class="">アイデアを生み出したいデザイナーや作家の方</p>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="user-card">
                            <i class="material-icons xlarge-text ">school</i>
                            <h3 class="medium-text bold ">学生</h3>
                            <p class="">学びを深めたい、知識を整理したい学生の方</p>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="user-card">
                            <i class="material-icons xlarge-text ">business_center</i>
                            <h3 class="medium-text bold ">ビジネスパーソン</h3>
                            <p class="">問題解決を目指すビジネスパーソンの方</p>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="user-card">
                            <i class="material-icons xlarge-text ">self_improvement</i>
                            <h3 class="medium-text bold ">自己啓発に興味がある方</h3>
                            <p class="">自分の思考を整理し、新たな気づきを得たい方</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 安心ポイントセクション -->
            <section id="safety" class="safety-points-section">
                <h2 class="center-align large-text bold ">安心ポイント</h2>
                <div class="grid">
                    <div class="col s12 m4">
                        <div class="safety-card">
                            <i class="material-icons xlarge-text">person_off</i>
                            <h3 class="medium-text bold ">登録不要</h3>
                            <p class="">面倒な手続きなしで、すぐに使えます</p>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="safety-card">
                            <i class="material-icons xlarge-text">money_off</i>
                            <h3 class="medium-text bold ">完全無料</h3>
                            <p class="">お金は一切かかりません</p>
                            <p class="small-text"><i class="tiny no-margin">info</i> <a href="https://buymeacoffee.com/udcxx" target="_blank" class="link">Buy me coffee</a>や<a href="https://www.amazon.co.jp/hz/wishlist/ls/3S78SPACY6TSJ" target="_blank" class="link">Amazonほしいものリスト</a>からのご支援をいただけると嬉しいです。</p>
                        </div>
                    </div>
                    <div class="col s12 m4">
                        <div class="safety-card">
                            <i class="material-icons xlarge-text">business</i>
                            <h3 class="medium-text bold ">商用利用OK</h3>
                            <p class="">作ったアイデアやマップは自由に使えます</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA セクション -->
            <section class="cta-section primary-container">
                <div class="container">
                    <h2 class="center-align large-text bold ">今すぐ無料で使って、あなたの中に眠る発想を掘り起こそう！</h2>
                    <div class="center-align mt-xl">
                        <NuxtLink to="/?from=lp" class="button round xlarge primary-dark ">Mind
                            Minerを使ってみる</NuxtLink>
                    </div>
                </div>
            </section>
        </main>


        <!-- フッター -->
        <footer class="footer-section">
            <div class="grid">
                <div class="s12 m6">
                    <div class="logo-container">
                        <img src="/logo.svg" alt="Mind Miner Logo" class="logo small" />
                        <span class="medium-text">Mind Miner</span>
                    </div>
                    <p class="mt-m">眠っている知識や記憶を、AIの力でひらめきに変える思考発掘ツール</p>
                </div>
                <div class="s12 m6 right-align">
                    <div class="mt-m">
                        <NuxtLink to="/policy/?from=lp" class="link small-text">プライバシーポリシー</NuxtLink>
                        <NuxtLink to="/terms/?from=lp" class="link ml-m small-text">利用規約</NuxtLink>
                        <a href="https://udcxx.me/contact/?sub=TOOL" class="link ml-m small-text">お問い合わせ</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style>
/* BeerCSSのスタイルを拡張 */
:root {
    --primary: #6c5ce7;
    --primary-dark: #5541d7;
    --primary-light: #a29bfe;
    --secondary: #fd79a8;
    --dark: #2d3436;
    --light: #f5f6fa;
}

body {
    font-family: 'Noto Sans JP', sans-serif;
    color: var(--dark);
    background-color: var(--light);
    line-height: 1.6;
    margin: 0;
    padding: 0;
}

.mind-miner-lp {
    overflow-x: hidden;
}

/* ヘッダー */
header {
    padding: 1rem 2rem;
}

.logo-container {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.logo {
    width: 40px;
    height: 40px;
}

.logo.small {
    width: 30px;
    height: 30px;
}

/* ナビゲーション */
.navi {
    background-color: var(--light);
    padding: 0.5rem 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.desktop-nav nav,
.mobile-menu nav {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.mobile-menu nav {
    gap: 1rem;
    flex-wrap: wrap;
}

.desktop-nav .link,
.mobile-menu .link {
    color: var(--dark);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.desktop-nav .link:hover,
.mobile-menu .link:hover {
    color: var(--primary);
}

/* ヒーローセクション */
.hero-section {
    padding: 5rem 2rem;
}

.image-container {
    width: 50%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
}

.responsive-img {
    width: 100%;
    height: auto;
    display: block;
}

/* 特徴セクション */
.features-section {
    padding: 5rem 2rem;
    background-color: white;
}

.feature-card {
    padding: 2rem;
    border-radius: 12px;
    background-color: var(--light);
    height: 100%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin-bottom: 1.5rem;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.icon-container {
    color: var(--primary);
    margin-bottom: 1rem;
}

/* 使い方セクション */
.how-to-use-section {
    padding: 5rem 2rem;
    background-color: var(--light);
}

.step-card {
    padding: 2rem;
    border-radius: 12px;
    background-color: white;
    height: 100%;
    position: relative;
    padding-top: 3rem;
    margin-bottom: 1.5rem;
}

.step-number {
    position: absolute;
    top: -20px;
    left: 20px;
    width: 40px;
    height: 40px;
    background-color: var(--primary);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
}

/* ターゲットユーザーセクション */
.target-users-section {
    padding: 5rem 2rem;
    background-color: white;
}

.user-card {
    padding: 2rem;
    border-radius: 12px;
    background-color: var(--light);
    height: 100%;
    text-align: center;
    transition: transform 0.3s ease;
    margin-bottom: 1.5rem;
}

.user-card:hover {
    transform: translateY(-5px);
}

.user-card i {
    color: var(--primary);
    margin-bottom: 1rem;
}

/* 安心ポイントセクション */
.safety-points-section {
    padding: 5rem 2rem;
    background-color: var(--light);
}

.safety-card {
    padding: 2rem;
    border-radius: 12px;
    background-color: white;
    height: 100%;
    text-align: center;
    margin-bottom: 1.5rem;
}

.safety-card i {
    color: var(--primary);
    margin-bottom: 1rem;
}

/* CTA セクション */
.cta-section {
    padding: 5rem 2rem;
    color: white;
}

/* フッター */
.footer-section {
    padding: 3rem 2rem;
    background-color: var(--dark);
    color: white;
    position: relative;
    width: 100%;
}

.footer-section .logo-container {
    margin-bottom: 1rem;
}

.footer-section .link {
    color: var(--light);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-section .link:hover {
    color: var(--primary-light);
}

/* ユーティリティクラス */
.mt-m {
    margin-top: 1rem;
}

.mt-xl {
    margin-top: 3rem;
}

.ml-m {
    margin-left: 1rem;
}

/* レスポンシブ表示制御 */
.show-xs, .show-xs-flex {
    display: none;
}

/* モバイル向けの全幅ボタン */
.full-width-xs {
    width: 100%;
    box-sizing: border-box;
}

/* レスポンシブ調整 */
@media (max-width: 768px) {
    .show-xs {
        display: block;
    }
    .show-xs-flex {
        display: flex;
    }
    .hidden-xs-flex {
        display: none;
    }

    .hero-section {
        padding: 2rem 1rem;
    }

    .features-section,
    .how-to-use-section,
    .target-users-section,
    .safety-points-section {
        padding: 3rem 1rem;
    }

    .cta-section {
        padding: 3rem 1rem;
    }

    header {
        padding: 0.75rem 1rem;
    }

    .reverse-xs {
        flex-direction: column-reverse;
    }

    .image-container {
        width: 100%;
        border-radius: 5px;
    }

    .feature-card,
    .step-card,
    .user-card,
    .safety-card {
        padding: 1.5rem;
    }

    .step-number {
        width: 30px;
        height: 30px;
        font-size: 1rem;
        top: -15px;
        left: 15px;
    }
}

/* タブレット向け調整 */
@media (min-width: 769px) and (max-width: 1024px) {

    .hero-section,
    .features-section,
    .how-to-use-section,
    .target-users-section,
    .safety-points-section,
    .cta-section {
        padding: 4rem 1.5rem;
    }

    .feature-card,
    .step-card,
    .user-card,
    .safety-card {
        padding: 1.75rem;
    }
}

/* 小さいモバイル向け調整 */
@media (max-width: 480px) {
    .hero-section {
        padding: 1.5rem 1rem;
    }

    .features-section,
    .how-to-use-section,
    .target-users-section,
    .safety-points-section,
    .cta-section {
        padding: 2rem 1rem;
    }

    .feature-card,
    .step-card,
    .user-card,
    .safety-card {
        padding: 1.25rem;
    }

    .mobile-menu nav {
        gap: 0.5rem;
    }

    .mobile-menu .link {
        font-size: 0.85rem;
        padding: 0.5rem;
    }
}
</style>