## 1. 什么是Vue Cli
- 如果你只是简单写几个Vue的Demo程序 , 那么你不需要Vue CLI.
- 如果你在开发大型项目 , 那么你需要 , 并且必然使用到Vue CLI
    - 使用Vue.js 开发大型应用时 , 我们需要考虑代码目录结构 , 项目结构和热部署 , 热加载 , 代码单元测试等事情.
         - 如果每个项目都要手动完成这些工作 , 那无疑效率比较低效 , 所以通常我们会使用一些脚手架工具来帮助完成这些事情.

- CLI是什么意思?
    - CLI是Command-Line Interfasce , 翻译为命令行界面 , 但是俗称脚手架.
    - Vue CLI是官方发布vue.js项目脚手架
    - 使用vue-cli可以快速搭建Vue开发环境以及对应的webpack配置.

### 1.1 VueCLI使用前提 - Node
安装Node.js
检测安装的版本
什么是npm?node package manager

### 1.2 VueCLI使用前提 - webpack
Vue.js官方脚手架工具就使用了webpack模板
- Vue.js官方脚手架工具就使用了webpack模板
    - 对所有的资源会压缩等优化操作
    - 它在开发过程中提供了一套完整的功能 , 能够使得我们开发过程中变得高效.
- Webpack的全局安装
    - npm install wabpack -g

### 1.3 VueCLI的安装
安装Vue脚手架

    npm install -g @vue/cli

注意 : 上面安装的是Vue CLI3的版本 , 如果需要想按照Vue CLI2的方式初始化项目是不可以的.

Vue CLI2初始化项目

    vue init webpakc my-project


