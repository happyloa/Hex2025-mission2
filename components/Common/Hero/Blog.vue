<script setup>
/**
 * @typedef {Object} Props
 * @property {Boolean} hidePreview - 隱藏摘要跟閱讀內文按鈕
 */
defineProps({
  hidePreview: {
    type: Boolean,
    default: false,
  },
});

// 只拿最新一篇（date DESC），回傳 array，裡面只有一筆
const { data: latestArray } = await useAsyncData("latestPost", () =>
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
    .limit(1)
    .all(),
);

// computed 拆出陣列第一筆，沒有就回 null
const latestPost = computed(() => latestArray.value?.[0] ?? null);
</script>

<template>
  <section
    class="mx-auto flex max-w-[1920px] flex-col border border-secondary lg:flex-row"
  >
    <figure class="overflow-hidden">
      <picture>
        <source media="(max-width: 768px)" :srcset="latestPost.mobileCover" />
        <img
          :src="latestPost.desktopCover"
          :alt="latestPost.title + '文章圖片'"
          class="block w-full transform transition-transform duration-300 ease-in-out hover:rotate-2 hover:scale-110"
        />
      </picture>
    </figure>
    <div class="flex-1 content-center px-3 py-12 lg:px-6 lg:py-0">
      <time data-aos="fade-up" class="mb-1 block text-fs-6">
        {{ useFormatDate(latestPost.date) }}
      </time>
      <ul
        data-aos="fade-up"
        data-aos-delay="100"
        class="mb-2 flex flex-wrap items-center gap-y-1"
      >
        <li
          v-for="(tag, idx) in latestPost.tags"
          :key="idx"
          class="text-fs-4 text-blue"
        >
          <span>{{ tag }}</span>
          <span v-if="idx < latestPost.tags.length - 1" class="mx-1">x</span>
        </li>
        <li
          class="ml-2 rounded-full bg-blue px-3 py-1.5 text-fs-6-bold text-white"
        >
          最新文章
        </li>
      </ul>
      <NuxtLink :to="latestPost.slug" class="group block">
        <h2
          data-aos="fade-up"
          data-aos-delay="150"
          class="mb-2 text-fs-3-bold lg:whitespace-nowrap"
        >
          {{ latestPost.title }}
        </h2>
        <p
          v-if="!hidePreview"
          data-aos="fade-up"
          data-aos-delay="200"
          class="line-clamp | mb-4 text-fs-6 lg:max-w-[636px]"
        >
          {{ latestPost.description }}
        </p>
        <button
          data-aos="fade-up"
          data-aos-delay="250"
          v-if="!hidePreview"
          type="button"
          class="rounded-full border border-black px-4 py-2 text-fs-6 text-content transition group-hover:bg-content group-hover:text-white"
        >
          閱讀內文
        </button>
      </NuxtLink>
    </div>
  </section>
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
