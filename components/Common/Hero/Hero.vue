<script setup lang="ts">
/**
 * @typedef {Object} Props
 * @property {string} title - 主要標題，會顯示於圖片右側的 H1 元素中
 * @property {string} subtitle - 副標題，會顯示於 H1 下方的段落文字
 * @property {Boolean} noIntro - 是否會被 Intro 元件給蓋到
 */
defineProps({
  title: {
    type: String,
    default: "請輸入標題",
  },
  subtitle: {
    type: String,
    default: "請輸入副標題",
  },
  noIntro: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="mx-auto flex max-w-[1920px] flex-col lg:flex-row">
    <figure>
      <NuxtPicture
        class="w-full"
        img-src="/desktop/home/hero-image.webp"
        :sources="[
          {
            srcset: '/mobile/home/hero-image.webp',
            media: '(max-width: 640px)',
          },
        ]"
        alt="人物形象照"
      />
    </figure>
    <div
      class="flex-1 content-center bg-[url('/mobile/home/hero-deco.webp')] bg-cover text-blue md:bg-[url('/desktop/home/hero-deco.webp')] lg:px-20 lg:py-0"
      :class="noIntro ? 'p-6' : 'px-6 pb-[200px] pt-6'"
    >
      <h1
        data-aos="fade-up"
        class="mb-3 whitespace-nowrap text-head-1-sm xl:text-head-1"
      >
        {{ title }}
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        class="break-keep text-fs-3-bold lg:whitespace-nowrap"
      >
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>
