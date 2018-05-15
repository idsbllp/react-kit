# react-kit

> 一个 react 脚手架, 由 vue-cli 改编而来。 
>
> webpack: @2
>
> react: @15.6.1
>
> react-router-dom: @4.2.2

## Insall

```
git clone git@github.com:idsbllp/react-kit.git
```

## Usage

``` bash
rm -rf .git

# install dependencies
(c)npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

## 支持：

+ less
+ es6/7
+ 模块热加载
+ redux react-router4

```
// 模块热加载 实例在: src/router/index.jsx, 可通过 chrome调试工具-network 查看效果
// 路径
import asyncComponent from '../components/async'
// 用法
const Index = asyncComponent(() => import('../pages/index').then(module => module.default))

//引入的reducer combineReducers到store中就行，可安装chrome redux插件查看redux状态
```

