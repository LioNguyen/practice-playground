# HTML-CSS

- [HTML-CSS](#html-css)
  - [1. Resources](#1-resources)
  - [2. Hack](#2-hack)
    - [How to edit HTML anywhere?](#how-to-edit-html-anywhere)
  - [3. How to add style to HTML](#3-how-to-add-style-to-html)
  - [4. How to run SCSS?](#4-how-to-run-scss)
    - [How to create variables?](#how-to-create-variables)
    - [How to split 1 scss file into multiple scss files?](#how-to-split-1-scss-file-into-multiple-scss-files)
    - [How to create and use function in scss file?](#how-to-create-and-use-function-in-scss-file)
  - [5. Style](#5-style)
    - [Grid](#grid)
      - [How to use gird?](#how-to-use-gird)

## 1. Resources

- [Frontend Challenges](https://www.frontendmentor.io)

## 2. Hack

### How to edit HTML anywhere?

`document.body.contentEditable='true'`

## 3. How to add style to HTML

- [Link CSS to HTML](https://www.freecodecamp.org/news/how-to-link-css-to-html/)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Playground | HTML-CSS</title>
  </head>
  <body>
    <!-- Your code -->
  </body>
</html>
```

## 4. How to run SCSS?

- [SAAS](https://sass-lang.com/guide/)

`saas --watch styles.scss styles.css`

### How to create variables?

```scss
// styles.scss

$font: Helvetica, sans-serif;
$primary-color: #333;
$white-color: #fff;
```

### How to split 1 scss file into multiple scss files?

- Use `_` to name scss files
- Use modules with `@use [name].scss`

```scss
// _variables.scss

$font: Helvetica, sans-serif;
$primary-color: #333;
$white-color: #fff;
```

```scss
// styles.scss

@use "variables";

body {
  background: variables.$white;
}
```

### How to create and use function in scss file?

- Use `@mixin` and `@include`

```scss
// styles.scss

@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, 0.25);
  color: #fff;
}

p.alert {
  @include theme(DarkRed);
}
p.info {
  @include theme;
}
```

## 5. Style

### Grid

- [CSS Grid](https://www.w3schools.com/css/css_grid.asp)

#### How to use gird?

```html
<div class="grid-container">
  <div class="box box-1"></div>
  <div class="box box-2"></div>
  <div class="box box-3"></div>
</div>
```

```css
.grid-container {
  max-width: 1000px;
  display: grid;
  grid-template-columns: 100px 100px 100px 100px; /* 4 columns */
  grid-template-rows: 50px 50px 50px 50px; /* 3 rows */

  .box {
    background: #eee;
    border-radius: 4px;
  }

  .box-1 {
    background: red;
    grid-column: 1 / span 4; /* Start from column 1, and span 4 columns  */
  }

  .box-2 {
    background: yellow;
    grid-row: 2 / span 3; /* Start from row 2, and span 3 rows  */
  }

  .box-3 {
    background: blue;
    grid-area: 2 / 2 / span 3 / span 3; /* Start from column 2, row 2 and span 3 columns, 3 rows  */
  }
}
```
