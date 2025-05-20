import { defineNuxtPlugin } from '#app'
import type { Directive } from 'vue'

/**
 * v-drag
 * binding.value は (phase, dxTotal, dyTotal, e) を受け取る
 *   phase: 'start'｜'move'｜'end'
 *   dxTotal / dyTotal: pointerdown からの累積移動量
 */
type DragHandler = (phase: 'start' | 'move' | 'end', dx: number, dy: number, e: PointerEvent) => void

const dragDirective: Directive<HTMLElement, DragHandler> = {
  mounted(el, binding) {
    let startX = 0
    let startY = 0

    const fire = (phase: 'start' | 'move' | 'end', e: PointerEvent) => {
      const dx = e.clientX- startX
      const dy = e.clientY- startY
      binding.value?.(phase, dx, dy, e)
    }

    const onMove = (e: PointerEvent) => fire('move', e)

    const onUp = (e: PointerEvent) => {
      fire('end', e)                              // 最後も必ず 1 回反映
      el.releasePointerCapture(e.pointerId)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
    }

    const onDown = (e: PointerEvent) => {
      startX = e.clientX
      startY = e.clientY
      fire('start', e)
      el.setPointerCapture(e.pointerId)
      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerup', onUp)
      window.addEventListener('pointercancel', onUp)
    }

    el.style.touchAction = 'none'
    el.addEventListener('pointerdown', onDown)
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('drag', dragDirective)
})
