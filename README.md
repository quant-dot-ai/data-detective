# Astro-Portfolio

Simple portfolio made in `Astro` and `Solidjs`

[Portfolio link](https://pritesh-singh.netlify.app)

<img src="https://imgur.com/egcbBwc.png" width="80%" />

## Features

- [x] SSG
- [x] Responsive
- [x] Sitemap
- [x] Good lighthouse Score
- [x] Blog RSS feed
- [x] Work projects page
- [x] `Now` page ([What's that?](https://nownownow.com/about))
- [ ] Blog pagination
- [ ] dynamic OG image preview for blog posts
- [x] Smooth page transition (this might not work since it use browser API) 

In order to disable a pages you need to prefix the file name with an `_` (e.g.: `about.astro` -> `_about.astro`)

## Structure

```
/
├── public/
│   ├── fonts/
│   ├── favicon.ico
│   ├── logo.svg
│   └── robots.txt
├── src/
│   ├── components/
│   ├── content/
│   │   |  blog/ (TBA)
│   │   |    └── some-blog-posts.md (TBA)
│   │   └── config.ts
│   ├── layouts/
│   └── pages/
│   └── utils/
│   └── config.ts
└── config.ts // you can set all social links, email and other info here
└── package.json
```


## Author

- Pritesh Singh


###### Inspired by [Gianmarco](https://github.com/Ladvace)
