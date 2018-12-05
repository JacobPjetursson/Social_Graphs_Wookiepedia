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

