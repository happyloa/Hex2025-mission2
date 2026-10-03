![](https://i.imgur.com/spGbSYn.png)

# 六角學院 2025 體驗營最終任務 - 個人品牌網站

此專案為六角學院 2025 軟體工程師體驗營的最終任務之成品

- [線上部署連結](https://hex2025.worksbyaaron.com/)
- [設計稿](https://www.figma.com/design/bBHUp0TeM0yjAlkjtyxQJI/2025ver.-%E9%AB%94%E9%A9%97%E7%87%9F%E5%AD%B8%E7%94%9F%E8%A8%AD%E8%A8%88%E7%A8%BF?node-id=236-1107&p=f&t=Q7X8IgCc48uQGNU9-0)

## 使用技術

- [Nuxt 4.5.2](https://nuxt.com/)（Vue 加強版，對應 Vue 3.5.43）
- [Tailwind CSS 4.3.3](https://tailwindcss.com/)，透過官方 Vite 插件整合

## 開發環境設置

建議使用 [VSCode](https://code.visualstudio.com/) 搭配

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Nuxtr](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## 快速開始

請使用 Node.js 22.19.0 以上的 22.x、24.11.0 以上的 24.x，或 26.x 以上版本；npm 至少需要 11.21.0。建議使用 npm 12.2.0，搭配 Node.js 22.22.2 以上、24.15.0 以上或 26.x 以上版本。

**專案設置（Project setup）**

將專案複製到本地端

```sh
$ git clone https://github.com/happyloa/Hex2025-mission2.git
```

套件安裝

```sh
$ cd Hex2025-mission2
$ npm install
```

> 如果公司防火牆阻擋 Google Fonts 下載，可改用 `NUXT_GOOGLE_FONTS_DOWNLOAD=false npm install` 與同樣的環境變數執行建置。此設定會改由瀏覽器載入 Google Fonts；瀏覽器也無法連線時，會使用系統備援字型。

**執行專案（Start the server）**

```sh
$ npm run dev
```

在瀏覽器上輸入

```
http://localhost:3000/
```

即可在本地端預覽專案

驗證更新時，依序執行：

```sh
npm ci
npm run check:format
npm run typecheck
npm run build
npm outdated
npm audit
```

npm 11.21.0 以上支援 `package.json` 的 `allowScripts`，目前只允許已檢查的 esbuild 版本執行安裝腳本。better-sqlite3 13 已包含預編譯檔，清單明確拒絕其安裝腳本，避免 npm 11 推導出不必要的 `node-gyp rebuild`。升級後可執行 `npm install-scripts ls` 檢查新出現的腳本，再逐項核准；請保留 better-sqlite3 的拒絕設定。

型別檢查使用 Microsoft 官方 `@typescript/typescript6` 相容套件，透過 npm alias 提供 `typescript`。vue-tsc 目前仍需 TypeScript 6 的 JavaScript 編譯器介面。

截至 2026/10/03，npm audit 仍會列出 12 項高風險相依項目，根源是尚無修補版的 [braces 深層巢狀 pattern 漏洞](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) 與 [node-forge RSA 簽章驗證漏洞](https://github.com/advisories/GHSA-86w9-cpqp-85rv)。Nuxt、Nuxt Content 和 Nitro 仍依賴這些套件。`npm audit fix --force` 建議降級到舊版 Nuxt 與 Content，無法作為本次升級的修復方式；待上游發布修補版本後需再次更新與驗證。

Windows 正式建置仍有 Rolldown 插件耗時、Nitro 模組解析與 Node DEP0155 棄用警告。本次乾淨安裝沒有 npm WARN，型別檢查、正式建置與桌機／手機頁面驗證皆已通過。

## 頁面路徑（Router Link）

位於 `pages`

結構說明

```
pages
└── blog
    ├── index                  部落格頁面（/blog）
    └── [post]                 單篇文章動態頁面（/blog/post）
└── index                      首頁（/）
```

## 元件檔案（Components）

位於 `components`

結構說明

```
components
├── Atom                       頁面上的小型元件
├── Common                     通用元件，例如卡片、Hero 區塊等
├── content                    客製化由 Nuxt Content 產生的文章內容所需的 Prose 元件
├── Layout                     導覽選單、頁尾與通用的頁面區塊 container
├── ContentSpace               文章內用來取出大間隔的元件
└── ContentBlock               文章內用來取出小間隔的元件
```

## 靜態檔案

位於 `public` 及 `content`

結構說明

```
public
├── avatar                     客戶頭像
├── desktop                    電腦版圖片
├── icon                       在網站上使用的各式 icon
├── mobile                     行動版圖片
├── favicon.ico                網站的 favicon
└── ogImage.webp               將網站連結貼到社群媒體時出現的預覽圖片
```

```
content
└── blog                       所有文章資料
```

## 使用的套件 & 工具

- [Nuxt Content 3.16.1](https://content.nuxt.com/)
- [Nuxt Fonts 0.14.0](https://fonts.nuxt.com/)
- [Tailwind CSS 4.3.3](https://tailwindcss.com/)
- [Nuxt Google Tag 5.0.0](https://nuxt.com/modules/gtag/)
- [Nuxt Clarity Analytics](https://npm.im/nuxt-clarity-analytics)
- [Nuxt AOS 1.2.6](https://nuxt.com/modules/aos)
- [Vue Router 5.3.1](https://router.vuejs.org/)
- [better-sqlite3 13.0.3](https://github.com/WiseLibs/better-sqlite3)
- [TinyPNG](https://tinypng.com/)
- [ChatGPT o4-mini-high](https://openai.com/)

## 2025/05/23 助教修改建議

![](https://raw.githubusercontent.com/happyloa/Hex2025-mission2/refs/heads/main/public/ta-advise.webp)
