<script setup lang="ts">
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

/* ---------- 2. DOM 參考 & 狀態 ---------- */
// 外層容器，用來量測寬度
const container = ref<HTMLElement | null>(null);
// 視窗寬度
const winW = ref(0);
// 每張卡片的寬度 (px)
const slideWidth = ref(0);

/* ---------- 3. 計算每個斷點要顯示幾張 ---------- */
const perView = computed(() =>
  winW.value >= 1024 ? 3 : winW.value >= 640 ? 2 : 1,
);

/* ---------- 4. 增加幽靈 slides 以做無縫循環 ---------- */
const slides = computed(() => {
  const arr = posts.value ?? [];
  const p = perView.value;
  return arr.length ? [...arr.slice(-p), ...arr, ...arr.slice(0, p)] : [];
});

/* ---------- 5. 目前顯示的索引 ---------- */
const current = ref(perView.value);

/* ---------- 6. 監聽斷點變更，重置索引並重新量測 ---------- */
watch(perView, () => {
  current.value = perView.value;
  // 斷點切換後要等 DOM 更新再量測
  nextTick(updateDims);
});

/* ---------- 7. 計算容器尺寸 & 卡片寬度 ---------- */
function updateDims() {
  winW.value = window.innerWidth;
  if (container.value) {
    // container.clientWidth 取得外層真實寬度
    slideWidth.value = container.value.clientWidth / perView.value;
  }
}

/* ---------- 8. Prev / Next 按鈕 & 鍵盤 ---------- */
function next() {
  current.value++;
}
function prev() {
  current.value--;
}
function keyHandler(e: KeyboardEvent) {
  if (e.key === "ArrowLeft") prev();
  if (e.key === "ArrowRight") next();
}

/* ---------- 9. onMounted / onUnmounted ---------- */
onMounted(() => {
  // 第一次量測
  updateDims();
  // 視窗大小改變時重算
  window.addEventListener("resize", updateDims);
  // 鍵盤左右鍵切換
  window.addEventListener("keydown", keyHandler);
});
onUnmounted(() => {
  window.removeEventListener("resize", updateDims);
  window.removeEventListener("keydown", keyHandler);
});

/* ---------- 10. 計算輪播軌道樣式 ---------- */
const trackStyle = computed(() => ({
  // 總寬 = slides.length * 單張卡寬 (px)
  width: `${slides.value.length * slideWidth.value}px`,
  // 平移距離 = current * 單張卡寬 (px)
  transform: `translateX(-${current.value * slideWidth.value}px)`,
  transition: "transform .5s ease",
}));

/* ---------- 11. 無縫轉場處理 ---------- */
function onTransitionEnd() {
  const p = perView.value;
  const real = (posts.value ?? []).length;
  if (current.value < p) current.value = real + p - 1;
  if (current.value >= real + p) current.value = p;
}
</script>

<template>
  <div ref="container" class="relative -mx-3 mb-8 overflow-hidden xl:mb-0">
    <button
      class="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow hover:bg-white"
      @click="prev"
    >
      <img src="/icon/prev.webp" alt="上一張" />
    </button>
    <button
      class="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow hover:bg-white"
      @click="next"
    >
      <img src="/icon/next.webp" alt="下一張" />
    </button>

    <!-- 輪播軌道 -->
    <ul class="flex" :style="trackStyle" @transitionend="onTransitionEnd">
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
                <source media="(max-width:1024px)" :srcset="post.mobileCover" />
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
