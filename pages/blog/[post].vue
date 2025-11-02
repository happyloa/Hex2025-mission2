<script setup>
const route = useRoute();

definePageMeta({
  key: (currentRoute) => currentRoute.path,
});

// 用 useAsyncData + queryCollection 拿單篇文章
//   - .path() 直接過濾 collection 裡 path 等於 route.path 的文件
//   - .first() 把結果回傳成一個物件而不是陣列
const { data: post } = await useAsyncData(
  `post-${route.path}`,
  () => queryCollection("blog").path(route.path).first(),
  {
    watch: [() => route.path],
  },
);

useSeoMeta({
  title: `${post.value.title} | 體驗營最終任務 - 個人品牌網站`,
  ogTitle: post.value.title,
  description: post.value.description,
  ogDescription: post.value.description,
  ogImage: "/ogImage.webp",
  twitterCard: "/ogImage.webp",
});

// 抓取所有文章列表，依日期由新到舊排序，用於計算上一篇 / 下一篇
const { data: postList } = await useAsyncData(
  "post-surroundings",
  () =>
    queryCollection("blog")
      .select("slug", "path", "date")
      .order("date", "DESC")
      .all(),
  {
    default: () => [],
  },
);

const currentIndex = computed(() =>
  (postList.value ?? []).findIndex(
    (item) => item.slug === route.path || item.path === route.path,
  ),
);

const prevItem = computed(() => {
  const index = currentIndex.value;
  if (index === -1) return null;
  return postList.value?.[index + 1] ?? null;
});

const nextItem = computed(() => {
  const index = currentIndex.value;
  if (index <= 0) return null;
  return postList.value?.[index - 1] ?? null;
});

// 依既有 hasPrev / hasNext 推導是否停用（＝顯示但不可點）
const prevDisabled = computed(() => !prevItem.value);
const nextDisabled = computed(() => !nextItem.value);

// 停用時 fallback 到本頁，避免死連結
const prevTo = computed(() =>
  prevItem.value?.slug ?? prevItem.value?.path ?? route.path,
);
const nextTo = computed(() =>
  nextItem.value?.slug ?? nextItem.value?.path ?? route.path,
);
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
      data-aos="fade-up"
      class="mx-auto flex max-w-[636px] flex-wrap items-center justify-between gap-6 whitespace-nowrap text-fs-6 text-content"
    >
      <NuxtLink
        :to="prevTo"
        prefetch
        class="flex items-center gap-1 rounded-full border border-black px-4 py-2 transition-all hover:-translate-x-1"
        :class="prevDisabled ? 'pointer-events-none opacity-25' : ''"
      >
        <img src="/icon/prev.webp" alt="箭頭 icon" loading="lazy" />
        上一篇
      </NuxtLink>
      <NuxtLink
        :to="nextTo"
        prefetch
        class="flex items-center gap-1 rounded-full border border-black px-4 py-2 transition-all hover:translate-x-1"
        :class="nextDisabled ? 'pointer-events-none opacity-25' : ''"
      >
        下一篇
        <img src="/icon/next.webp" alt="箭頭 icon" loading="lazy" />
      </NuxtLink>
    </nav>
  </section>

  <!-- loading / not found 處理 -->
  <p v-else class="py-10 text-center text-fs-2 text-content">
    文章載入中或不存在🥲
  </p>
  <CommonSocialLinks />
</template>
