## build

This build the project

Run task `start`.

Run task `end` after.

```bash
npx parcel build index.html
```

## dev

This is for development

```bash
npx parcel index.html
```

## start

This run before the build

```js
console.log("task start")
```

## end

This run after the build

```js
console.log("task end")
```