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
const trackRef = ref<HTMLElement | null>(null);
const winW = ref(0);
const slideWidth = ref(0);

/* ---------- 3. 依斷點決定一次顯示張數 ---------- */
const perView = computed(() =>
  winW.value >= 1024 ? 3 : winW.value >= 640 ? 2 : 1,
);

/* ---------- 4. 直接使用文章陣列 ---------- */
const slides = computed(() => posts.value ?? []);

/* ---------- 5. 目前起始索引 ---------- */
const current = ref(0);

/* ---------- 6. 斷點切換時調整 ---------- */
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

/* ---------- 8. Prev / Next ---------- */
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

/* ---------- 9. 拖曳狀態 ---------- */
const isDragging = ref(false);
const startX = ref(0);
const dragDelta = ref(0);
const enableTran = ref(true);

const movedEnough = ref(false); // 達到拖曳門檻？
const suppressOneClick = ref(false); // 吞掉下一個 click（僅拖曳後）
let clickSuppressPx = 6;
const capturedId = ref<number | null>(null); // 目前是否有 capture

function onPointerDown(e: PointerEvent) {
  isDragging.value = true;
  startX.value = e.clientX;
  dragDelta.value = 0;
  movedEnough.value = false;
  enableTran.value = false;
  clickSuppressPx = e.pointerType === "mouse" ? 8 : 14;
  capturedId.value = null;
}

function onPointerMove(e: PointerEvent) {
  if (!isDragging.value) return;
  dragDelta.value = e.clientX - startX.value;

  // 一旦判定為拖曳，這時才開始 capture，確保之後 move/up 都穩定送到軌道
  if (!movedEnough.value && Math.abs(dragDelta.value) >= clickSuppressPx) {
    movedEnough.value = true;
    if (capturedId.value == null) {
      trackRef.value?.setPointerCapture(e.pointerId);
      capturedId.value = e.pointerId;
    }
  }
}

function onPointerUp(e: PointerEvent) {
  if (!isDragging.value) return;
  isDragging.value = false;
  enableTran.value = true;

  const threshold = slideWidth.value / 4;
  if (dragDelta.value > threshold && !isFirst.value) {
    prev();
  } else if (dragDelta.value < -threshold && !isLast.value) {
    next();
  }

  dragDelta.value = 0;

  // 只有在真的有 capture 時才釋放
  if (capturedId.value != null) {
    try {
      trackRef.value?.releasePointerCapture(capturedId.value);
    } catch {}
    capturedId.value = null;
  }

  // 有拖曳過 → 吞掉接下來的一次 click；沒拖曳 → 不動它，讓連結正常導頁
  if (movedEnough.value) suppressOneClick.value = true;
  movedEnough.value = false;
}

// 維持你目前的 onCardClick（掛在 NuxtLink 上）
function onCardClick(e: MouseEvent) {
  if (suppressOneClick.value) {
    e.preventDefault();
    e.stopPropagation();
    suppressOneClick.value = false;
  }
}

/* ---------- 10. mounted / unmounted ---------- */
onMounted(() => {
  updateDims();
  window.addEventListener("resize", updateDims);
  window.addEventListener("keydown", keyHandler);
});
onUnmounted(() => {
  window.removeEventListener("resize", updateDims);
  window.removeEventListener("keydown", keyHandler);
});

/* ---------- 11. 軌道樣式 ---------- */
const offsetX = computed(
  () => -current.value * slideWidth.value + dragDelta.value,
);
const trackStyle = computed(() => ({
  width: `${slides.value.length * slideWidth.value}px`,
  transform: `translateX(${offsetX.value}px)`,
  transition: enableTran.value ? "transform .5s ease" : "none",
}));

/* ---------- 12. 邊界判斷 ---------- */
const isFirst = computed(() => current.value === 0);
const isLast = computed(
  () => current.value >= slides.value.length - perView.value,
);
</script>

<template>
  <div ref="container" class="relative -mx-3 pb-[76px] 2xl:pb-0">
    <!-- 上一張按鈕 -->
    <button
      class="absolute bottom-0 right-20 z-10 h-[44px] w-[44px] rounded-full shadow transition-all 2xl:-left-12 2xl:top-1/2 2xl:-translate-y-1/2"
      :class="{
        'pointer-events-none opacity-25': isFirst,
        'opacity-100': !isFirst,
      }"
      @click="prev"
    >
      <img src="/icon/left-arrow.webp" alt="上一張" loading="lazy" />
    </button>
    <!-- 下一張按鈕 -->
    <button
      class="absolute bottom-0 right-3 z-10 h-[44px] w-[44px] rounded-full shadow transition-all 2xl:-right-12 2xl:top-1/2 2xl:-translate-y-1/2"
      :class="{
        'pointer-events-none opacity-25': isLast,
        'opacity-100': !isLast,
      }"
      @click="next"
    >
      <img src="/icon/right-arrow.webp" alt="下一張" loading="lazy" />
    </button>

    <div class="overflow-hidden">
      <!-- 輪播軌道 -->
      <ul
        ref="trackRef"
        class="flex cursor-grab select-none active:cursor-grabbing"
        :style="trackStyle"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
        @pointercancel="onPointerUp"
        @pointerleave="onPointerUp"
        style="touch-action: pan-y"
      >
        <li
          v-for="(post, idx) in slides"
          :key="idx"
          class="shrink-0 px-3"
          :style="{ flex: '0 0 auto', width: slideWidth + 'px' }"
        >
          <NuxtLink :to="post.slug" draggable="false" @click="onCardClick">
            <article class="group relative" draggable="false">
              <figure
                class="mb-4 overflow-hidden border border-bgc-dark"
                draggable="false"
              >
                <picture draggable="false">
                  <source
                    media="(max-width:1024px)"
                    :srcset="post.mobileCover"
                    draggable="false"
                  />
                  <img
                    :src="post.desktopCover"
                    :alt="post.title + ' 文章圖片'"
                    class="block aspect-[3/2] w-full object-cover transition-transform duration-300 ease-in-out group-hover:rotate-2 group-hover:scale-110 lg:aspect-[16/9]"
                    loading="lazy"
                    draggable="false"
                    @dragstart.prevent
                  />
                </picture>
              </figure>

              <time class="mb-1 text-fs-6">{{ useFormatDate(post.date) }}</time>
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
                draggable="false"
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
