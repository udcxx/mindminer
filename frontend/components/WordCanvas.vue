<script setup lang="ts">
import { ref } from 'vue'
import { useWords } from '@/composables/useWords'

const { words, updatePos } = useWords()

/* === CSS 変換: キャンバス中心を (0,0) === */
const toScreen = ({ x, y }: { x: number; y: number }) => ({
  left: `calc(50%)`,
  top: `calc(50%)`
})

const canvasRef = ref<HTMLElement | null>(null)

/* ドラッグ開始時点のメタ情報 */
interface DragMeta {
  offsetX: number   // ポインタと Word 左上との距離
  offsetY: number
}
const dragMeta = new Map<string, DragMeta>()

/* ハンドラ生成 */
const makeHandler = (w: { id: string, x: number, y:number }) =>
  (phase: 'start' | 'move' | 'end', _dx: number, _dy: number, e: PointerEvent) => {
    const canvas = canvasRef.value
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    if (phase === 'start') {
      /* 保存 ─ ポインタが Word 左上からどれだけずれて押されたか */
      dragMeta.set(w.id, {
        offsetX: e.clientX - (centerX + w.x),
        offsetY: e.clientY - (centerY + w.y)
      })
      return
    }

    if (phase === 'move') {
      const m = dragMeta.get(w.id)
      if (!m) return
      const newX = e.clientX - centerX - m.offsetX
      const newY = e.clientY - centerY - m.offsetY
      updatePos(w.id, newX, newY)
    }

    if (phase === 'end') {
      dragMeta.delete(w.id)
    }
  }
</script>

<template>
  <div ref="canvasRef" class="relative fill-parent">
    <WordChip
      v-for="w in words"
      :key="w.id"
      v-bind="w"
      :style="toScreen(w)"
      v-drag="makeHandler(w)"
    />
  </div>
</template>
