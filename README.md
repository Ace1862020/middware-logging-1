# Middleware 實作練習 - middware logging part1
    Note：
    使用 Node/Express 開發，我們會常常撰寫一些 middleware 小工具來幫助我們 debug ...
    目標是「伺服器收到任何來自瀏覽器的 request 時，都會自動把資訊紀錄到 server log 裡。
![](https://github.com/Ace1862020/middware-logging-1/blob/master/middleware-1.jpg)

## Features - 產品特色
* 顯示 時間戳記(time-stamps) - 以當地時間 (台北) 顯示
* 同時顯示 請求的 HTTP 方法
* 同時顯示 URL

## Environment Setup - 環境建置
* Node.js(version - 10.15.0) - JavaScript 執行環境

## Built with & Tools
* npm (version - 6.4.1) - Node.js 的套件管理氣
* nodemon (version - 2.0.7) - 伺服器輔助
* Express Framework (version - 4.17.1) - 應用程式框架
* Express-handlebars (version - 5.2.0) - 模板引擎
* Visual Stuldio Code - 開發環境

## Install 安裝
1. 開啟終端機(Terminal) 或 (Git Bash) -> 到欲存放專案的本機位置 並執行:
    git clone https://github.com/Ace1862020/middware-logging-1.git
2. 使用終端機(Terminal) 或 (Git Bash) -> 進入到放此專案的資料夾
    cd middleware-logging
3. 使用終端機(Terminal) 或 (Git Bash) -> 安裝套件
    npm install
4. 啟動伺服器，執行 app.js 檔案
    npm run dev
5. 終端機顯示以下字樣，表示連線成功
    App running on http://localhost:3000
