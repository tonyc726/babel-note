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

如果使用 `useBuiltIns: 'usage'` 指定在.babelrc 配置文件中，但是不需要在入口文件或者`webpack.config.js`中包含条目数组或源中。

> ⚠ 注意，**_`@babel/polyfill`_** `core-js`仍然需要安装。

```json
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "ie": "11"
        },
        "useBuiltIns": "usage", // <<< polyfill 配置
        "corejs": "3" // <<< 声明对应`corejs`的版本
      }
    ],
    "@babel/preset-typescript"
  ]
}
```

## browserslist 特殊说明

如果在`browserslist`相关的配置中，使用了例如`last 2 versions`或者`>1%`这样的配置时，需要保持`caniuse-lite`数据的最新状态，可以通过以下命令完成升级工作：

```bash
npx browserslist@latest --update-db
```
