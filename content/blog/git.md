---
title: Git 與版本控制：前端協作的必修課
description: 當你從一人開發晉升到多人合作，版本控制的好壞往往決定了專案的順暢度。Git 不僅能記錄程式碼變動，更能確保每位成員都在正確的分支上完成任務。透過這篇文章，你將了解常見的 Git 流程，並學會在前端專案中輕鬆管理與協作。
date: 2024-05-04
desktopCover: /desktop/blog/git.webp
mobileCover: /mobile/blog/git.webp
slug: /blog/git
tags:
  - Git
  - 協作流程
isPopular: false
---

::content-space

## 前言

在多人團隊中，Git 就像專案的「大腦」，掌握好它能讓你和隊友同心協力、避免互相覆蓋彼此的程式碼。今天我整理三大核心概念，帶你快速上手 Git 流程，從最基礎的 commit 到分支管理與協作，再到解決衝突，讓你的專案開發更加順暢。

::

::content-space

::prose-img{src="/desktop/blog/git.webp" alt="前言圖片"}
::

## 三大關鍵：打造穩定的 Git 協作流程

::content-block

### 一、初始化與基本操作

**為何重要**  
所有操作都從 `git init` 或 clone 開始，理解 commit、add、push 的順序，才能確保歷史紀錄乾淨且易於追溯。

**建議做法**

1. 新專案先執行 `git init`，並加入 `.gitignore` 忽略 node_modules、build 資料夾。
2. 逐步 add & commit：每完成一項小功能，就用簡潔訊息（如 `feat: 新增登入表單`）做一次 commit。
3. push 到遠端：`git push origin main` 前先 pull 最新，保持本地與遠端同步。

::

::content-block

### 二、分支策略與 PR 流程

**為何重要**  
清晰的分支策略能避免多人同時改同一段程式、降低衝突，也能讓測試和部署流程更可靠。

**建議做法**

- 使用 Feature Branch：每個新功能或 bugfix 在 `feature/xxx` 或 `bugfix/xxx` 分支開發。
- Pull Request（PR）流程：完成後發 PR，請求同事 code review，確保品質並讓大家共享知識。
- Merge 與 Rebase：習慣把分支 rebase 到最新 `main`，然後再合併，保有乾淨的歷史。

::

::content-block

### 三、衝突處理與回滾技巧

**為何重要**  
衝突無可避免，知道如何妥善解決以及需要時快速回滾，能降低開發風險。

**建議做法**

1. 衝突發生時，用 `git status` 找到衝突檔，手動或工具（VSCode Merge）解決後再 `git add`、`git commit`。
2. 如有必要，利用 `git revert <commit>` 生成「反向提交」來回滾錯誤更改；或用 `git reset --hard <hash>` 回到某個安全點（慎用）。
3. 定期在 `main` 分支打標籤（`git tag v1.0.0`），快速定位穩定版本。

::

> 小結：  
> 從「初始化與基礎 commit → 分支策略與 PR → 衝突處理及回滾」，掌握三大 Git 核心流程，就能讓前端專案協作更有序、更安全，也更容易維護。

::

## 延伸閱讀

- **Git Flow 實戰：打造團隊專屬分支規範**
- **持續整合 CI/CD：與 Git 的無縫接軌**
- **GitHub Actions 入門：自動化前端測試與部署**
