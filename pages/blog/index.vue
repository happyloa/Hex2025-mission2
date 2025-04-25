<script setup>
useSeoMeta({
  title: "部落格 | 體驗營最終任務 - 個人品牌網站",
  ogTitle: "部落格 | 體驗營最終任務 - 個人品牌網站",
  description:
    "Alyse Wang — 專精於 React 與 Vue 的前端工程師與技術顧問，提供履歷健檢、線上諮詢、實務開發與企業內訓等專業服務，幫助你提升技術力與職涯競爭力。",
  ogDescription:
    "Alyse Wang — 專精於 React 與 Vue 的前端工程師與技術顧問，提供履歷健檢、線上諮詢、實務開發與企業內訓等專業服務，幫助你提升技術力與職涯競爭力。",
  ogImage: "/ogImage.webp",
  twitterCard: "/ogImage.webp",
});

// 從 Content API 讀出的所有文章
const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("blog")
    .select(
      "title",
      "description",
      "date",
      "desktopCover",
      "mobileCover",
      "slug",
      "tags",
      "isPopular",
    )
    .order("date", "DESC")
    .all(),
);

// 搜尋關鍵字
const searchTerm = ref("");

// 計算篩選後的文章清單（大小寫不分）
const filteredPosts = computed(() => {
  // 1. 排除最新一筆
  const list = (posts.value ?? []).slice(1);
  // 2. 如果沒有關鍵字，直接回傳剔除後列表
  const key = searchTerm.value.trim().toLowerCase();
  if (!key) return list;
  // 3. 有關鍵字時，再從這個 list 中過濾
  return list.filter((post) => post.title.toLowerCase().includes(key));
});

const displayPosts = filteredPosts;
</script>

<template>
  <CommonHero noIntro title="BLOG" subtitle="前端工程師 & 職涯諮詢師" />
  <CommonHeroBlog />
  <LayoutContainer>
    <div class="relative mb-10">
      <img
        src="/icon/search.webp"
        alt="搜尋"
        class="absolute left-4 top-1/2 -translate-y-1/2"
      />
      <input
        v-model="searchTerm"
        type="text"
        name="search"
        id="search"
        placeholder="搜尋你感興趣的文章"
        class="rounded-full border border-content py-4 pl-[50px] pr-12 text-fs-6 text-content placeholder:text-content"
      />
    </div>
    <main class="mb-10">
      <ul
        v-if="displayPosts.length > 0"
        class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20"
      >
        <li v-for="post in displayPosts" :key="post.slug">
          <NuxtLink :to="post.slug">
            <article class="group">
              <figure class="mb-4 overflow-hidden border border-bgc-dark">
                <picture>
                  <source
                    media="(max-width: 1024px)"
                    :srcset="post.mobileCover"
                  />
                  <img
                    :src="post.desktopCover"
                    :alt="post.title + '文章圖片'"
                    class="block w-full transform transition-transform duration-300 ease-in-out group-hover:rotate-2 group-hover:scale-110"
                  />
                </picture>
              </figure>
              <time class="mb-1 text-fs-6">
                {{ new Date(post.date).toLocaleDateString() }}
              </time>
              <ul class="flex flex-wrap gap-x-2 gap-y-1">
                <li
                  v-for="(tag, idx) in post.tags"
                  :key="idx"
                  class="text-fs-4 text-blue"
                >
                  {{ "#" + tag }}
                </li>
                <li
                  v-if="post.isPopular"
                  class="rounded-full bg-blue px-3 py-1.5 text-fs-6-bold text-white"
                >
                  人氣文章
                </li>
              </ul>
              <h3 class="mb-2 text-fs-3-bold">{{ post.title }}</h3>
              <p class="line-clamp | mb-4 text-fs-6 text-content">
                {{ post.description }}
              </p>
              <button
                type="button"
                class="rounded-full border border-black px-4 py-2 text-fs-6 text-content transition group-hover:bg-content group-hover:text-white"
              >
                閱讀內文
              </button>
            </article>
          </NuxtLink>
        </li>
      </ul>
      <p v-else class="py-10 text-center text-fs-2 text-content">
        沒有找到符合「{{ searchTerm }}」的文章，請試試其他關鍵字。
      </p>
    </main>
    <nav class="mx-auto max-w-[328px] rounded-full bg-white px-5 py-4">
      <ul class="flex justify-between text-center text-fs-6 text-content">
        <li>
          <img src="/icon/prev.webp" alt="上一頁" class="cursor-pointer" />
        </li>
        <li class="w-10 cursor-pointer">1</li>
        <li class="w-10 cursor-pointer">2</li>
        <li class="w-10 cursor-pointer">3</li>
        <li class="w-10 cursor-pointer">4</li>
        <li class="w-10 cursor-pointer">5</li>
        <li class="w-10 cursor-pointer">...</li>
        <li>
          <img src="/icon/next.webp" alt="下一頁" class="cursor-pointer" />
        </li>
      </ul>
    </nav>
  </LayoutContainer>
  <CommonSocialLinks />
</template>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
}
</style>
