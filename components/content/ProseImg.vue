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
    <NuxtPicture
      class="block w-full"
      :img-src="props.src"
      :sources="[{ srcset: mobileSrc, media: '(max-width: 768px)' }]"
      :alt="props.alt || ''"
    />
  </figure>
</template>
