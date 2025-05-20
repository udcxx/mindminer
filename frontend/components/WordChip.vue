<script setup lang="ts">
defineProps<{
    id: string
    text: string
    x: number
    y: number
}>()

const emit = defineEmits<{
    drag: [id: string, dx: number, dy: number]
}>()
</script>

<template>
    <div class="chip" :style="{
        position: 'absolute',
        transform: `translate(${x}px, ${y}px)`
    }" v-drag @dragend="({ offsetX, offsetY }) => emit('drag', id, offsetX, offsetY)">
        {{ text }}
    </div>
</template>

<style>
.chip {
    animation: bgColor 3s 0s both;
    background-color: #fff;
}

@keyframes bgColor {
    0%, 70% { background-color: #80ED99; }
    100% { background-color: #FFFFFF;}
}
</style>