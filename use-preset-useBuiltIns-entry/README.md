# 在 Node / Browserify / Webpack 中的使用

## 官方文档

- https://babeljs.io/docs/en/babel-polyfill#usage-in-node--browserify--webpack
- https://babeljs.io/docs/en/babel-preset-env#usebuiltins

## 使用说明

提供 polyfill 是为了方便，但应该配合`@babel/preset-env`的`useBuiltIns`选项一起使用，以便输出中按需(环境所需，而非功能所需)引入对应的 polyfill 模块。
否则，还是建议手动导入单个 polyfill 模块。

> 🚨 从 Babel 7.4.0 开始，这个包(`@babel/polyfill`)已经被弃用，以支持直接包含`core-js/stable`（以 polyfill ECMAScript 功能）和`regenerator-runtime/runtime`（需要使用转译的生成器函数）：
>
> ```javascript
> import 'core-js/stable';
> import 'regenerator-runtime/runtime';
> ```
>
> ⚠ 务必确保在所有其他代码/要求语句之前调用它！

如果使用 `useBuiltIns: 'entry'` 指定在.babelrc 配置文件中，

```json
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "ie": "11"
        },
        "useBuiltIns": "entry", // <<< polyfill 配置
        "corejs": "3" // <<< 声明对应`corejs`的版本
      }
    ],
    "@babel/preset-typescript"
  ]
}
```

打包入口文件

```typescript
import 'core-js';
import 'regenerator-runtime/runtime';

// ...
```

## webpack 结果

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

## browserslist 特殊说明

如果在`browserslist`相关的配置中，使用了例如`last 2 versions`或者`>1%`这样的配置时，需要保持`caniuse-lite`数据的最新状态，可以通过以下命令完成升级工作：

```bash
npx browserslist@latest --update-db
```
