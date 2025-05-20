<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';

function useScrollReveal(selector = '.scroll-reveal', threshold = 0.1) {
  let observer: IntersectionObserver;

  const reveal = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  };

  onMounted(() => {
    observer = new IntersectionObserver(reveal, { threshold });
    document.querySelectorAll(selector).forEach(el => observer.observe(el));
  });

  onBeforeUnmount(() => {
    observer && observer.disconnect();
  });
}

useScrollReveal();

</script>

<template>
    <section class="hero">
        <h1>眠っている知識を<br>AI で掘り起こそう</h1>
        <p class="large">Mind Miner は考えをひらめきに変える<br>あなた専用の思考発掘ツールです。</p>
        <button class="large primary" onclick="location.href='https://mindminer.app'">今すぐ無料で使う</button>

        <!-- micro-social-proof -->
        <div class="stats">
            <div class="stat">
                <h3>＋37 %</h3><small>発想量 UP*¹</small>
            </div>
            <div class="stat">
                <h3>0 円</h3><small>完全無料</small>
            </div>
            <div class="stat">
                <h3>120 秒</h3><small>登録〜利用開始</small>
            </div>
        </div>
        <small>*¹ βテスター 40 名の自己申告平均値</small>
    </section>

    <!-- ───── Features ───── -->
    <section id="features" class="container section">
        <h2 class="center-align">Mind Miner が選ばれる 3 つの理由</h2>
        <div class="row">
            <div class="col s12 m4">
                <article class="card scroll-reveal">
                    <h6>思考の発掘装置</h6>
                    <p>AI が記憶と知識の断片を関連語として提示。「そういえば…」を引き出し再接続します。</p>
                </article>
            </div>
            <div class="col s12 m4">
                <article class="card scroll-reveal">
                    <h6>発想を広げるワードマップ</h6>
                    <p>ドラッグ&ドロップで自由に配置しながらアイデアを組み合わせ。位置関係から新たなひらめきが生まれます。</p>
                </article>
            </div>
            <div class="col s12 m4">
                <article class="card scroll-reveal">
                    <h6>登録不要＆無料</h6>
                    <p>アクセスした瞬間に使い始められ、データはローカル保存。Buy Me a Coffee での支援も歓迎。</p>
                </article>
            </div>
        </div>
    </section>

    <!-- ───── Testimonials ───── -->
    <section class="section grey-4">
        <div class="container">
            <h2 class="center-align">ユーザーの声</h2>
            <div class="row center-align">
                <div class="col s12 m4 scroll-reveal">
                    <article class="card"><i class="large">format_quote</i>
                        <p>「箇条書きのメモが一夜で企画書レベルに！Mind Miner なしでは戻れません。」</p>
                        <small>– UX デザイナー K.T.</small>
                    </article>
                </div>
                <div class="col s12 m4 scroll-reveal">
                    <article class="card"><i class="large">format_quote</i>
                        <p>「情報の点と点が一瞬で線になる体験。研究テーマの再発見に最適です。」</p>
                        <small>– 大学院生 M.S.</small>
                    </article>
                </div>
                <div class="col s12 m4 scroll-reveal">
                    <article class="card"><i class="large">format_quote</i>
                        <p>「無料でここまで？即座にアイデア会議が始められるのでライター稼業が捗る！」</p>
                        <small>– フリーライター Y.N.</small>
                    </article>
                </div>
            </div>
        </div>
    </section>

    <!-- ───── How-to ───── -->
    <section id="howto" class="section container">
        <h2 class="center-align">3 ステップでカンタン開始</h2>
        <ul class="timeline">
            <li class="scroll-reveal"><b>1. アクセス</b>
                <p>ページを開くだけでスタート。</p>
            </li>
            <li class="scroll-reveal"><b>2. キーワード入力</b>
                <p>思いつくワードを入力すると関連語が次々表示。</p>
            </li>
            <li class="scroll-reveal"><b>3. ドラッグで整理</b>
                <p>マップ上で自由に配置。発想が視覚的に広がります。</p>
            </li>
        </ul>
        <div class="center-align">
            <button class="large primary" onclick="location.href='https://mindminer.app'">無料で体験する</button>
        </div>
    </section>

    <!-- ───── FAQ ───── -->
    <section class="section">
        <div class="container">
            <h2 class="center-align">よくある質問</h2>
            <details class="scroll-reveal">
                <summary>本当に完全無料ですか？</summary>
                <p>はい。登録も不要です。気に入ったら Buy Me a Coffee などでご支援ください。</p>
            </details>
            <details class="scroll-reveal">
                <summary>データはクラウドに送信されますか？</summary>
                <p>入力内容は一切送信されず、ブラウザ上で完結します。</p>
            </details>
            <details class="scroll-reveal">
                <summary>商用利用は可能ですか？</summary>
                <p>作成したマップや発想は自由にご活用いただけます。</p>
            </details>
        </div>
    </section>

    <!-- ───── CTA Footer ───── -->
    <footer id="cta" class="section primary">
        <div class="container center-align">
            <h2>今すぐ、思考を掘り起こそう</h2>
            <p class="large">無料で無限のひらめきを体験。</p>
            <button class="large secondary" onclick="location.href='https://mindminer.app'">Mind Miner を使う</button>
            <p><small>© 2025 Mind Miner</small></p>
        </div>
    </footer>
</template>


<style>
/* ───── Visuals ───── */
.hero {
    background: linear-gradient(135deg, #283593, #1e88e5);
    color: #fff;
    padding: 96px 24px;
    text-align: center
}

.hero h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 16px
}

.stats {
    margin-top: 48px;
    text-align: center
}

.stat {
    display: inline-block;
    margin: 0 24px
}

.stat h3 {
    font-size: 2rem;
    margin: 0
}

/* ふわっと表示 */
.scroll-reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: .6s ease-out
}

.scroll-reveal.visible {
    opacity: 1;
    transform: none
}
</style>