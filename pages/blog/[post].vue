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
const hasPrev = computed(
  () => currentIndex.value >= 0 && currentIndex.value < paths.value.length - 1,
);
// 是否存在「下一篇」（較舊的文章）
const hasNext = computed(() => currentIndex.value > 0);

// 計算前後連結路徑
const prevPath = computed(() =>
  hasPrev.value ? paths.value[currentIndex.value + 1] : "",
);
const nextPath = computed(() =>
  hasNext.value ? paths.value[currentIndex.value - 1] : "",
);

// 依既有 hasPrev / hasNext 推導是否停用（＝顯示但不可點）
const prevDisabled = computed(() => !hasPrev.value); // 沒有「上一篇」=> 停用左邊按鈕
const nextDisabled = computed(() => !hasNext.value); // 沒有「下一篇」=> 停用右邊按鈕

// 停用時 fallback 到本頁，避免死連結
const prevTo = computed(() =>
  prevDisabled.value ? route.path : prevPath.value,
);
const nextTo = computed(() =>
  nextDisabled.value ? route.path : nextPath.value,
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
      class="mx-auto flex max-w-[636px] flex-wrap items-center justify-between gap-6 whitespace-nowrap text-fs-6 text-content"
    >
      <NuxtLink
        :to="prevTo"
        class="flex items-center gap-1 rounded-full border border-black px-4 py-2 transition-all hover:-translate-x-1"
        :class="prevDisabled ? 'pointer-events-none opacity-60' : ''"
      >
        <img src="/icon/prev.webp" alt="箭頭 icon" />
        上一篇
      </NuxtLink>
      <NuxtLink
        :to="nextTo"
        class="flex items-center gap-1 rounded-full border border-black px-4 py-2 transition-all hover:translate-x-1"
        :class="nextDisabled ? 'pointer-events-none opacity-60' : ''"
      >
        下一篇
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
