<script setup>
    const open = ref(false)
    const { resetWords } = useWords()

    const reset = () => {
        resetWords();
        ui('#reset-alert');
        ui('#dialog-navigation-drawer');
    }
</script>

<template>
    <button class="circle btn flat round" data-ui="#dialog-navigation-drawer">
        <i>menu</i>
    </button>

    <dialog class="right no-padding" id="dialog-navigation-drawer">
        <nav class="drawer">
            <header>
                <nav>
                    <img src="/logo.svg" style="height:32px; width: auto;" class="circle transparent">
                    <h4>MindMiner<span style="font-size: 0.5em; display: block; text-align: right;">by <a href="https://udcxx.me/">udcxx.</a></span></h4>
                </nav>
            </header>
            <!-- <a href="">活用のヒント</a> -->
            <!-- <a href="">エクスポート</a> -->
            <NuxtLink to="/tarms">利用規約</NuxtLink>
            <NuxtLink to="/policy">プライバシーポリシー</NuxtLink>
            <a data-ui="#reset-alert">データリセット</a>
        </nav>
    </dialog>

    <dialog id="reset-alert">
        <h5>データをリセットしますか？</h5>
        <div><p>追加した単語がすべて削除されます。<br>リセット後は復旧できません。</p></div>
        <nav class="right-align no-space">
            <button class="transparent link" @click="reset()">リセット</button>
            <button class="button primary" data-ui="#reset-alert">やめる</button>
        </nav>
    </dialog>
</template>

<style lang="css">


</style>
