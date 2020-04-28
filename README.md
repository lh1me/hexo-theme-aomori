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

一款外表简约但内心华丽的 Hexo 主题。

（想到什么功能就做什么，更新完全看心情。欢迎 PR

## Demo

[https://linhong.me](https://linhong.me)


## 安装主题

将 [下载](https://github.com/lh1me/hexo-theme-aomori/releases) 的 ZIP 包解压放置到 Hexo 主题目录下即可

## 开始使用

基本使用配置，需要在 `Hexo config.yml` 进行以下设置

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

配置文件目录 `themes/主题文件夹名/_config.yml`

### 头像

``` yml
logo: /images/avatar.jpg
```

### 头部菜单

``` yml
menu:
  Home: /
  Archives: /archives
```

### 语言包

``` yml
language: cn
```

### 文章内容导航 TOC

``` yml
widgets:
  - toc
```

### 知识共享使用许可

``` yml
copyright: true # or false
```

### 社交媒体

支持显示以下社交媒体

``` yml
social:
  facebook: '/'
  twitter: '/'
  weibo: '/'
  dribbble: '/'
  instagram: '/'
  github: '/'
```

### Disqus 评论

填入 Disqus ID

``` yml
disqus_shortname: ''
```

### 百度链接提交

``` yml
baidu_sitepush: true  # or false
```

### 百度统计

``` yml
baidu_analytics: ''
```

### Google 统计

``` yml
google_analytics: 'UA-XXXXX-X'
```

---

## 文章可选功能

配置在文章 Markdown 文件

### 封面图片

可配多张

``` yml
cover: xxx.jpg
```

### 文字头部图片

可配多张

``` yml
photos:
- xxx.jpg
- xxx.jpg
```

### 转载链接

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

### 参考链接

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

---

## More

主题仍会更新维护，有好的想法可以评论留言

文档暂时不完善，有空后续完善

# Copyright & License

Copyright (c) 2019 LIN HONG - Released under the [MIT license](LICENSE).