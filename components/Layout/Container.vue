<template>
  <!-- 版面容器：限制內容寬度並套用共用背景樣式 -->
  <section
    class="mx-auto max-w-[1920px] border border-secondary bg-bgc px-3 py-16 md:py-20"
  >
    <div class="mx-auto max-w-[1296px]"><slot /></div>
  </section>
</template>
