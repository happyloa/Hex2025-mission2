<script setup>
const route = useRoute();

// 用 useAsyncData + queryCollection 拿單篇文章
//   - .path() 直接過濾 collection 裡 path 等於 route.path 的文件
//   - .first() 把結果回傳成一個物件而不是陣列
const { data: post } = await useAsyncData(`${route.path}`, () =>
  queryCollection("blog").path(route.path).first(),
);

useSeoMeta({
  title: `${post.value.title} | 體驗營最終任務 - 個人品牌網站`,
  ogTitle: post.value.title,
  description: post.value.description,
  ogDescription: post.value.description,
  ogImage: "/ogImage.webp",
  twitterCard: "/ogImage.webp",
});

// 拿所有文章的 slug，依 date DESC 排序
const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("blog").select("slug").order("date", "DESC").all(),
);

// 計算出路徑陣列
const paths = computed(() => {
  return posts.value ? posts.value.map((item) => item.slug) : [];
});

// 找到當前文章在陣列中的索引
const currentIndex = computed(() =>
  paths.value.findIndex((p) => p === route.path),
);

// 是否存在「上一篇」（較新的文章）
const hasPrev = computed(() => currentIndex.value > 0);
// 是否存在「下一篇」（較舊的文章）
const hasNext = computed(
  () => currentIndex.value >= 0 && currentIndex.value < paths.value.length - 1,
);

// 8. 計算前後連結路徑
const prevPath = computed(() =>
  hasPrev.value ? paths.value[currentIndex.value - 1] : "",
);
const nextPath = computed(() =>
  hasNext.value ? paths.value[currentIndex.value + 1] : "",
);

// 是否是最新文章（陣列索引 0）
const isFirst = computed(() => currentIndex.value === 0);
// 是否是最舊文章（陣列最後一筆）
const isLast = computed(() => currentIndex.value === paths.value.length - 1);
</script>

<template>
  <CommonHeroBlog hidePreview />
  <section
    v-if="post"
    class="mx-auto max-w-[1920px] border border-secondary bg-bgc px-3 py-16 md:py-20"
  >
    <!-- 正文，ContentRenderer 會自動把 Markdown 轉成 HTML + Vue 元件 -->
    <ContentRenderer
      :value="post"
      tag="article"
      class="prose mx-auto mb-12 max-w-[636px]"
    />
    <nav
      class="mx-auto flex max-w-[636px] flex-wrap items-center justify-between gap-6 whitespace-nowrap text-fs-6"
    >
      <NuxtLink
        v-if="hasNext"
        :to="nextPath"
        class="flex items-center gap-1 rounded-full border border-black px-4 py-2 text-content transition-all hover:-translate-x-1"
      >
        <img src="/icon/prev.webp" alt="箭頭 icon" />
        {{ hasNext ? "上一篇" : "下一篇" }}
      </NuxtLink>
      <p v-if="isFirst" class="text-fs-6 text-content">這是最新的文章</p>
      <p v-if="isLast" class="text-fs-6 text-content">這是最舊的文章</p>
      <NuxtLink
        v-if="hasPrev"
        :to="prevPath"
        class="flex items-center gap-1 rounded-full border border-black px-4 py-2 text-content transition-all hover:translate-x-1"
      >
        {{ hasPrev ? "下一篇" : "上一篇" }}
        <img src="/icon/next.webp" alt="箭頭 icon" />
      </NuxtLink>
    </nav>
  </section>

  <!-- loading / not found 處理 -->
  <p v-else class="py-10 text-center text-fs-2 text-content">
    文章載入中或不存在🥲
  </p>
  <CommonSocialLinks />
</template>
