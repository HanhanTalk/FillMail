# 简介

> 深入学习vue框架，此项目算是一个比较中型的项目，包括了注册、登录、密码找回、邮箱、收发邮件、邮件分类、搜索、个人设置等等，涉及vue构建项目的多种场景，项目是自己去模仿material design上的某个UI设计做的，还自己弄了些切换动画，感觉从视觉效果上来看还不错。


# 技术栈

> vue2 + vuex + vue-router + webpack + ES6/7 + sass + axios

# 数据接口

> 开发过程中使用 mock 来进行数据模拟，跑通前后端交互逻辑，后期会用nodejs来构建后台系统接口，在这个基础上使用express框架，数据库使用mongoDB以及对mongoDB快速建模的mongoose。


# 项目运行

> git clone 项目仓库

> 在文件根目录安装下依赖

> npm install 

> 运行项目

> npm run dev

> 项目服务端在server文件夹(暂时还没)

> node bin/www

# 其他

> 如果你比较喜欢这个项目，请赏一个星星吧，因为遵循开发的MVP原则，所以很多细节还未优化，项目我会持续跟进，谢谢

# 效果展示

> 暂无

# 总结

> vue虽然不像angular那样是一个完整的框架（几乎不需要依赖其他东西，自己以一敌百），但是配合上vuex、vue-router等工具依然可以胜任各种单页面应用了，而且vue相较于angular也有更为友好的学习曲线，这次开发过程中还是存在对项目整体驾驭不足的情况，在项目的扩展性上思考的略少，不过收获还是有的，对vue掌握更加的熟练，以后做项目开发，不管使用怎样的技术栈，整体的开发流程和思路应该不会有很大的变化。


# 目录结构

> src：
> assets 资源目录，用于组织编译的静态资源
> components 组件目录，用于应用的vue.js组件
> pages 页面目录，用于组织应用的路由及视图
> plugins 插件目录，用于组织需要在根vue.js应用实例化之前需要运行的 Javascript 插件。
> store 目录用于组织应用的 Vuex 状态树 文件。
> router vue-router配置
> server：
> node 目录


