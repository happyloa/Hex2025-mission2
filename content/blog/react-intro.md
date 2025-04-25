---
title: React 入門不再迷惘：三步驟帶你上手核心概念
description: 你是否對 React 感到好奇，卻苦惱於該如何正式啟動學習之路？身為前端工程師兼職涯諮詢師，我常遇到同學問我：「React 到底該怎麼入門？」為了幫大家減少摸索的時間，我整理出三個循序漸進的關鍵步驟，帶你更輕鬆地掌握 React 核心概念，真正把理論應用在實際專案中。
date: 2024-10-11
desktopCover: /desktop/blog/react-intro.webp
mobileCover: /mobile/blog/react-intro.webp
slug: /blog/react-intro
tags:
  - React
  - 入門基礎
isPopular: false
---

::content-space

## 前言

React 是目前最熱門的前端函式庫之一，但新手常常因為 JSX、元件化思維與狀態管理而感到迷惘。本篇文章將用「三步驟」的方式，帶你從零開始，一步步掌握 React 的核心概念，快速上手並應用在真實專案中。

::

::prose-img{src="/desktop/blog/react-intro.webp" alt="前言圖片"}
::

## 三步驟掌握 React 核心概念

::content-block

### 步驟一：理解 JSX 與元件化思維

**為何重要**  
JSX 讓你在 JavaScript 中直接撰寫類似 HTML 的語法，搭配元件化思維，可以把 UI 拆成更小、更可重用的區塊，提升專案維護性。

**建議做法**

1. 練習建立簡單函式元件：
   ```jsx
   function Hello() {
     return <h1>Hello, React!</h1>;
   }
   ```
2. 嘗試把頁面拆分成父子元件，並用 props 傳遞資料。
3. 參考官方文件 [Quick Start](https://react.dev/learn){target="\_blank"}，深入理解其運作原理。

::

::content-block

### 步驟二：掌握 State 與 Props

**為何重要**
Props 是父元件向子元件傳遞資料的唯一路徑，State 則是元件自身可變的狀態，兩者共同構成 React 的單向資料流機制。

**建議做法**

1. 在函式元件中使用 useState 管理狀態
2. 配合事件處理函式，呼叫 `setCount` 更新 state，觀察畫面自動重新渲染效果。
3. 練習「狀態提升」（lifting state up），把多個元件共用的 state 抽離到共同父元件，實現「單一資料來源」。

::

::content-block

### 步驟三：深入理解 Hook 與副作用管理

**為何重要**
自 React 16.8 起，Hook 讓函式元件也能使用生命週期方法與副作用管理。useEffect 是最常用的 Hook，能在元件渲染後執行資料抓取、訂閱、或清除操作。

**建議做法**

1. 用 useEffect 執行 API 請求：
   ```jsx
   useEffect(() => {
     fetch("/api/posts")
       .then((res) => res.json())
       .then((data) => setPosts(data));
   }, []);
   ```
2. 理解依賴陣列（dependency array）的意義，決定副作用執行時機。
3. 嘗試其他 Hook：`useContext` 管理全域狀態、`useReducer` 處理複雜邏輯、`useMemo`／`useCallback` 優化效能。

::

> 小結：先掌握 JSX 與元件拆分，再理解 State 與 Props，最後活用 Hook 管理副作用，你就能打下穩固的 React 基礎，在專案中自由組合元件，應對各種互動需求。
