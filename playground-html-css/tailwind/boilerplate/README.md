# TAILWIND

- [TAILWIND](#tailwind)
  - [1. Resources](#1-resources)
  - [2. How to install?](#2-how-to-install)

## 1. Resources

- [Tailwind CSS From Scratch | Learn By Building Projects](https://www.udemy.com/course/tailwind-from-scratch/)
- [Install Link](https://tailwindcss.com/docs/installation)
- [Webpack Link](https://webpack.js.org)

## 2. How to install?

```Shell
npm install -D tailwindcss
npx tailwindcss init

npx tailwindcss -i ./css/style-tailwind.css -o ./css/style.css --watch
```

```json
{
  "scripts": {
    "build": "tailwindcss -i ./css/style-tailwind.css -o ./css/style.css",
    "watch": "tailwindcss -i ./css/style-tailwind.css -o ./css/style.css --watch"
  }
}
```

```html
<!-- index.html  -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Tailwind</title>
  </head>
  <body>
    <!-- Your code here  -->
  </body>
</html>
```
