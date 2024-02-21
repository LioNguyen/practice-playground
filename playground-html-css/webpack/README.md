# WEBPACK

- [WEBPACK](#webpack)
  - [1. Resources](#1-resources)
  - [2. What is Webpack?](#2-what-is-webpack)
  - [3. How to setup?](#3-how-to-setup)
    - [a. Instal library](#a-instal-library)
    - [b. Config](#b-config)
      - [webpack.config.js](#webpackconfigjs)
      - [postcss.config.js](#postcssconfigjs)
      - [package.json](#packagejson)

## 1. Resources

- [Tailwind CSS From Scratch | Learn By Building Projects](https://www.udemy.com/course/tailwind-from-scratch/)
- [Webpack Tutorial Gist | Brad](https://gist.github.com/bradtraversy/1c93938c1fe4f10d1e5b0532ae22e16a)

## 2. What is Webpack?

1. **webpack**: Là một `công cụ xây dựng` (build tool) phổ biến trong `phát triển web`. Nó giúp quản lý và tổ chức mã nguồn, cũng như `chuyển đổi và tối ưu hóa tài nguyên của ứng dụng`.

2. **webpack-cli**: `Cung cấp giao diện dòng lệnh` để tương tác với webpack từ dòng lệnh. Nó giúp chúng ta chạy các lệnh liên quan đến webpack từ terminal.

3. **webpack-dev-server**: Là một máy chủ phát triển tích hợp với webpack, giúp bạn theo dõi và `tự động làm mới trình duyệt` khi bạn thực hiện thay đổi trong mã nguồn.

4. **style-loader**: Loader cho webpack, giúp `chèn` các `styles` vào trang `HTML`. Thường được sử dụng kết hợp với `css-loader`.

5. **css-loader**: Loader cho webpack, giúp `xử lý` và đưa các file `CSS` vào trong mã nguồn `JavaScript`.

6. **postcss**: Một công cụ xử lý CSS với các plugin để thực hiện các biến đổi và tối ưu hóa. Nó giúp `mở rộng khả năng xử lý CSS` của bạn.

7. **postcss-loader**: Loader cho webpack, giúp `tích hợp postcss` vào quá trình xây dựng `webpack`.

8. **postcss-preset-env**: Một preset cho PostCSS, cung cấp các tính năng CSS mới và hỗ trợ các tính năng CSS Level 4 và 5. Giúp bạn `viết CSS với các tính năng hiện đại mà không cần lo lắng về sự tương thích`.

Khi bạn cài đặt những gói này, bạn có thể sử dụng chúng để cấu hình webpack và xử lý CSS trong ứng dụng của mình. Ví dụ cụ thể có thể bao gồm việc sử dụng `postcss-loader` để tích hợp PostCSS và `postcss-preset-env` để cấu hình các tính năng CSS mới.

## 3. How to setup?

### a. Instal library

```Shell
yarn init -y
yarn add -D tailwindcss
yarn add -D webpack webpack-cli webpack-dev-server style-loader css-loader postcss postcss-loader postcss-preset-env html-webpack-plugin
```

### b. Config

#### webpack.config.js

```js
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.join(__dirname, "index.html"),
  //     filename: "index.html",
  //   }),
  // ],
};
```

#### postcss.config.js

```js
const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: ["postcss-preset-env", tailwindcss],
};
```

#### package.json

```json
"scripts": {
    "dev": "webpack serve",
    "build": "webpack"
  },
```
