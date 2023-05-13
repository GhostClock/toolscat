### 项目目录说明
```
toolscat
├─.vscode                # vscode配置文件
|    └─extensions.json   # 项目推荐插件列表（可把项目中用到的vscode插件ID写进去，跑项目时没有安装这些插件会推荐安装）
├─public/                # 公共资源目录
├─src/                   # 核心开发目录
|  ├─App.vue             # 项目根组件
|  ├─main.js             # 项目入口文件
|  ├─views/              # 项目视图目录
|  | └─Home/index.vue
|  ├─stores/             # 统一状态管理目录-pinia
|  ├─router/             # 项目路由目录
|  | └─index.js
|  ├─components/         # 项目公共组件目录
|  ├─assets/             # 项目静态资源目录
├─.eslintrc.cjs          # eslint 配置文件
├─.gitignore             # git忽略文件
├─.prettierrc.json       # prettier 配置文件
├─README.md              # 项目说明文件
├─index.html             # html入口文件
├─package.json           # 项目配置和包管理文件
├─vite.config.js         # vite 配置文件
```

### ArcoVue
安装
npm install --save-dev @arco-design/web-vue

按需加载
npm i unplugin-vue-components -D
自动导入
npm i -D unplugin-auto-import

### 配置项目内组件 & API 的自动引入

### 安装 VueUse
安装 npm i @vueuse/core

### 配置 SVGIcon
安装 npm i -D --save unplugin-icons

预览到图标
安装 VSCode 插件 Iconify IntelliSense

### Styles公共样式管理、初始化样式
安装 npm i -D --save  normalize.css
main.js 引入 import('normalize.css') 

### 配置UnoCSS -- 原子化CSS
安装： npm install -D --save unocss @unocss/preset-uno @unocss/preset-attributify @unocss/transformer-directives

unocss 核心插件
@unocss/preset-uno 默认预设，Tailwind / WindiCSS 等超集
@unocss/preset-attributify 属性预设，为其他预设和规则提供属性模式，下面会介绍
@unocss/transformer-directives  指令转换器插件，允许使用 @apply指令在 style 中写原子化 css

安装 VSCode 插件 UnoCSS

### 其他 Vite 配置
环境配置
启动配置
model配置

### 添加Config配置

### 默认布局组件DefaultLayout

### 修改DefaultLayout页面布局

### 导航栏组件Navbar