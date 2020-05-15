<h1 align="center">WithAnt Egg Server</h1>

# 前言

学React已经有一段时间了，期间都是接触到的都是些概念性的东西和一些简单的demo示例。想要更加熟悉框架以及能够安全的运用在项目中，还需要真正的实战练习，无意中看到支付宝withAnt商店小程序，于是就用刚学的Umi,React,Antd-mobile照着写了起来。

项目都是在利用业余时间写的，仅仅用于学习使用。

项目中涉及到用户登陆，jwt token验证，商品管理，订单管理，用户管理等。

此项目为服务端，另外有基于Umi React Antd的用户客户端界面和后台数据管理界面，客户端需要结合此服务端使用，否出会出现找不到数据的异常。

为什么数据库名称是egg-sports，因为一开始我是想做一个体育类的app，但是一直没有好的思路，所以就放弃了但是数据库名称没有改过来。

>[[后台管理页面传送地址]](https://github.com/stopry/WithAntShop_AdminClient_React.git)<br/>
[[用户客户端页面传送地址]](https://github.com/stopry/withantShop_react_client.git)

__项目源码基于 GPL 协议，仅仅用于 nodejs Egg mongoDB 框架的学习，请勿作为商业用途。 请抵制一切盗版侵权行为，请尊重作者的劳动果实！__


## 目录约定规范

see [egg docs][egg] for more detail.


## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

## 技术栈

- egg
- mongoDB mongoose
- jwt
