<script setup lang="ts">
// 定義 ProseA 會收到的 props，對應 Markdown 語法裡的 [text](href){target=_blank} 等
const props = defineProps<{
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}>();
</script>

<template>
  <!-- 如果 href 是以 "/" 開頭，就當成內部路由，使用 NuxtLink -->
  <NuxtLink
    v-if="props.href.startsWith('/')"
    :to="props.href"
    class="text-fs-6 text-blue hover:underline"
  >
    <slot />
  </NuxtLink>

  <!-- 否則當成外部連結，用 <a> 並支援 target -->
  <a
    v-else
    :href="props.href"
    :target="props.target || '_blank'"
    rel="noopener noreferrer"
    class="text-fs-6 text-blue hover:underline"
  >
    <slot />
  </a>
</template>
