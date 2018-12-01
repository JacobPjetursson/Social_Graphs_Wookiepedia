---
title: "Communities"
bg: blue
color: white
icon: img/icons/community.png
---

#### Basically

# this theme rocks.

<div id="example-table-theme"></div>
<br>

<h2> Wordclouds </h2>
<!-- Tab links -->
<div class="tab">
  <button class="tablink" onclick="openImg(event, 'IV')" id="defaultOpen">Episode IV</button>
  <button class="tablink" onclick="openImg(event, 'V')">Episode V</button>
  <button class="tablink" onclick="openImg(event, 'VI')">Episode VI</button>
</div>

<!-- Tab content -->
<div id="IV" class="tabcontent">
  <img src="img/word_cloud_iv.png" alt="Word cloud for episode iv" style="height:500px">
</div>

<div id="V" class="tabcontent">
  <img src="img/word_cloud_v.png" class="two" alt="Word cloud for episode v" style="height:500px">
</div>

<div id="VI" class="tabcontent">
  <img src="img/word_cloud_vi.png" alt="Word cloud for episode vi" style="height:500px">
</div>

<script src="table.js"></script>
<script src="tabs.js"></script>

Got some *killer app*, some *neat project*, a cool portfolio? Make an easy single-page site to show it all off. SinglePaged uses jekyll niceties to make a ***polished, modular, and beautiful* single page site**.

Oh-- go see [some examples](https://github.com/t413/SinglePaged#fancy-jekyll-powered-single-page-site)!

- Each vertical section is a markdown file in **_posts/** directory.
  * They're sorted by 'date'. (we don't use date anywhere, it only sorts)
- Each vertical section sets it's own **color**, **header icon** (or image), **title**, and easy-to-write markdown body.
- Only **two things** to edit:
  1. Edit `_config.yml` to set the site title, description, etc
  2. Add `_posts/*.md` to make each vertical section. Copy some examples and add the sections from your README.md for a fast start!
- Easy adding of **SEO terms**, **favicon** & such, and **google analytics token**.

Sound good? Let's go!

There are three way to get started: (links jump to that section)

1. Make a [**user homepage**](#setup-as-user-homepage) (or organization)
2. Make a [**standalone project**](#setup-as-standalone-project-page) page
3. Make a [site under an **existing project**](#setup-inside-existing-project)
