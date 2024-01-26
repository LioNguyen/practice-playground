# PLOP

## Resources

- [Speed up Your Development Workflow With Plop JS](https://youtu.be/r_fSz2KudsE?si=TrylwAaLxXeoid2m)
- [Tutorial Github Repo](https://github.com/TomDoesTech/auth-api-tutorial)
- [Plop Homepage](https://plopjs.com)

## How to init

```bash
yarn add plop -D
```

`package.json`

```json
{
  "scripts": {
    "gen": "plop"
  }
}
```

`settings.json`

```json
{
  "[handlebars]": { "editor.formatOnSave": false }
}
```

## How to use

- Use `{{variable}}` to add variable

```js
// plopfile.mjs

export default function (
  /** @type {import("plop").NodePlopAPI} */
  plop
) {
  // create generators
  plop.setGenerator(<name>,{
    description: "",

    // array of inquirer prompts
    prompts: [
      {
        type: "",
        name: "",
        message: "",
      }
    ],

    // array of actions
    actions: [
      {
        type: "",
        path: "",
        templateFile: "",
        // template: ""
      }
    ],
  });

  plop.setHelper(<name>, function(){})
}
```
