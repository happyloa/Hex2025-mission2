<script setup lang="ts">
/**
 * @typedef {Object} Props
 * @property {string} image - 圖片內容
 * @property {string} title - 成功案例標題
 * @property {Array} list - 案例列表項目
 */
defineProps({
  image: {
    type: String,
    default: "avatar1",
  },
  title: {
    type: String,
    default: "請輸入案例標題",
  },
  list: {
    type: Array,
    default: ["項目1", "項目2"],
  },
});
</script>

<template>
  <article>
    <img :src="`/avatar/${image}.webp`" alt="客戶圖片" class="mb-4" />
    <h3 class="mb-2 text-fs-4-bold">{{ title }}</h3>
    <ul
      class="mb-4 list-inside list-image-[url(avatar/check.webp)] text-fs-6 text-content"
    >
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <hr class="mb-4 border-b border-content" />
    <button
      type="button"
      class="rounded-full border border-black px-4 py-2 text-fs-6 text-content transition-all hover:bg-black hover:text-[#F5F5F5]"
    >
      前往聆聽 podcast
    </button>
  </article>
</template>
