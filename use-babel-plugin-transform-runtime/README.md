# 在 Node / Browserify / Webpack 中的使用

## 官方文档

- https://babeljs.io/docs/en/babel-polyfill#usage-in-node--browserify--webpack
- https://babeljs.io/docs/en/babel-preset-env#usebuiltins
- https://babeljs.io/docs/en/babel-plugin-transform-runtime

Babel 使用非常小的辅助函数来实现诸如`_extend`. 默认情况下，这将添加到需要它的每个文件中。这种重复有时是不必要的，尤其是当您的应用程序分布在多个文件中时。

这就是`@babel/plugin-transform-runtime`插件的用武之地：所有帮助程序都将引用该模块`@babel/runtime`以避免在编译输出中出现重复。运行时将被编译到您的构建中。

这个转换器的另一个目的是为你的代码创建一个沙盒环境。如果您直接导入 `core-js` 或`@babel/polyfill` 以及它提供的内置函数，例如 `Promise`,`Set` 和 `Map`，则会污染全局范围。虽然这对于应用程序或命令行工具来说可能没问题，但如果您的代码是一个您打算发布供其他人使用的库，或者您无法完全控制代码运行的环境，这就会成为一个问题。

转换器将为这些内置 `core-js` 函数添加别名，以便您可以无缝地使用它们，而无需使用 polyfill。

## 使用说明

> 🚨 请注意
> `corejs: 2`仅支持全局变量（例如`Promise`）和静态属性（例如`Array.from`）;
> `corejs: 3`处理全局变量（例如`Promise`）和静态属性，还支持实例属性（例如`[].includes`）;
>
> 默认情况下，`@babel/plugin-transform-runtime`不填充提案，但是如果正在使用`corejs: 3`，则可以通过启用该`proposals: true`选项来选择开启

**_ 推荐使用 `corejs: 3` _**

```bash
npm install --save-dev @babel/plugin-transform-runtime

npm install --save @babel/runtime-corejs3
```

指定在`.babelrc` 配置文件中，

```json
{
  "presets": [["@babel/env"], "@babel/preset-typescript"],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": {
          "version": 3,
          "proposals": true
        },
        "useESModules": true
      }
    ]
  ]
}
```

## webpack 结果

```bash
asset main.js 104 KiB [emitted] (name: main)
runtime modules 1.19 KiB 5 modules
orphan modules 1.12 KiB [orphan] 2 modules
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
./src/index.ts + 2 modules 1.71 KiB [built] [code generated]

webpack 5.40.0 compiled successfully in 2565 ms
```

## browserslist 特殊说明

如果在`browserslist`相关的配置中，使用了例如`last 2 versions`或者`>1%`这样的配置时，需要保持`caniuse-lite`数据的最新状态，可以通过以下命令完成升级工作：

```bash
npx browserslist@latest --update-db
```
