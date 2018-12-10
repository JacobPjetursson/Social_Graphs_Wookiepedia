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


<h3> Who have the most lines?</h3>
<!-- Tab links -->
<div class="tab">
  <button class="tablink talk" onclick="openImg(event, 'dialog_sentiment_IV', 'talk')" id="defaultTalk">Episode IV</button>
  <button class="tablink talk" onclick="openImg(event, 'dialog_sentiment_V', 'talk')">Episode V</button>
  <button class="tablink talk" onclick="openImg(event, 'dialog_sentiment_VI', 'talk')">Episode VI</button>
</div>

<!-- Tab content -->
<div id="dialog_sentiment_IV" class="tabcontent talk">
  <img src="img/talk_alot_iv.png" alt="Charachter dialog sentiment for episode iv" style="width:100%">
</div>

<div id="dialog_sentiment_V" class="tabcontent talk">
  <img src="img/talk_alot_v.png" class="two" alt="Charachter dialog sentiment  for episode v" style="width:100%">
</div>

<div id="dialog_sentiment_VI" class="tabcontent talk">
  <img src="img/talk_alot_vi.png" alt="Charachter dialog sentiment for episode vi" style="width:100%">
</div>

<script src="table.js"></script>

<h3> Character dialog sentiments </h3>
<div class="tab">
  <button class="tablink dialog" onclick="openImg(event, 'c3po', 'dialog')" id="defaultSentiment">C3PO</button>
  <button class="tablink dialog" onclick="openImg(event, 'ben', 'dialog')">Obi-Wan</button>
  <button class="tablink dialog" onclick="openImg(event, 'vader', 'dialog')">Vader</button>
  <button class="tablink dialog" onclick="openImg(event, 'luke', 'dialog')">Luke</button>
</div>

<!-- Tab content -->
<div id="c3po" class="tabcontent dialog">
  <img src="img/C3PO_sentiment.png" alt="Obi-Wan Kenobi dialog sentiment sentiment" style="width:100%">
</div>

<div id="ben" class="tabcontent dialog">
  <img src="img/BEN_sentiment.png" alt="Obi-Wan Kenobi dialog sentiment sentiment" style="width:100%">
</div>

<div id="vader" class="tabcontent dialog">
  <img src="img/VADER_sentiment.png" alt="Darth Vader dialog sentiment sentiment" style="width:100%">
</div>

<div id="luke" class="tabcontent dialog">
  <img src="img/LUKE_sentiment.png" alt="Luke Skywalker dialog sentiment sentiment" style="width:100%">
</div>

<script src="table.js"></script>



<h3> Sentiment of charachter dialogue </h3>
<div class="tab">
  <button class="tablink sen_dialog" onclick="openImg(event, 'sen_char_iv', 'sen_dialog')" id="defaultSentimentChar">Episode IV</button>
  <button class="tablink sen_dialog" onclick="openImg(event, 'sen_char_v', 'sen_dialog')">Episode V</button>
  <button class="tablink sen_dialog" onclick="openImg(event, 'sen_char_vi', 'sen_dialog')">Episode VI</button>
</div>

<!-- Tab content -->
<div id="sen_char_iv" class="tabcontent sen_dialog">
  <img src="img/sentiment_chars_iv.png" alt="Obi-Wan Kenobi dialog sentiment sentiment" style="width:100%" />
</div>

<div id="sen_char_v" class="tabcontent sen_dialog">
  <img src="img/sentiment_chars_v.png" alt="Obi-Wan Kenobi dialog sentiment sentiment" style="width:100%" />
</div>

<div id="sen_char_vi" class="tabcontent sen_dialog">
  <img src="img/sentiment_chars_vi.png" alt="Darth Vader dialog sentiment sentiment" style="width:100%" />
</div>

<h3> Sentiment of dialogue which mentions characters </h3>
<div class="tab">
  <button class="tablink sen_dialog_1" onclick="openImg(event, 'sen_char_iv_2', 'sen_dialog_1')" id="defaultSentimentChar2">Episode IV</button>
  <button class="tablink sen_dialog_1" onclick="openImg(event, 'sen_char_v_2', 'sen_dialog_1')">Episode V</button>
  <button class="tablink sen_dialog_1" onclick="openImg(event, 'sen_char_vi_2', 'sen_dialog_1')">Episode VI</button>
</div>

<!-- Tab content -->
<div id="sen_char_iv_2" class="tabcontent sen_dialog_1">
  <img src="img/sentiment_names_iv.png" alt="Obi-Wan Kenobi dialog sentiment sentiment" style="width:100%" />
</div>

<div id="sen_char_v_2" class="tabcontent sen_dialog_1">
  <img src="img/sentiment_names_v.png" alt="Obi-Wan Kenobi dialog sentiment sentiment" style="width:100%" />
</div>

<div id="sen_char_vi_2" class="tabcontent sen_dialog_1">
  <img src="img/sentiment_names_vi.png" alt="Darth Vader dialog sentiment sentiment" style="width:100%" />
</div>


