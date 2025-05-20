import { ref, watch } from 'vue'

export interface Word {
    id: string
    text: string
    x: number
    y: number
}

const STORAGE_KEY = 'mindminer_words'
const words = ref<Word[]>([])

/* ---------- 初期読み込み ---------- */
if (process.client) {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) words.value = JSON.parse(raw)
}

/* ---------- 永続化 ---------- */
if (process.client) {
    watch(
        words,
        v => localStorage.setItem(STORAGE_KEY, JSON.stringify(v)),
        { deep: true }
    )
}

// 単語追加
function addWord(w: Omit<Word, 'id'>) {
    words.value.push({ id: crypto.randomUUID(), ...w })
}

// 単語移動
function updatePos(id: string, x: number, y: number) {
    const t = words.value.find(w => w.id === id)
    if (t) Object.assign(t, { x, y })
}

/* データクリア */
function resetWords() {
    words.value = []
    if (process.client) localStorage.removeItem(STORAGE_KEY)
}

/* ---------- エクスポート ---------- */
export function useWords() {
    return { words, addWord, updatePos, resetWords }
}
