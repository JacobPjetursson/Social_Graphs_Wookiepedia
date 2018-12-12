---
title: "Sentiment"
bg: orange
color: black
icon: img/icons/sentiment.png
---

<h1></h1>
Sentment analysis enables us to extract "hidden" information and meaning from dialog and movie scripts. 

## Sentiment across the movie scripts
Through sentiment analysis on the movie scripts we are able to build a storyline (shown below) which shows us that the sentiment alone does not correlated fully with the storyarc. However, we see that every middle movie (the second of each triology) is substantially more positive than the others, seems like Disney is looking to give us a less uplifting nine'th installment of the series.
<img src="img/sentiment_series.png" alt="Word cloud for episode vi" style="width:100%">

## How well does the script and dialog fit together?
Through sentiment analysis, we are able to somewhat compare the story of the dialog with the story of the script. As seen below, the movie-scripts are a bit more negative than the dialog, this does most likely come down to characters dying as screaming is not a part of the dialog. Furthermore, the scripts is more dileberate in fighting scenes, where people tend to talk less than they fight.
<img src="img/sentiment_across_movies.png" alt="Word cloud for episode vi" style="width:100%">


<h3> Who have the most lines?</h3>
Who is actually talking the most in the movies. Do we have long speeches from the evil main-characters or what?
From the distributions shown below, it is clear that we are on the side of the rebellion following Luke and Han. Besides this, we quickly see that C3PO(Threepio) is talking a lot more than we remember. 
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
Through the use of sentiment analysis we can take a look at individual characters and see how they evolve through episode IV to VI. As seen from below, we can almost see how Vader turns to the light throughout the series, similar we can see that Obi-Wan (Ben) becomes more positive after his death.
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
How positive is the individual characthers based on the words they say. By looking at the lines of the individual characthers we can order and derive who the most positive charachters are.
Quite funny, from Episode V we see that creature is one of the most positive charachters, this is Yoda before Luke knows who he is. When Yoda is recognized his lines becomes more negative.

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
How is the different characthers spoken of. Here we take a look of the sentiment of the lines mentioning charachters. From episode V we see that a Imperial Captain is the person that is spoken most positively about. A reason to some of this comes down to the fact that people speaks pretty formal and positive to a high ranking officer. 
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


