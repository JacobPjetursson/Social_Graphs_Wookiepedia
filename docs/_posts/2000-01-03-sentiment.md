---
title: "Sentiment"
bg: orange
color: black
icon: img/icons/sentiment.png
---

## Sentiment across the movie scripts
<img src="img/sentiment_series.png" alt="Word cloud for episode vi" style="width:100%">

## How well does the script and dialog fit together?
<img src="img/sentiment_across_movies.png" alt="Word cloud for episode vi" style="width:100%">
As seen from the plot above, the mean sentiment of the script and the dialog are quite similar. Furthermore, we see that the median sentiment across the movie dialog, do not very greatly. The main difference in sentiment across the movie-scripts are therefore mainly from the action and not the dialog.


<h3> Character dialog sentiments </h3>
<!-- Tab links -->
<div class="tab">
  <button class="tablink" onclick="openImg(event, 'dialog_sentiment_IV')" id="defaultOpen">Episode IV</button>
  <button class="tablink" onclick="openImg(event, 'dialog_sentiment_V')">Episode V</button>
  <button class="tablink" onclick="openImg(event, 'dialog_sentiment_VI')">Episode VI</button>
</div>

<!-- Tab content -->
<div id="dialog_sentiment_IV" class="tabcontent">
  <img src="img/talk_alot_iv.png" alt="Charachter dialog sentiment for episode iv" style="width:100%">
</div>

<div id="dialog_sentiment_V" class="tabcontent">
  <img src="img/talk_alot_v.png" class="two" alt="Charachter dialog sentiment  for episode v" style="width:100%">
</div>

<div id="dialog_sentiment_VI" class="tabcontent">
  <img src="img/talk_alot_vi.png" alt="Charachter dialog sentiment for episode vi" style="width:100%">
</div>

<script src="table.js"></script>
<script src="tabs.js"></script>

<h3> Character dialog sentiments </h3>
<div class="tab">
  <button class="tablink" onclick="openImg(event, 'c3po')" id="defaultOpen">C3PO</button>
  <button class="tablink" onclick="openImg(event, 'ben')">Obi-Wan</button>
  <button class="tablink" onclick="openImg(event, 'vader')">Vader</button>
  <button class="tablink" onclick="openImg(event, 'luke')">Luke</button>
</div>

<!-- Tab content -->
<div id="c3po" class="tabcontent">
  <img src="img/C3PO_sentiment.png" alt="Obi-Wan Kenobi dialog sentiment sentiment" style="width:100%">
</div>

<div id="ben" class="tabcontent">
  <img src="img/BEN_sentiment.png" alt="Obi-Wan Kenobi dialog sentiment sentiment" style="width:100%">
</div>

<div id="vader" class="tabcontent">
  <img src="img/VADER_sentiment.png" alt="Darth Vader dialog sentiment sentiment" style="width:100%">
</div>

<div id="luke" class="tabcontent">
  <img src="img/LUKE_sentiment.png" alt="Luke Skywalker dialog sentiment sentiment" style="width:100%">
</div>

<script src="table.js"></script>
<script src="tabs.js"></script>



## Setup as user homepage

- Go click **fork** on the [github project page](https://github.com/t413/SinglePaged)
- Rename your new repository to `**username**.github.io`. (click settings in the right column)
- Clone your repository, **cd into the project**
- Run `git checkout publish && git branch -m master && git push -u origin master && git branch -D gh-pages` to get the *publish* branch as master for a clean, empty starting point.
- On your github project page go to *settings* again and change your **default branch** to ***master***
- Run `git push origin --delete gh-pages` to delete your remote's development branch

Now hop over to [Usage](#usage) to get it running with your own stuff!

**When you publish changes use `git push -u origin master`**

-------------------------


## Setup as standalone project page

- Go click **fork** on the [github project page](https://github.com/t413/SinglePaged)
- Rename your new repository to `whatever you want`. (click settings in the right column)
  * It will go live at yourusername.github.io/**WhateverYouWant**
- Clone your repository, cd into the project
- Run `git checkout publish && git branch -D gh-pages && git branch -m gh-pages && git push -uf origin gh-pages` to swap the *publish* and *gh-pages* branch.

Now hop over to [Usage](#usage) to get it running with your own stuff!

**When you publish changes use `git push -u origin gh-pages`**

-------------------------


## Setup inside existing project

This is the most complicated use-case .. but it's the coolest.
Say you've got your kickass project `github.com/t413/kicker` and want to have
some web presence to post about on [hacker news](http://news.ycombinator.com).
This will create an orphan branch called `gh_pages` in your repository
where you can publish changes, posts, images, and such. It won't alter your code at all.

- `cd` into your project on the command line
- use `git remote add -t publish singlepage git@github.com:t413/SinglePaged.git` to get access to this repository.
- use `git fetch singlepage publish:gh-pages` to fetch the remote branch
- use `git branch --set-upstream gh-pages singlepage/publish && git checkout gh-pages;`
  This creates and checks out an orphan branch called gh-pages that tracks the original and lets you make changes.
- When you run `git push gh-pages:origin/gh-pages` it'll be live at *yourusername.github.io/repositoryName*

Now hop over to [Usage](#usage) to get it running with your own stuff!

**When you publish changes use `git push -u origin gh-pages`**

