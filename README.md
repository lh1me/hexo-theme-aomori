
![Release](https://img.shields.io/github/release/lh1me/hexo-theme-aomori.svg)
![NPM version](https://badge.fury.io/js/hexo.svg)
![Required Node version](https://img.shields.io/node/v/hexo)
![Action](https://github.com/lh1me/hexo-theme-aomori/workflows/Action/badge.svg)
![License](https://img.shields.io/github/license/lh1me/hexo-theme-aomori.svg)

<br/>

![image](https://raw.githubusercontent.com/lh1me/hexo-theme-aomori/master/docs/cover.png)

# Aomori

Hexo is a fast, simple, powerful blog framework, with ultra-fast generation speed, support for Markdown, one-click deployment and high scalability. This project is a theme developed based on a series of advantages of Hexo.

- Rich Website Style
- Rich Theme Configuration
- Optimize multimedia playback
- Excellent SEO optimization
- Responsive layout
- Open source and continuously updated
- ...

[中文文档](/README_CN.md) | [CHANGELOG](/CHANGELOG.md)

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

#### Site Title Animated

``` yml
aomori_logo_typed_animated: true
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
    icon: # Boxicons name
    type: # Boxicons type
    url: # Your social link
  -
    icon:
    type:
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

#### Google Site Verification

``` yml
aomori_google_site:
  enable: true
  id: XXX
```

#### Busuanzi Count

Counting service provided by [Busuanzi](https://busuanzi.ibruce.info/)

``` yml
aomori_busuanzi: true
```

---

## Page Features

Configuration in the page's `Front-matter`

#### Hidden Sidebar

```
sidebar: false
```

---

## Article Features

Configuration in the `Front-matter`

#### Cover Image

Use `Relative Path`, refer to resource folder [Resource Folder](https://hexo.io/zh-cn/docs/asset-folders)

``` yml
cover: xxx.jpg
```

#### Cover Video

Use `Full Link` recommend CDN

Each article can only have one cover video, and only one of the cover image and the cover video can exist at the same time.

``` yml
video:
  src: src # Full Video Link
  poster: poster # Full Poster Link
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

This configuration will show the badge on the homepage.

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

#### Top

Install dependencies in the Hexo directory

```
npm i hexo-generator-index -S
```

Add options in the article Front-matter

```
sticky: 100
```

More ways to use [hexo-generator-index](https://github.com/hexojs/hexo-generator-index)

This configuration will show the badge on the homepage.

#### Video

We have optimized the video in the content of the article, you only need to directly use the `HTML Video Tag` like `<video src="xxx"/>` when writing the article.

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

#### DisqusJS

Using DisqusJS with Disqus API to visit in China will be more friendly.

Configuration details [https://github.com/SukkaW/DisqusJS](https://github.com/SukkaW/DisqusJS)

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

Configuration details [https://github.com/gitalk/gitalk](https://github.com/gitalk/gitalk)

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

Configuration details [https://valine.js.org/](https://valine.js.org/)

``` yml
aomori_valine:
  enable: true
  appId: ''
  appKey: ''
```

#### Remark42

Configuration details [https://github.com/umputun/remark42](https://github.com/umputun/remark42)

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

## Page

#### Default Page

1. First create the page,

```
hexo new page xxx
```

2. Go to `source/xxx/index.md`，Set up `Front-matter`

```
title:
comment: true # or false
```

Setting the `comment` to `true` will open the comment plugin of the page

#### Friends Links Page

1. First create the page,

```
hexo new page friends
```

2. Go to `source/friends/index.md`，Set up `Front-matter`

```
title:
layout: friends
comment: true # or false
```

3. Create data, refer to [Data Files](https://hexo.io/zh-cn/docs/data-files)

4. Create `source/_data/friends.json`，The format is as follows

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

#### Photography Page

1. First create the page,

```
hexo new page photography
```

2. Go to `source/photography/index.md`，Set up `Front-matter`

```
title:
layout: photography
sidebar: false
```

3. Create data, refer to [Data Files](https://hexo.io/zh-cn/docs/data-files)

4. Create `source/_data/photography.json`，The format is as follows

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

`icon` field is base on [Boxicons](https://boxicons.com/)

---

## Search

#### Algolia

1. First create [Algolia](https://www.algolia.com/) Account. After registration is complete, create a new Index, which will be used later.

2. Install [hexo-algolia](https://github.com/oncletom/hexo-algolia)

```
npm install --save hexo-algolia
```

3. Configure Algolia integration to site `_config.yml`:

```
algolia:
    applicationID: 'applicationID'
    apiKey: 'apiKey'
    indexName: '...'
```

4. Run the following command to upload Index data.

```
$ export HEXO_ALGOLIA_INDEXING_KEY=High-privilege API key # Use Git Bash
# set HEXO_ALGOLIA_INDEXING_KEY=High-privilege API key # Use Windows command line
$ hexo clean
$ hexo algolia
```

4. Turn on theme configuration at site `_config.yml`

```
aomori_search_algolia: true
```

Enjoy.

---

# Copyright & License

Copyright (c) 2020 LIN HONG - Released under the [MIT license](LICENSE).

# Thanks

[OMNCLOUD.COM](https://omncloud.com/store) Provides an excellent VPS service.