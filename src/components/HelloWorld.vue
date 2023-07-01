<script setup lang="ts">
import { ref } from 'vue'
import {createWindow, toggleWinVisible} from '@talex-touch/utils/plugin/sdk/common'

defineProps<{ msg: string }>()

const count = ref(0)

function newWindow() {
  const res = createWindow({
    url: 'https://www.baidu.com',
    title: '百度',

  })

  console.log( res )
}

function changeVisible() {
  toggleWinVisible(6)
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>&nbsp;
    <button type="button" @click="newWindow">New window</button>
    <button type="button" @click="changeVisible">ChangeVisible</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
