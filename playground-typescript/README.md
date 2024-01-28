# TYPESCRIPT PLAYGROUND

## Resources

- [Typescript tutorial](https://www.typescripttutorial.net)

## What technologies we are using?

- [ts-node](https://www.npmjs.com/package/ts-node)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) (old lib)
- [tsconfig-paths](https://www.npmjs.com/package/tsconfig-paths)

## How to install

```bash
yarn init
yarn add typescript --dev
tsc --init
```

### Using ts-node

```bash
yarn add nodemon ts-node tsconfig-paths @types/node --dev
```

`package.json`

```json
{
  "scripts": {
    "dev": "nodemon -r tsconfig-paths/register --transpileOnly src/app.ts"
  }
}
```

[ts-node transpile](https://www.npmjs.com/package/ts-node#transpileonly)

- --transpile-only: Chỉ chuyển đổi mã nguồn TypeScript thành JavaScript mà không kiểm tra lỗi hoặc kiểm tra kiểu. Điều này có thể giúp tăng tốc quá trình phát triển bằng cách tránh kiểm tra kiểu mỗi lần chạy.

### Using ts-node-dev

```bash
yarn add ts-node-dev tsconfig-paths --dev
```

`package.json`

```json
{
  "scripts": {
    "dev": "ts-node-dev -r tsconfig-paths/register --respawn --transpile-only src/app.ts"
  }
}
```

### Config

`tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```
