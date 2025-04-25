<script setup>
const { data: posts } = await useAsyncData("blog-carousel", () =>
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
    .limit(6)
    .all(),
);

/* 2️⃣ 輪播狀態 ---------------------------------------------------------- */
const current = ref(0);
const total = computed(() => posts.value?.length ?? 0);

function prev() {
  current.value = (current.value - 1 + total.value) % total.value;
}
function next() {
  current.value = (current.value + 1) % total.value;
}

/* 3️⃣ 內聯 style：translateX ------------------------------------------------*/
const trackStyle = computed(() => ({
  transform: `translateX(-${current.value * 100}%)`,
  transition: "transform .3s ease",
}));

/* 4️⃣ ⌨️ 鍵盤左右鍵輔助 -------------------------------------------------- */
onMounted(() => {
  const handler = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };
  window.addEventListener("keydown", handler);
  onUnmounted(() => window.removeEventListener("keydown", handler));
});
</script>

<template>
  <div class="relative overflow-hidden">
    <button
      aria-label="上一張"
      @click="prev"
      class="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow hover:bg-white"
    >
      <img src="/icon/prev.webp" alt="上一張" />
    </button>

    <button
      aria-label="下一張"
      @click="next"
      class="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow hover:bg-white"
    >
      <img src="/icon/next.webp" alt="下一張" />
    </button>

    <!-- 輪播軌道 ---------------------------------------------------------->
    <ul class="flex w-full gap-6" :style="trackStyle">
      <li
        v-for="(post, idx) in posts"
        :key="post.slug"
        class="w-full shrink-0 md:w-1/2 lg:w-1/3"
      >
        <NuxtLink :to="post.slug">
          <article class="group relative">
            <!-- 封面 ------------------------------------------------------>
            <figure class="mb-4 overflow-hidden border border-bgc-dark">
              <picture>
                <source media="(max-width:1024px)" :srcset="post.mobileCover" />
                <img
                  :src="post.desktopCover"
                  :alt="post.title + ' 文章圖片'"
                  class="block w-full transition-transform duration-300 ease-in-out group-hover:rotate-2 group-hover:scale-110"
                />
              </picture>

              <!-- 最新文章標籤：只在 idx === 0 ------------------------------------------------>
              <span
                v-if="idx === 0"
                class="absolute left-3 top-3 rounded-full bg-blue px-3 py-1.5 text-fs-6-bold text-white"
              >
                最新文章
              </span>
            </figure>

            <!-- 內文資訊 --------------------------------------------------->
            <time class="mb-1 text-fs-6">{{
              new Date(post.date).toLocaleDateString()
            }}</time>

            <ul class="mb-1 flex flex-wrap gap-x-2 gap-y-1">
              <li
                v-for="(tag, tIdx) in post.tags"
                :key="tIdx"
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
  </div>
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
