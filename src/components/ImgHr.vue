<template>
  <div>
    <div>
      来来来
    </div>
    <div v-show="current">
      asjdajksdh
      <n-button
        ref="222"
        @click="cancel"
      >
        子组件自己隐藏
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const current = ref(false)
const show = () => {
  current.value = true
}
const cancel = () => {
  current.value = false
}
defineExpose({
  show,
  cancel
})
</script>

<style scoped></style>
