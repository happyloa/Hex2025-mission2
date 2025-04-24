<script setup>
useSeoMeta({
  title: "首頁 | 體驗營最終任務 - 個人品牌網站",
  ogTitle: "首頁 | 體驗營最終任務 - 個人品牌網站",
  description:
    "Alyse Wang — 專精於 React 與 Vue 的前端工程師與技術顧問，提供履歷健檢、線上諮詢、實務開發與企業內訓等專業服務，幫助你提升技術力與職涯競爭力。",
  ogDescription:
    "Alyse Wang — 專精於 React 與 Vue 的前端工程師與技術顧問，提供履歷健檢、線上諮詢、實務開發與企業內訓等專業服務，幫助你提升技術力與職涯競爭力。",
  ogImage: "/ogImage.webp",
  twitterCard: "/ogImage.webp",
});
</script>

<template>
  <CommonHero title="Alyse Wang" subtitle="前端工程師 & 職涯諮詢師" />
  <section
    class="border-secondary relative border-b bg-bgc px-3 pb-16 pt-[356px] md:pb-20 md:pt-[282px]"
  >
    <AtomIntro />
    <div class="mx-auto max-w-[1296px]">
      <h2 class="text-head-2-sm md:text-head-2 mb-8">專業服務與方案</h2>
      <main class="flex flex-col gap-8 px-3 lg:gap-16 lg:px-[110px]">
        <CommonServiceCard
          image="service1"
          title="履歷健檢"
          description="履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。"
        />
        <CommonServiceCard
          reverse
          image="service2"
          title="線上諮詢"
          description="想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。"
        />
        <CommonServiceCard
          image="service3"
          title="網頁開發"
          description="想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。"
        />
        <CommonServiceCard
          reverse
          image="service4"
          title="企業內訓"
          description="想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。"
        />
      </main>
    </div>
  </section>
</template>
