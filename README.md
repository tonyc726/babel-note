# 《[Babel 笔记](https://itony.net/babel-note)》的实验室

> 由于 Babel 已经升级到`v7.*`系列，尤其是`v7.4`后期版本，改动非常大，所以原先实验不在适用
> 如需要参考`v6.*`系列，请移步至`babel-v6`分支

## 实验目标：

> 🚨 从 Babel 7.4.0 开始，这个包(`@babel/polyfill`)已经被弃用，以支持直接包含`core-js/stable`（以 polyfill ECMAScript 功能）和`regenerator-runtime/runtime`（需要使用转译的生成器函数）：
>
> ```javascript
> import 'core-js/stable';
> import 'regenerator-runtime/runtime';
> ```

- 测试使用`@babel/preset-env` 组合 `core-js@3`、`regenerator-runtime` 中不同配置模式下，处理`polyfill`的方法与结果；

  - 使用`useBuiltIns: 'entry'`;
  - 使用`useBuiltIns: 'usage'`;
  - 使用`useBuiltIns: false`;

- 测试使用`@babel/runtime` 组合 `@babel/plugin-transform-runtime`模式下，处理依赖注入的方法与结果；

## 实验结果

以上 4 种模式全部处理平台兼容性问题，不过处理方式不同，结果也有所差异；

| 模式                       | webpack 产物大小（未压缩） | 备注                                                                                                                                                                                                |
| :------------------------- | :------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 使用`useBuiltIns: 'entry'` |          520 KiB           | 根据配置的浏览器兼容，引入浏览器不兼容的 `polyfill`; 需要在入口文件手动添加 `import 'core-js';import 'regenerator-runtime/runtime';`；会自动根据 `browserslist` 替换成浏览器不兼容的所有 `polyfill` |
| 使用`useBuiltIns: 'usage'` |          581 KiB           | 根据配置的浏览器兼容，以及代码中用到的 API 来进行 `polyfill`，实现了按需添加                                                                                                                        |
| 使用`useBuiltIns: false`   |          581 KiB           | 此时不对 `polyfill` 做操作。如果引入 `@babel/polyfill`，则无视配置的浏览器兼容，引入所有的 `polyfill`                                                                                               |
| 使用`@babel/runtime'`      |          104 KiB           | 按需注入依赖，优势在于提供沙盒环境，同时利用插件，抽离公共辅助函数，大大减小整体内容                                                                                                                |

综合官方文档，以及上述实验结果，结论如下：

1. 如果是**开发独立依赖包**，推荐使用`@babel/runtime` 组合 `@babel/plugin-transform-runtime`模式；
2. 如果是**开发应用级项目**，推荐使用`useBuiltIns: 'usage'`模式；

### use-preset-useBuiltIns-entry

[README](./use-preset-useBuiltIns-entry/README.md)

#### webpack 结果

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

### use-preset-useBuiltIns-usage

[README](./use-preset-useBuiltIns-usage/README.md)

#### webpack 结果

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

### use-preset-useBuiltIns-false

[README](./use-preset-useBuiltIns-false/README.md)

#### webpack 结果

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

### use-babel-plugin-transform-runtime

[README](./use-babel-plugin-transform-runtime/README.md)

#### webpack 结果

```bash
asset main.js 104 KiB [compared for emit] (name: main)
runtime modules 1.19 KiB 5 modules
orphan modules 1.07 KiB [orphan] 2 modules
modules by path ./node_modules/core-js-pure/internals/*.js 57.9 KiB 93 modules
modules by path ./node_modules/core-js-pure/modules/*.js 29.2 KiB 17 modules
modules by path ./node_modules/core-js-pure/es/ 1.97 KiB 8 modules
modules by path ./node_modules/@babel/runtime-corejs3/core-js/ 316 bytes
  modules by path ./node_modules/@babel/runtime-corejs3/core-js/instance/*.js 193 bytes 3 modules
  ./node_modules/@babel/runtime-corejs3/core-js/json/stringify.js 65 bytes [built] [code generated]
  ./node_modules/@babel/runtime-corejs3/core-js/promise.js 58 bytes [built] [code generated]
modules by path ./node_modules/core-js-pure/features/ 591 bytes
  modules by path ./node_modules/core-js-pure/features/instance/*.js 223 bytes 3 modules
  ./node_modules/core-js-pure/features/json/stringify.js 75 bytes [built] [code generated]
  ./node_modules/core-js-pure/features/promise/index.js 293 bytes [built] [code generated]
./src/index.ts + 2 modules 1.68 KiB [built] [code generated]

webpack 5.40.0 compiled successfully in 1647 ms
```

## 参考文献

- https://babeljs.io/docs/en/babel-preset-env
- https://babeljs.io/docs/en/babel-polyfill
- https://babeljs.io/docs/en/babel-plugin-transform-runtime
- https://cli.vuejs.org/zh/guide/browser-compatibility.html
- https://awdr74100.github.io/2020-03-16-webpack-babelloader/
- https://segmentfault.com/a/1190000020237817
