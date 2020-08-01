<a href="https://github.com/lh1me/hexo-theme-aomori/releases">
  <img src="https://github.com/lh1me/hexo-theme-aomori/workflows/Action/badge.svg" alt="Action" />
</a>
<a href="https://github.com/lh1me/hexo-theme-aomori/releases">
  <img src="https://img.shields.io/github/release/lh1me/hexo-theme-aomori.svg" alt="Release" />
</a>
<a href="https://github.com/lh1me/hexo-theme-aomori/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/lh1me/hexo-theme-aomori.svg" alt="license" />
</a>
<br/><br/>

![image](https://raw.githubusercontent.com/lh1me/hexo-theme-aomori/master/docs/cover.jpg)

# Aomori

A Simple Hexo Theme.

[中文文档](/README_CN.md)

## Demo

[https://linhong.me](https://linhong.me)


## Install

[Download](https://github.com/lh1me/hexo-theme-aomori/releases), unzip and place it under the Hexo theme directory

## Using

Basic configuration in the Global `_config.yml`

1. Enable Theme

```
theme: hexo-theme-aomori
```

2. Turn off Hexo default Highlight

```
highlight:
  enable: false
```

---

## Theme Features

Configuration in the Global `_config.yml`

#### Avatar

``` yml
aomori_logo: /images/avatar.jpg
```

#### Navigation Menu

``` yml
aomori_menu:
  Home: /
  Archives: /archives
```

#### Sidebar Menu

``` yml
aomori_widgets:
  - toc # Article navigation
  - category  # Article classification
  - tag # Article tags
  - recent_posts  # latest articles
  - archive # Article Archive
```

#### Creative Commons License

``` yml
aomori_copyright: true # or false
```

#### Social Media

`icon` [Boxicons](https://boxicons.com/) Icon Name

`url` Link address

``` yml
aomori_social:
  -
    icon:
    url:
  -
    icon:
    url:
```

#### Baidu Submission

``` yml
aomori_baidu_sitepush: true  # or false
```

#### Baidu Analytics

``` yml
aomori_baidu_analytics: ''
```

#### Google Analytics

``` yml
aomori_google_analytics: 'UA-XXXXX-X'
```

#### Busuanzi Count

Counting service provided by [Busuanzi](https://busuanzi.ibruce.info/)

``` yml
aomori_busuanzi: true
```

---

## Article Features

Configuration in the `Front-matter`

#### Cover Image

Use `Relative Path`, refer to resource folder [Resource Folder](https://hexo.io/zh-cn/docs/asset-folders)

``` yml
cover: xxx.jpg
```

#### Article Header Image

Use `Relative Path`, refer to resource folder [Resource Folder](https://hexo.io/zh-cn/docs/asset-folders)

``` yml
photos:
- xxx.jpg
- xxx.jpg
```

#### Reprint Link

``` yml
link_reprint:
  -
    url: url
    title: title
  -
    url: url
    title: title
```

#### Reference Link

``` yml
link_refer:
  -
    url: url
    title: title
  -
    url: url
    title: title
```

---


## Article Style

Configuration in the `Front-matter`

#### Tweet

``` yml
layout: tweet
```

---

## Comment

Configuration in the Global `_config.yml`

#### Disqus

Input Disqus ID

``` yml
aomori_disqus_shortname: ''
```

#### Gitalk

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

---

## Page

#### Friends Links

First create the page,

```
hexo new page friends
```

Go to `source/friends/index.md`，Set up `Front-matter`

```
title:
layout: friends
comment: true # or false
```

Create data, refer to [Data Files](https://hexo.io/zh-cn/docs/data-files)

Create `source/_data/friends.json`，The format is as follows

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

---

# Copyright & License

Copyright (c) 2020 LIN HONG - Released under the [MIT license](LICENSE).