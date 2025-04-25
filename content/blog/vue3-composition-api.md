---
title: Vue 3 新手指南：快速掌握 Composition API 與關鍵特色
description: 許多前端開發者對 Vue 一直情有獨鍾，因為它易上手又靈活。隨著 Vue 3 上線，Composition API 的導入更是大幅提升可讀性與維護性。這篇文章將帶你快速瞭解 Vue 3 的獨特魅力，並透過簡單範例幫助你更順利地切換到新版本的思維模式。
date: 2024-06-29
desktopCover: /desktop/blog/vue3-composition-api.webp
mobileCover: /mobile/blog/vue3-composition-api.webp
slug: /blog/vue3-composition-api
tags:
  - Vue3
  - 框架學習
isPopular: false
---

::content-space

## 前言

Vue 3 的 Composition API 打破了傳統 Options API 的侷限，讓你能在 `setup()` 裡自由組合反應式邏輯與生命週期。對於剛從 Vue 2 或其他框架轉換的新手來說，可能一開始會被 `ref`、`reactive`、`watchEffect` 等概念搞得頭昏腦脹。本文將用「三大關鍵」示範，幫助你快速上手 Composition API，寫出更模組化、易維護的程式碼。

::

![前言圖片](/desktop/blog/vue3-composition-api.webp)

::content-space

## 三大關鍵快速掌握 Composition API

::content-block

### 關鍵一：理解 `setup()` 與反應式 API

**為何重要**  
`setup()` 是所有 Composition API 的起點，定義在此的 `ref`、`reactive`、`computed` 都能享受 Vue 的反應式追蹤。

**建議做法**

1. 在元件中使用 `ref` 管理單一原始值：

   ```ts
   import { ref } from "vue";

   export default {
     setup() {
       const count = ref(0);
       return { count };
     },
   };
   ```

2. 用 `reactive` 包成物件狀態：

```ts
const state = reactive({ items: [], loading: true });
```

3. 熟悉 `computed` 衍生狀態：

```ts
const double = computed(() => count.value * 2);
```

::

::content-block

### 關鍵二：打造可重用的 Composable

**為何重要**  
把重複邏輯封裝成 Composable（自訂 Hook），讓專案中不同元件能復用，程式碼更乾淨。

**建議做法**

1. 建立 `useFetch.ts`：

```ts
import { ref, onMounted } from "vue";

export function useFetch(url: string) {
  const data = ref(null);
  const loading = ref(true);
  onMounted(async () => {
    data.value = await fetch(url).then((r) => r.json());
    loading.value = false;
  });
  return { data, loading };
}
```

2. 在元件中直接呼叫：

```ts
setup() {
  const { data, loading } = useFetch('/api/posts')
  return { data, loading }
}

```

::

::content-block

### 關鍵三：善用 `watchEffect` 與 `watch`

**為何重要**  
監聽狀態改變、處理副作用時，watchEffect 讓你無須指定依賴，watch 可精確控制何時執行。

**建議做法**

- `watchEffect`：自動追蹤所有用到的 ref，適合簡單場景：

```ts
watchEffect(() => {
  console.log(state.items.length);
});
```

- `watch`：監聽特定來源，並處理新舊值：

```ts
watch(
  () => props.id,
  (newId, oldId) => {
    fetchItem(newId);
  },
);
```

::

::

::content-space

## 結語

掌握 `setup()` 中的反應式 API、打造通用 Composable，並善用 `watchEffect`／`watch`，你就能快速上手 Vue 3 Composition API，寫出更結構化、易維護的元件。立即在專案中實作這三大關鍵，享受 Composition API 帶來的開發魅力！

::
