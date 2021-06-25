# 《[Babel 笔记](https://itony.net/post/babel-note.html)》的实验室

> 由于 Babel 已经升级到`v7.*`系列，尤其是`v7.4`后期版本，改动非常大，所以原先实验不在适用
> 如需要参考`v6.*`系列，请移步至`babel-v6`分支

## use-preset-useBuiltIns-entry

[README](./use-preset-useBuiltIns-entry/README.md)

### webpack 结果

```bash
asset main.js 520 KiB [emitted] [big] (name: main)
orphan modules 706 bytes [orphan] 2 modules
runtime modules 500 bytes 2 modules
modules by path ./node_modules/core-js/modules/*.js 273 KiB 271 modules
modules by path ./node_modules/core-js/internals/*.js 157 KiB 176 modules
./src/index.ts + 2 modules 13.9 KiB [built] [code generated]
./node_modules/regenerator-runtime/runtime.js 24 KiB [built] [code generated]

webpack 5.40.0 compiled with 3 warnings in 2460 ms
```

## use-preset-useBuiltIns-usage

[README](./use-preset-useBuiltIns-usage/README.md)

### webpack 结果

```bash
When setting `useBuiltIns: 'usage'`, polyfills are automatically imported when needed.
Please remove the direct import of `core-js` or use `useBuiltIns: 'entry'` instead.

asset main.js 581 KiB [emitted] [big] (name: main)
orphan modules 882 bytes [orphan] 2 modules
runtime modules 500 bytes 2 modules
modules by path ./node_modules/core-js/modules/*.js 330 KiB 362 modules
modules by path ./node_modules/core-js/internals/*.js 174 KiB 188 modules
./src/index.ts + 2 modules 1.32 KiB [built] [code generated]
./node_modules/core-js/index.js 40 bytes [built] [code generated]
./node_modules/regenerator-runtime/runtime.js 24 KiB [built] [code generated]
./node_modules/core-js/features/index.js 15.6 KiB [built] [code generated]

webpack 5.40.0 compiled with 3 warnings in 2439 ms
```

## use-preset-useBuiltIns-false

[README](./use-preset-useBuiltIns-false/README.md)

### webpack 结果

```bash
asset main.js 581 KiB [emitted] [big] (name: main)
orphan modules 706 bytes [orphan] 2 modules
runtime modules 500 bytes 2 modules
modules by path ./node_modules/core-js/modules/*.js 330 KiB 362 modules
modules by path ./node_modules/core-js/internals/*.js 174 KiB 188 modules
./src/index.ts + 2 modules 1.11 KiB [built] [code generated]
./node_modules/core-js/index.js 40 bytes [built] [code generated]
./node_modules/regenerator-runtime/runtime.js 24 KiB [built] [code generated]
./node_modules/core-js/features/index.js 15.6 KiB [built] [code generated]

webpack 5.40.0 compiled with 3 warnings in 2890 ms
```
