<script setup lang="ts">
/* ---------- 1. 讀取文章 ---------- */
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
    .limit(10)
    .all(),
);

/* ---------- 2. DOM 參考 & 狀態 ---------- */
const container = ref<HTMLElement | null>(null);
const winW = ref(0);
const slideWidth = ref(0);

/* ---------- 3. 依斷點決定一次顯示張數 ---------- */
const perView = computed(() =>
  winW.value >= 1024 ? 3 : winW.value >= 640 ? 2 : 1,
);

/* ---------- 4. slides：去掉幽靈卡片 ─── 直接用文章陣列 ---------- */
const slides = computed(() => posts.value ?? []);

/* ---------- 5. 目前起始索引：從 0 開始 ---------- */
const current = ref(0);

/* ---------- 6. 監聽斷點切換：如果目前索引超出新尾端就回調 ---------- */
watch(perView, () => {
  nextTick(() => {
    updateDims();
    const lastStart = Math.max(0, slides.value.length - perView.value);
    if (current.value > lastStart) current.value = lastStart;
  });
});

/* ---------- 7. 計算尺寸 ---------- */
function updateDims() {
  winW.value = window.innerWidth;
  if (container.value) {
    slideWidth.value = container.value.clientWidth / perView.value;
  }
}

/* ---------- 8. Prev / Next（加入邊界判斷） ---------- */
function next() {
  if (!isLast.value) current.value++;
}
function prev() {
  if (!isFirst.value) current.value--;
}
function keyHandler(e: KeyboardEvent) {
  if (e.key === "ArrowLeft") prev();
  if (e.key === "ArrowRight") next();
}

/* ---------- 9. mounted / unmounted ---------- */
onMounted(() => {
  updateDims();
  window.addEventListener("resize", updateDims);
  window.addEventListener("keydown", keyHandler);
});
onUnmounted(() => {
  window.removeEventListener("resize", updateDims);
  window.removeEventListener("keydown", keyHandler);
});

/* ---------- 10. 計算軌道位移 ---------- */
const trackStyle = computed(() => ({
  width: `${slides.value.length * slideWidth.value}px`,
  transform: `translateX(-${current.value * slideWidth.value}px)`,
  transition: "transform .5s ease",
}));

/* ---------- 11. 是否在開頭 / 結尾 ── 給按鈕用 ---------- */
const isFirst = computed(() => current.value === 0);
const isLast = computed(
  () => current.value >= slides.value.length - perView.value,
);
</script>

<template>
  <div ref="container" class="relative -mx-3 pb-[76px] 2xl:pb-0">
    <button
      class="absolute bottom-0 right-20 z-10 h-[44px] w-[44px] rounded-full opacity-25 shadow transition-all hover:opacity-100 2xl:-left-12 2xl:top-1/2 2xl:-translate-y-1/2"
      :class="{
        'pointer-events-none opacity-25 hover:opacity-25': isFirst,
      }"
      @click="prev"
    >
      <img src="/icon/left-arrow.webp" alt="上一張" />
    </button>
    <button
      class="absolute bottom-0 right-3 z-10 h-[44px] w-[44px] rounded-full opacity-25 shadow transition-all hover:opacity-100 2xl:-right-12 2xl:top-1/2 2xl:-translate-y-1/2"
      :class="{
        'pointer-events-none opacity-25 hover:opacity-25': isLast,
      }"
      @click="next"
    >
      <img src="/icon/right-arrow.webp" alt="下一張" />
    </button>

    <div class="overflow-hidden">
      <!-- 輪播軌道 -->
      <ul class="flex" :style="trackStyle">
        <li
          v-for="(post, idx) in slides"
          :key="idx"
          class="shrink-0 px-3"
          :style="{ flex: '0 0 auto', width: slideWidth + 'px' }"
        >
          <NuxtLink :to="post.slug">
            <article class="group relative">
              <figure class="mb-4 overflow-hidden border border-bgc-dark">
                <picture>
                  <source
                    media="(max-width:1024px)"
                    :srcset="post.mobileCover"
                  />
                  <img
                    :src="post.desktopCover"
                    :alt="post.title + ' 文章圖片'"
                    class="block aspect-[3/2] w-full object-cover transition-transform duration-300 ease-in-out group-hover:rotate-2 group-hover:scale-110 lg:aspect-[16/9]"
                  />
                </picture>
              </figure>

              <time class="mb-1 text-fs-6">{{
                new Date(post.date).toLocaleDateString()
              }}</time>
              <ul class="mb-1 flex flex-wrap gap-x-2 gap-y-1">
                <li v-for="t in post.tags" :key="t" class="text-fs-4 text-blue">
                  #{{ t }}
                </li>
                <li
                  v-if="post.isPopular"
                  class="rounded-full bg-blue px-3 py-1.5 text-fs-6-bold text-white"
                >
                  人氣文章
                </li>
                <li
                  v-if="idx === perView"
                  class="rounded-full bg-blue px-3 py-1.5 text-fs-6-bold text-white"
                >
                  最新文章
                </li>
              </ul>
              <h3 class="mb-2 text-fs-3-bold">{{ post.title }}</h3>
              <p class="line-clamp mb-4 text-fs-6 text-content">
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
