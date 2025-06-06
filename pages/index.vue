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
    class="relative mx-auto max-w-[1920px] border-b border-secondary bg-bgc px-3 pb-16 pt-[312px] md:pb-20 md:pt-[282px]"
  >
    <AtomIntro />
    <div class="mx-auto max-w-[1296px]">
      <h2 data-aos="fade-up" class="mb-8 text-head-2-sm md:text-head-2">
        專業服務與方案
      </h2>
      <main class="mb-8 flex flex-col gap-8 lg:gap-16 lg:px-[110px]">
        <CommonServiceCard
          data-aos="flip-right"
          image="service1"
          title="履歷健檢"
          description="履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。"
        />
        <CommonServiceCard
          data-aos="flip-left"
          reverse
          image="service2"
          title="線上諮詢"
          description="想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。"
        />
        <CommonServiceCard
          data-aos="flip-right"
          image="service3"
          title="網頁開發"
          description="想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。"
        />
        <CommonServiceCard
          data-aos="flip-left"
          reverse
          image="service4"
          title="企業內訓"
          description="想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。"
        />
      </main>
      <div
        data-aos="fade-right"
        class="flex flex-col items-end justify-end gap-2 lg:flex-row lg:items-center"
      >
        <p class="text-center text-fs-3-bold">聯繫我，取得更多資訊！</p>
        <a href="#" target="_blank" class="transition-all hover:translate-x-1"
          ><img src="/icon/contact-me.webp" alt="聯繫我"
        /></a>
      </div>
    </div>
  </section>
  <LayoutContainer>
    <h2 data-aos="fade-right" class="mb-6 text-head-2-sm md:text-head-2">
      部落格精選
    </h2>
    <CommonBlogCarousel data-aos="zoom-in-up" />
  </LayoutContainer>
  <LayoutContainer>
    <h2 data-aos="fade-right" class="mb-6 text-head-2-sm md:text-head-2">
      職涯諮詢<br class="lg:hidden" />成功案例
    </h2>
    <div class="relative mb-10">
      <div data-aos="fade-right" class="max-w-[745px] bg-[#EDEDED] p-6">
        <figure>
          <NuxtPicture
            class="w-full"
            img-src="/desktop/home/consultation.webp"
            :sources="[
              {
                srcset: '/mobile/home/consultation.webp',
                media: '(max-width: 768px)',
              },
            ]"
            alt="職涯諮詢成功案例圖片"
          />
        </figure>
      </div>
      <div
        class="right-0 top-1/2 -mt-40 flex max-w-[745px] flex-col gap-3 bg-bgc md:absolute md:mt-0 md:h-[568px] md:-translate-y-1/2"
      >
        <!-- 介紹卡片1 -->
        <article
          data-aos="flip-right"
          class="right-[219px] top-0 bg-white px-6 py-10 md:absolute md:w-[526px] md:px-10 md:py-20"
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
          data-aos="flip-right"
          data-aos-delay="100"
          class="bottom-0 right-0 bg-[#F5F5F5] px-6 py-10 md:absolute md:w-[526px] md:px-10 md:py-20"
        >
          <img src="/icon/dash.png" alt="裝飾線條" class="mb-6" />
          <p class="mb-6 text-fs-6-bold">
            期待在下一個新機會中，我能與你一起攜手邁向更高峰！
          </p>
          <button
            type="button"
            class="rounded-full border border-blue bg-white px-4 py-2 text-fs-6-bold text-blue transition-all hover:bg-blue hover:text-white"
          >
            立即預約諮詢
          </button>
        </article>
      </div>
    </div>
    <div class="grid gap-6 bg-[#F5F5F5] p-6 md:grid-cols-2 xl:grid-cols-4">
      <CommonCustomerCard
        data-aos="fade-up"
        image="avatar1"
        title="無經驗到前端工程師 Offer"
        :list="['打造前端專案與履歷亮點', '深度強化面試表現']"
      />
      <CommonCustomerCard
        data-aos="fade-up"
        data-aos-delay="100"
        image="avatar2"
        title="轉職迷茫到明確學習規劃"
        :list="['制訂階段性目標與時間安排', '鼓勵參與前端社群或活動']"
      />
      <CommonCustomerCard
        data-aos="fade-up"
        data-aos-delay="200"
        image="avatar3"
        title="面試緊張到從容應對"
        :list="[
          '透過面試模擬找出常犯的邏輯漏洞',
          '討論遇到不熟悉議題時的回應方式',
        ]"
      />
      <CommonCustomerCard
        data-aos="fade-up"
        data-aos-delay="300"
        image="avatar4"
        title="面試緊張到從容應對"
        :list="['擬定進階框架或技術研究目標', '培養跨團隊溝通與簡報能力']"
      />
    </div>
  </LayoutContainer>
  <section class="mx-auto flex max-w-[1920px] flex-col md:flex-row">
    <figure>
      <NuxtPicture
        class="size-full object-cover"
        img-src="/desktop/home/newsletter-image.webp"
        :sources="[
          {
            srcset: '/mobile/home/newsletter-image.webp',
            media: '(max-width: 768px)',
          },
        ]"
        alt="訂閱電子報人物形象照"
      />
    </figure>
    <div
      class="flex-1 content-center bg-[url('/desktop/home/newsletter-deco.webp')] bg-cover p-3 lg:p-20"
    >
      <div class="flex-1 bg-white px-6 py-10 lg:p-20">
        <h2
          data-aos="fade-up"
          class="mb-4 whitespace-nowrap text-head-2-sm xl:text-head-2"
        >
          訂閱電子報
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          class="mb-6 text-fs-5 md:whitespace-nowrap"
        >
          立即訂閱，搶先掌握<span class="text-blue">前端 x 職涯</span
          >的獨家資訊！
        </p>
        <form
          data-aos="fade-up"
          data-aos-delay="200"
          action="https://worksbyaaron.us7.list-manage.com/subscribe/post?u=5c2ba121d2df444aab43ffbf7&amp;id=a39e97dde9"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="flex flex-col items-start text-fs-5 text-content"
          target="_blank"
          novalidate
        >
          <input
            type="text"
            name="FNAME"
            placeholder="請輸入您的大名"
            class="mb-2 w-full bg-bgc-dark px-4 py-2 placeholder:text-content focus:outline-0"
          />
          <input
            type="email"
            name="EMAIL"
            placeholder="請輸入您的電子信箱"
            required
            class="mb-6 w-full bg-bgc-dark px-4 py-2 placeholder:text-content focus:outline-0"
          />
          <input type="hidden" name="tags" value="1178243,1178244" />
          <!-- Honeypot 隱藏欄位，防止機器人 -->
          <div aria-hidden="true" style="position: absolute; left: -5000px">
            <input
              type="text"
              name="b_5c2ba121d2df444aab43ffbf7_a39e97dde9"
              tabindex="-1"
              value=""
            />
          </div>
          <input
            type="submit"
            value="啟動訂閱"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="cursor-pointer rounded-full border border-blue bg-white px-4 py-2 text-fs-6-bold text-blue transition-all hover:bg-blue hover:text-white"
          />
        </form>
      </div>
    </div>
  </section>
  <LayoutContainer>
    <h2 data-aos="flip-up" class="mb-6 text-head-2-sm md:text-head-2">
      與我聯繫
    </h2>
    <ul class="text-fs-4">
      <li data-aos="fade-right">
        <a
          href="mailto:alysewang@hexschool.com"
          class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-black pb-4"
        >
          <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span class="break-all underline lg:text-fs-2"
              >alysewang@hexschool.com</span
            >
            <span class="lg:text-fs-3">合作洽談</span>
          </div>
          <img src="/icon/arrow-right.webp" alt="聯繫我" class="h-6 w-6" />
        </a>
      </li>
      <li data-aos="fade-right" data-aos-delay="100">
        <a
          href="#"
          target="_blank"
          class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-black py-4"
        >
          <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
            <img src="/icon/youtube.webp" alt="youtube icon" />
            <span class="lg:text-fs-3">Youtube 職涯諮詢室</span>
          </div>
          <img src="/icon/arrow-right.webp" alt="聯繫我" class="h-6 w-6" />
        </a>
      </li>
      <li data-aos="fade-right" data-aos-delay="200">
        <a
          href="#"
          target="_blank"
          class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-black py-4"
        >
          <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
            <img src="/icon/podcast.webp" alt="podcast icon" />
            <span class="lg:text-fs-3">podcast 職涯諮詢室</span>
          </div>
          <img src="/icon/arrow-right.webp" alt="聯繫我" class="h-6 w-6" />
        </a>
      </li>
      <li data-aos="fade-right" data-aos-delay="300">
        <a
          href="#"
          target="_blank"
          class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-black py-4"
        >
          <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
            <img src="/icon/facebook.webp" alt="facebook icon" />
            <span class="lg:text-fs-3">Facebook 前端社群</span>
          </div>
          <img src="/icon/arrow-right.webp" alt="聯繫我" class="h-6 w-6" />
        </a>
      </li>
      <li data-aos="fade-right" data-aos-delay="400">
        <a
          href="#"
          target="_blank"
          class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-black py-4"
        >
          <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
            <img src="/icon/linkedin.webp" alt="linkedin icon" />
            <span class="lg:text-fs-3">linkedin 職涯交流</span>
          </div>
          <img src="/icon/arrow-right.webp" alt="聯繫我" class="h-6 w-6" />
        </a>
      </li>
      <li data-aos="fade-right" data-aos-delay="500">
        <a
          href="#"
          target="_blank"
          class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-black py-4"
        >
          <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
            <img src="/icon/instagram.webp" alt="instagram icon" />
            <span class="lg:text-fs-3">Instagram 日常分享</span>
          </div>
          <img src="/icon/arrow-right.webp" alt="聯繫我" class="h-6 w-6" />
        </a>
      </li>
    </ul>
  </LayoutContainer>
</template>
