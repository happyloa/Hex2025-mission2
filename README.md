![](https://i.imgur.com/spGbSYn.png)

# 六角學院 2025 體驗營最終任務 - 個人品牌網站

此專案為六角學院 2025 軟體工程師體驗營的最終任務之成品

- [線上部署連結](https://hex2025.worksbyaaron.com/)
- [設計稿](https://www.figma.com/design/bBHUp0TeM0yjAlkjtyxQJI/2025ver.-%E9%AB%94%E9%A9%97%E7%87%9F%E5%AD%B8%E7%94%9F%E8%A8%AD%E8%A8%88%E7%A8%BF?node-id=236-1107&p=f&t=Q7X8IgCc48uQGNU9-0)

## 使用技術

- [Nuxt3](https://nuxt.com/)（Vue 加強版）
- [Tailwind CSS](https://tailwindcss.com/)

## 開發環境設置

建議使用 [VSCode](https://code.visualstudio.com/) 搭配

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Nuxtr](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## 快速開始

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

**執行專案（Start the server）**

```sh
$ npm run dev
```

在瀏覽器上輸入

```
http://localhost:3000/
```

即可在本地端預覽專案

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

- [Nuxt Content](https://content.nuxt.com/)
- [Nuxt Google Fonts](https://google-fonts.nuxtjs.org/)
- [Nuxt Tailwind](https://tailwindcss.nuxtjs.org/)
- [Nuxt Google Tag](https://nuxt.com/modules/gtag/)
- [Nuxt AOS](https://nuxt.com/modules/aos)
- [Nuxt Image](https://image.nuxtjs.org/)
- 使用 @nuxt/image-edge 模組最佳化並自動產生不同尺寸的圖片（`ipx` provider 處理本地圖片）
- [Vue Router](https://router.vuejs.org/)
- [TinyPNG](https://tinypng.com/)
- [ChatGPT o4-mini-high](https://openai.com/)

## 2025/05/23 助教修改建議

![](https://raw.githubusercontent.com/happyloa/Hex2025-mission2/refs/heads/main/public/ta-advise.webp)
