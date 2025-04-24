<script setup>
const route = useRoute();

// 用 useAsyncData + queryCollection 拿單篇文章
//   - .path() 直接過濾 collection 裡 path 等於 route.path 的文件
//   - .first() 把結果回傳成一個物件而不是陣列
const { data: post } = await useAsyncData(`${route.path}`, () =>
  queryCollection("blog").path(route.path).first(),
);
</script>

<template>
  <CommonHeroBlog hidePreview />
  <section
    v-if="post"
    class="mx-auto max-w-[1920px] border border-secondary bg-bgc px-3 py-16 md:py-20"
  >
    <article class="prose mx-auto max-w-[636px]">
      <!-- 正文，ContentRenderer 會自動把 Markdown 轉成 HTML + Vue 元件 -->
      <ContentRenderer :value="post" />
    </article>
  </section>

  <!-- loading / not found 處理 -->
  <p v-else class="py-10 text-center text-fs-2 text-content">
    文章載入中或不存在🥲
  </p>
  <CommonSocialLinks />
</template>
