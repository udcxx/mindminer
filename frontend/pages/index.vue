<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useWords } from '@/composables/useWords'

interface SuggestApiResp {
    data: string[]
}

const { addWord } = useWords();
const { words } = useWords();
const form = reactive({ text: '' })
const suggests = ref<string[]>([])

const inputedWord = () => {
    submit(form.text)
    form.text = ''
}

const suggestWord = (word: string) => {
    submit(word)
}

const submit = async (inputText: string) => {
    if (!inputText.trim()) return

    addWord({ text: inputText, x: 0, y: 0 })

    /* サジェストをリセット */
    suggests.value = []

    /* 関連語 API */
    const res = await $fetch<SuggestApiResp>(useRuntimeConfig().public.openaiEndpoint, {
        method: 'POST',
        body: { data: words.value.slice(-10) }
    })

    /* 返ってきた配列を置き換え */
    if (Array.isArray(res?.data)) {
        suggests.value = res.data as string[]
    }

    /* 課金誘導 */
    if (words.value.length % 20 === 0) {
        ui('#charge-announce')
    }
}
</script>

<template>
    <div class="overlay blur"></div>

    <div class="fill-parent column main">
        <header class="transparent">
            <nav>
                <img src="/logo.svg" style="height:32px; width: auto;" class="circle transparent">
                <div class="max"></div>
                <MobileMenu />
            </nav>
        </header>

        <WordCanvas class="flex-grow transparent" />

        <footer>
            <div class="top-margin suggest-wrap" v-if="suggests.length">
                <div v-for="(s, i) in suggests" :key="i" class="suggest" @click="suggestWord(s)">
                    {{ s }}
                </div>
            </div>

            <nav class="no-margin bottom-margin">
                <input v-model="form.text" placeholder="思いついた単語を入力してください..." class="input max"
                    @keydown.enter="inputedWord">
                <button class="btn contained" @click="inputedWord">追加</button>
            </nav>
        </footer>
    </div>

    <dialog id="charge-announce">
        <h5>👋 ご利用ありがとうございます</h5>
        <div>
            <p>このツールは無料で提供しています。</p>
            <p>もし「役に立った」と思ったら、開発の応援や改善アイディアを送っていただけると嬉しいです！</p>
        </div>
        <ul class="list">
            <NuxtLink to="https://buymeacoffee.com/udcxx" class="button transparent link left-align">☕ コーヒーをおごる</NuxtLink>
            <NuxtLink to="https://buymeacoffee.com/udcxx" class="button transparent link left-align">🛒 ほしいものリストを見る</NuxtLink>
            <NuxtLink to="https://udcxx.me/contact/?sub=TOOL" class="button transparent link left-align">💡 改善アイディア・不具合報告を送る</NuxtLink>
        </ul>
        <nav class="right-align no-space">
            <button class="transparent link" data-ui="#charge-announce">なにもしない</button>
        </nav>
    </dialog>
</template>


<style lang="css">
.main {
    height: 100vh;
    background-color: var(--background);
}

footer {
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}

footer .suggest-wrap {
    width: auto;
    display: inline-flex;
    justify-content: flex-start;
    overflow-x: scroll;
}

footer .suggest {
    padding: 5px 10px;
    margin-right: 10px;
    width: fit-content;
    border-radius: 10px;
    flex-shrink: 0;
    color: #FFF;
    background-color: #38A3A5;
}

footer nav {
    min-block-size: auto !important;
    margin-bottom: 1rem;
}

footer input {
    padding: 0 10px;
    font-size: 16px;
    line-height: 2em;
    border-radius: 10px;
}
</style>