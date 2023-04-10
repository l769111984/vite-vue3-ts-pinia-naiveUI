<script setup lang="ts">
import { useCounterStore } from '@/store'
const counter = useCounterStore()
defineProps<{ msg: string }>()

const handleChangeCounter = () => {
  // counter.count++
  counter.increment()
}

const inputValue = ref()
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <n-ellipsis :line-clamp="2">
      电灯熄灭 物换星移 泥牛入海<br>黑暗好像 一颗巨石 按在胸口<br>独脚大盗
      百万富翁 摸爬滚打<br>黑暗好像 一颗巨石 按在胸口
    </n-ellipsis>
    <n-input
      v-model:value="inputValue"
      type="text"
      placeholder="麻烦输入你要的值"
    />
    <n-button @click="handleChangeCounter">
      count is {{ counter.count }}
    </n-button>
  </div>
</template>
