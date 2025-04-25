<script setup lang="ts">
/**
 * Nuxt Content 傳進來的 props：
 * - src：Markdown 圖片路徑
 * - alt：替代文字
 */
const props = defineProps<{
  src: string;
  alt?: string;
}>();

const mobileSrc = computed(() => {
  return props.src.includes("/desktop/")
    ? props.src.replace("/desktop/", "/mobile/")
    : props.src;
});
</script>

<template>
  <figure class="mb-6">
    <picture>
      <source media="(max-width: 768px)" :srcset="mobileSrc" />
      <img class="block w-full" :src="props.src" :alt="props.alt || ''" />
    </picture>
  </figure>
</template>
