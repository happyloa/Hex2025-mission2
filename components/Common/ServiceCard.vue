<script setup lang="ts">
/**
 * @typedef {Object} Props
 * @property {Boolean} reverse - 是否將卡片內容翻轉顯示
 * @property {string} image - 圖片內容
 * @property {string} title - 服務內容標題
 * @property {string} description - 服務說明文字
 */
defineProps({
  reverse: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    default: "service1",
  },
  title: {
    type: String,
    default: "請輸入服務內容",
  },
  description: {
    type: String,
    default: "請輸入服務說明",
  },
});
</script>

<template>
  <article
    class="relative flex flex-col"
    :class="reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'"
  >
    <figure>
      <NuxtPicture
        class="w-full"
        :src="`/desktop/home/${image}.webp`"
        :sources="[
          {
            srcset: `/mobile/home/${image}.webp`,
            media: '(max-width: 1024px)',
          },
        ]"
        :alt="`${title}圖片`"
      />
    </figure>
    <div
      class="top-1/2 w-full bg-white p-6 lg:absolute lg:max-w-[480px] lg:-translate-y-1/2"
      :class="reverse ? 'left-0' : 'right-0'"
    >
      <img src="/icon/dash.png" alt="裝飾線條" />
      <h3 class="mb-2 text-fs-3-bold">{{ title }}</h3>
      <p class="text-fs-6 text-content">
        {{ description }}
      </p>
    </div>
  </article>
</template>
