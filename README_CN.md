![Release](https://img.shields.io/github/release/lh1me/hexo-theme-aomori.svg)
![NPM version](https://badge.fury.io/js/hexo.svg)
![Required Node version](https://img.shields.io/node/v/hexo)
![Action](https://github.com/lh1me/hexo-theme-aomori/workflows/Action/badge.svg)
![License](https://img.shields.io/github/license/lh1me/hexo-theme-aomori.svg)

<br/>

![image](https://raw.githubusercontent.com/lh1me/hexo-theme-aomori/master/docs/cover.png)

# Aomori

Hexo 是一款快速、简洁且高效的博客框架，拥有超快生成速度，支持 Markdown，一键部署和高度可扩展性。本项目是基于 Hexo 一系列优势所开发出来的一款主题，主题特性如下

- 丰富的网站样式
- 丰富的主题配置
- 优化图片视频播放
- 出色的SEO优化
- 响应式布局
- 开源并持续更新
- ...

[ENGLISH](/README.md) | [CHANGELOG](/CHANGELOG.md)

## Demo

[https://linhong.me](https://linhong.me)


## 安装主题

将 [下载](https://github.com/lh1me/hexo-theme-aomori/releases) 的 ZIP 包解压放置到 Hexo 主题目录下即可

## 开始使用

基本使用配置，需要在全局 `_config.yml` 进行以下设置

1. 启用主题

```
theme: hexo-theme-aomori
```

2. 关闭 Hexo 默认 Highlight 代码高亮

```
highlight:
  enable: false
```

---

## 主题可选功能

主题可选配置，需要在全局 `_config.yml` 进行以下设置

#### 头像

``` yml
aomori_logo: /images/avatar.jpg
```

#### 站点标题打字动画

``` yml
aomori_logo_typed_animated: true
```

#### 头部菜单

``` yml
aomori_menu:
  Home: /
  Archives: /archives
```

#### 侧边栏菜单

``` yml
aomori_widgets:
  - toc # 文章导航
  - category  #文章分类
  - tag # 文章标签
  - recent_posts  # 最新文章
  - archive #文章归档
```

#### 知识共享使用许可

``` yml
aomori_copyright: true # or false
```

#### 社交媒体

`icon` 填入 [Boxicons](https://boxicons.com/) Icon Name

`url` 链接地址

``` yml
aomori_social:
  -
    icon: # 图标 name 字段
    type: # 图标 type 字段
    url: # 你的社交媒体链接
  -
    icon:
    type:
    url:
```

#### 百度链接提交

``` yml
aomori_baidu_sitepush: true  # or false
```

#### 百度统计

``` yml
aomori_baidu_analytics: ''
```

#### Google 统计

``` yml
aomori_google_analytics: 'UA-XXXXX-X'
```

#### Google Site Verification

``` yml
aomori_google_site:
  enable: true
  id: XXX
```

#### 不蒜子 统计

由 [不蒜子](https://busuanzi.ibruce.info/) 提供的计数服务

``` yml
aomori_busuanzi: true
```

---

## 文章可选功能

配置文件：文章 Front-matter

#### 封面图片

使用 `相对路径`，参照 [资源文件夹](https://hexo.io/zh-cn/docs/asset-folders)

``` yml
cover: xxx.jpg
```

#### 封面视频

使用 `完整链接`，便于使用 CDN

每篇文章只能有一个封面视频，并且封面图片和封面视频只能同时存在其中一个

``` yml
video:
  src: src # 完整视频链接
  poster: poster # 完整视频封面图链接
```

#### 文字头部图片

可配多张，使用 `相对路径 `，参照 [资源文件夹](https://hexo.io/zh-cn/docs/asset-folders)

``` yml
photos:
- xxx.jpg
- xxx.jpg
```

#### 转载链接

可配多条

`url` 跳转链接 / `title` 显示标题

``` yml
link_reprint:
  -
    url: url
    title: title
  -
    url: url
    title: title
```

配置后文章列表将会显示徽章提示。

#### 参考链接

可配多条

`url` 跳转链接 / `title` 显示标题

``` yml
link_refer:
  -
    url: url
    title: title
  -
    url: url
    title: title
```

#### 置顶

在 Hexo 目录下安装依赖

```
npm i hexo-generator-index -S
```

在文章 Front-matter 增加选项

```
sticky: 100
```

更多使用方法 [点击查看](https://github.com/hexojs/hexo-generator-index)。

配置后文章列表将会显示徽章提示。

#### Video

我们对文章内容里面的视频做了优化处理，你只需要在写文章的时候直接使用 HTML 的 Video 标签 `<video src="xxx"/>` 即可。

---

## 页面可选功能

配置文件：页面头部

#### 隐藏侧边栏

```
sidebar: false
```

---

## 文章可选风格

配置文件：文章头部

#### Tweet

``` yml
layout: tweet
```

---

## 文章评论

配置文件：全站 `_config.yml`

#### Disqus

填入 Disqus ID

``` yml
aomori_disqus_shortname: ''
```

#### DisqusJS

使用 DisqusJS 搭配 Disqus API 在中国大陆访问会更加友好

配置详情参照 [https://github.com/SukkaW/DisqusJS](https://github.com/SukkaW/DisqusJS)

``` yml
aomori_disqusjs:
  enable: true
  shortname: ""
  siteName: ""
  api: ""
  apikey: ""
  nesting: 4
  nocomment: "这里冷冷清清的，一条评论都没有"
  admin: ""
  adminLabel: ""
```

#### Gitalk

配置详情参照 [https://github.com/gitalk/gitalk](https://github.com/gitalk/gitalk)

``` yml
aomori_gitalk:
  enable: true
  clientID: GitHub Application Client ID
  clientSecret: GitHub Application Client Secret
  repo: GitHub repo
  owner: GitHub repo owner
  admin: 
    - GitHub repo owner and collaborators
    - GitHub repo owner and collaborators
  distractionFreeMode: true // Facebook-like distraction free mode
```

#### Valine

配置详情参照 [https://valine.js.org/](https://valine.js.org/)

``` yml
aomori_valine:
  enable: true
  appId: ''
  appKey: ''
```

#### Remark42

配置详情参照 [https://github.com/umputun/remark42](https://github.com/umputun/remark42)

``` yml
aomori_remark42:
  enable: true
  host: ''
  site_id: ''
  max_shown_comments: 10
  theme: "light"
  locale: "en"
  show_email_subscription: false
```

---

## 页面

#### 默认页面

1. 首先创建页面

```
hexo new page xxx
```

2. 前往 `source/xxx/index.md`，文件，设置 `Front-matter`

```
title:
comment: true # or false
```

设置 `comment` 为 `true` 会打开页面的评论功能

#### 友情链接页面

1. 首先创建页面

```
hexo new page friends
```

2. 前往 `source/friends/index.md` 文件，设置 `Front-matter`

```
title: 友情链接 # 文章标题
layout: friends
comment: true # 是否需要评论 true: 是 false: 否
```

3. 创建数据，参照 [数据文件夹](https://hexo.io/zh-cn/docs/data-files)

4. 创建 `source/_data/friends.json`，格式如下

```
[
  {
    "name": "test1",
    "url": "https://linhong.me"
  },
  {
    "name": "test2",
    "url": "https://linhong.me"
  }
  ...
]
```

#### 摄影/图像作品展示

1. 首先创建页面

```
hexo new page photography
```

2. 前往 `source/photography/index.md` 文件，设置 `Front-matter`

```
title: 我的摄影 # 文章标题
layout: photography
sidebar: false
```

3. 创建数据，参照 [数据文件夹](https://hexo.io/zh-cn/docs/data-files)

4. 创建 `source/_data/photography.json`，格式如下

```
[
    {
        "photo": "https://xxx.jpg",
        "title": "This is title.",
        "icon": {
            "name": "unsplash",
            "type": "logo",
            "url": "https://linhong.me"
        },
        "place": "China"
    },
    {
        "photo": "https://xxx.jpg",
        "title": "This is title.",
        "icon": {
            "name": "unsplash",
            "type": "logo",
            "url": "https://linhong.me"
        },
        "place": "China"
    },
    ...
]
```

`icon` 字段参数基于 [Boxicons](https://boxicons.com/)

---

## 搜索

#### Algolia

1. 注册 [Algolia](https://www.algolia.com/) 账号，并创建 Index

2. 安装 [hexo-algolia](https://github.com/oncletom/hexo-algolia)

```
npm install --save hexo-algolia
```

3. 在站点 `_config.yml` 填入 Algolia 配置

```
algolia:
    applicationID: 'applicationID'
    apiKey: 'apiKey' # Search-Only API Key
    indexName: '...'
```

配置在 Algolia > API Keys 可以找到

4. 运行下面的命令更新数据

```
$ export HEXO_ALGOLIA_INDEXING_KEY=Admin API Key # Use Git Bash
# set HEXO_ALGOLIA_INDEXING_KEY=Admin API Key # Use Windows command line
$ hexo clean
$ hexo algolia
```

注意，以后发新文章后都需要运行 `hexo algolia` 更新搜索数据

4. 在站点 `_config.yml` 打开搜索功能

```
aomori_search_algolia: true
```

Enjoy.

---

# Copyright & License

Copyright (c) 2020 LIN HONG - Released under the [MIT license](LICENSE).

# Thanks

[OMNCLOUD.COM](https://omncloud.com/store) 为我们提供了优质的 VPS 服务