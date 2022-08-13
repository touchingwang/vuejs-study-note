HMLT5的history模式
https://blog.csdn.net/weixin_40921421/article/details/122084595
# Router
## 1.认识路由
目前前端流行的三大框架 , 都有自己的路由实现 :
- Angular 的 ngRouter
- React 的 ReactRouter
- Vue 的 VueRouter
## 2.vue-router安装
因为我们已经学些了webpack, 后续开发中我们主要是通过工程化的方式进行开发.

- 所以在后续 , 我们直接使用npm来安装路由即可.
步骤一 : 安装 vue-router
- npm install vue-router --save

    步骤二 : 在模块化工程中使用它(因为是一个插件 , 所以可以通过Vue.use()来安装路由功能)
    - 第一步 : 导入路由对象 , 并且调用Vue.use(VueRouter)
    - 第二步 : 创建路由实例 , 并且传入路由映射配置
    - 第三步 : 在Vue实例中挂载创建的路由实例

使用vue-router的步骤 : 
- 第一步 : 创建了组件
- 第二步 : 配置路由映射 : 组件和路径映射关系
- 第三步 : 使用路由 : 通过 `<routyer-link>和<router-view>`
### 2.2 动态路由
在某些情况下 , 一个页面的path路径可能是不确定的 , 比如我们进入用户界面时 , 希望是如下路径 :
- /user/aaaa 或 /user/bbbb
- 除了有前面的/user之外 , 后面还跟上了用户的ID
- 这种 path 和 Component 的匹配关系 , 我们称之为动态路由(也是路由传递数据的一种方式)
### 2.3 认识路由的懒加载
当打包构建应用时 , JavaScript 包会变得非常大 , 影响页面加载.
如果我们能把不同路由对应的组件分割成不同的代码块 , 然后当路由被访问的时候才加载对应组件 , 这样就更加高效了.

路由懒加载做了什么?
- 路由懒加载的主要作用就是将路由的组件打包成一个个的js代码块.
- 只有在这个路由被访问到的时候 , 才加载对应的组件
## 3.vue-router嵌套使用
嵌套路由是一个很常见的功能
 - 比如在home页面中 , 我们希望通过 /home/news 和 /home/message 访问一些内容
 - 一个路径映射一个组件 , 访问这两个路径也会分别渲染两个组件.
## 4.vue-router参数传递
### 4.1 传递参数的方式
- 传递参数主要有两种类型 : params 和 query

params 的类型 : 
- 配置路由格式 : `/router/:id`
- 传递的方式 : 在 path 后面跟上对应的值
- 传递后形成的路径 : `/router/123 , /router/abc`

 query 的类型
 - 配置路由格式 : /router , 也就是普通配置
 - 传递的方式 : 对象中使用 query 的 key 作为传递方式
 - 传递后形成的路径 : `/router?i=123, /router?id=abc`


## 5. 导航守卫
### 5.1 为什么使用导航守卫？
我们来考虑一个需求: 在一个SPA应用中, 如何改变网页的标题呢?
- 网页标题是通过`<title>`来显示的 , 但是SPA只有一个固定的HTML , 切换不同的页面 , 标题并不会改变.
- 但是我们可以通过JavaScript来修改`<title>`的内容 .window.document.title = '新的标题'.
- 那么在Vue项目中 , 在哪里修改?什么时候修改比较合适呢?

普通的修改方式:
- 我们比较容易想到的修改标题的位置是每一个路由对应的组件.vue文件中.
- 通过mounted生命周期函数 , 执行对应的代码进行修改即可.
- 但是当页面比较多时 , 这种方式不容易维护(因为需要在多个页面执行类似的代码)

有没有更好的办法呢?使用导航守卫即可

什么是导航守卫?
- vue-router提供的导航守卫主要用来监听路由的进入和离开的.
- vue-router提供了beforeEach和afterEach的钩子函数 , 它们会在路由即将改变前和改变后触发.

### 5.2 导航守卫使用
我们可以利用beforeEach来完成标题的修改.
- 首先 , 我们可以在钩子当中定义一些标题 , 可以利用meta来定义
- 其次 , 利用导航守卫 , 修改我们的标题.

在路由创建的index.vue页面中添加
```vue
router.beforeEach((to, from, next) => {

  //从from跳转到to

  document.title = to.matched[0].meta.title

  next()

})
```

补充一 : 如果是后置钩子 afterEach() ,不需要主动调用 next() 函数.
补充二 : 上面我们使用的导航守卫 , 被称之为全局守卫
- 路由独享的守卫
- 组件内的守卫

### 5.3 keep alive
keep-alive 是 Vue 内置的一个组件 , 可以使被包含的组件保留状态 , 或避免重新渲染.
- 它有两个非常重要的属性 : 
- include - 字符串或正则表达 , 只有匹配的组件会被缓存
- exclude - 字符串或正则表达式 , 任何匹配的组件都不会被缓存

router-view 也是一个组件 , 如果直接被包在 keep-alive 里面 , 所有路径匹配到的视图组件都会被缓存 : 