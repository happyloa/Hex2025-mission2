<template>
  <header class="sticky top-0 z-50 mx-auto max-w-[1920px] bg-bgc py-6">
    <nav>
      <ul class="flex flex-wrap justify-center gap-x-10 gap-y-2 text-fs-3-bold">
        <li>
          <NuxtLink
            to="/"
            class="duration-300 hover:text-blue"
            :class="$route.path === '/' ? 'text-blue' : ''"
            >首頁</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/blog"
            class="duration-300 hover:text-blue"
            :class="$route.path.includes('blog') ? 'text-blue' : ''"
            >部落格</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
