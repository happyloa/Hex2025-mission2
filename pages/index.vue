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
      <main class="mb-8 flex flex-col gap-8 lg:gap-16 lg:px-[110px]">
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
      <div
        class="flex flex-col items-end justify-end gap-2 lg:flex-row lg:items-center"
      >
        <p class="text-fs-3-bold text-center">聯繫我，取得更多資訊！</p>
        <a href="#" target="_blank" class="transition-all hover:translate-x-1"
          ><img src="/icon/contact-me.webp" alt="聯繫我"
        /></a>
      </div>
    </div>
  </section>
  <section class="border-secondary border bg-bgc px-3 py-16 md:py-20">
    <div class="mx-auto max-w-[1296px]">
      <h2 class="text-head-2-sm md:text-head-2 mb-6">部落格精選</h2>
    </div>
  </section>
  <section class="border-secondary border bg-bgc px-3 py-16 md:py-20">
    <div class="mx-auto max-w-[1296px]">
      <h2 class="text-head-2-sm md:text-head-2 mb-6">
        職涯諮詢<br class="lg:hidden" />成功案例
      </h2>
      <div class="relative mb-10">
        <div class="max-w-[745px] bg-[#EDEDED] p-6">
          <figure>
            <picture>
              <source
                media="(max-width: 1024px)"
                srcset="/mobile/home/consultation.webp"
              />
              <img
                src="/desktop/home/consultation.webp"
                alt="職涯諮詢成功案例圖片"
                class="w-full"
              />
            </picture>
          </figure>
        </div>
        <div
          class="right-0 top-1/2 flex max-w-[745px] flex-col gap-3 bg-bgc lg:absolute lg:h-[568px] lg:-translate-y-1/2"
        >
          <!-- 介紹卡片1 -->
          <article
            class="right-[219px] top-0 bg-white px-6 py-10 lg:absolute lg:w-[526px] lg:px-10 lg:py-20"
          >
            <img src="/icon/dash.png" alt="裝飾線條" class="mb-6" />
            <p class="text-fs-6-bold">
              在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效<span
                class="text-blue"
                >突破原有的舒適圈</span
              >。
            </p>
          </article>
          <!-- 介紹卡片2 -->
          <article
            class="bottom-0 right-0 bg-[#F5F5F5] px-6 py-10 lg:absolute lg:w-[526px] lg:px-10 lg:py-20"
          >
            <img src="/icon/dash.png" alt="裝飾線條" class="mb-6" />
            <p class="text-fs-6-bold mb-6">
              期待在下一個新機會中，我能與你一起攜手邁向更高峰！
            </p>
            <button
              type="button"
              class="text-fs-6-bold rounded-full border border-blue bg-white px-4 py-2 text-blue transition-all hover:bg-blue hover:text-white"
            >
              立即預約諮詢
            </button>
          </article>
        </div>
      </div>
      <div class="grid gap-6 bg-[#F5F5F5] p-6 md:grid-cols-2 xl:grid-cols-4">
        <CommonCustomerCard
          image="avatar1"
          title="無經驗到前端工程師 Offer"
          :list="['打造前端專案與履歷亮點', '深度強化面試表現']"
        />
        <CommonCustomerCard
          image="avatar2"
          title="轉職迷茫到明確學習規劃"
          :list="['制訂階段性目標與時間安排', '鼓勵參與前端社群或活動']"
        />
        <CommonCustomerCard
          image="avatar3"
          title="面試緊張到從容應對"
          :list="[
            '透過面試模擬找出常犯的邏輯漏洞',
            '討論遇到不熟悉議題時的回應方式',
          ]"
        />
        <CommonCustomerCard
          image="avatar4"
          title="面試緊張到從容應對"
          :list="['擬定進階框架或技術研究目標', '培養跨團隊溝通與簡報能力']"
        />
      </div>
    </div>
  </section>
  <section class="flex flex-col xl:flex-row">
    <figure>
      <picture>
        <source
          media="(max-width: 768px)"
          srcset="/mobile/home/newsletter-image.webp"
        />
        <img
          src="/desktop/home/newsletter-image.webp"
          alt="訂閱電子報人物形象照"
          class="w-full"
        />
      </picture>
    </figure>
    <div
      class="flex flex-1 items-center justify-center bg-[url('/mobile/home/newsletter-deco.webp')] bg-cover p-3 md:bg-[url('/desktop/home/newsletter-deco.webp')] lg:p-20"
    >
      <div class="flex-1 bg-white px-6 py-10 lg:p-20">
        <h2 class="text-head-2-sm xl:text-head-2 mb-4">訂閱電子報</h2>
        <p class="text-fs-5 mb-6">
          立即訂閱，搶先掌握<span class="text-blue">前端 x 職涯</span
          >的獨家資訊！
        </p>
        <form class="text-fs-5 flex flex-col items-start text-content">
          <input
            type="text"
            placeholder="請輸入您的大名"
            class="mb-2 w-full bg-bgc-dark px-4 py-2 placeholder:text-content focus:outline-0"
          />
          <input
            type="email"
            placeholder="請輸入您的電子信箱"
            class="mb-6 w-full bg-bgc-dark px-4 py-2 placeholder:text-content focus:outline-0"
          />
          <button
            type="submit"
            class="text-fs-6-bold rounded-full border border-blue bg-white px-4 py-2 text-blue transition-all hover:bg-blue hover:text-white"
          >
            啟動訂閱
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
