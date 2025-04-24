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
</script>

<template>
  <CommonHero noIntro title="BLOG" subtitle="前端工程師 & 職涯諮詢師" />
  <LayoutContainer>
    <main class="mb-10">
      <ul
        class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20"
      >
        <li v-for="post in posts" :key="post.slug">
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
              <time
                class="mb-1 text-fs-6"
                :datetime="new Date(post.date).toISOString()"
              >
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
                class="rounded-full border border-black px-4 py-2 text-fs-6 text-content transition hover:bg-content hover:text-white"
              >
                閱讀內文
              </button>
            </article>
          </NuxtLink>
        </li>
      </ul>
    </main>
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
