---
title: "Sentiment"
bg: orange
color: black
icon: img/icons/sentiment.png
---

<h1>Sentiment Analysis</h1>

Now it's time to dive into one of the most exciting part of this analysis. A sentiment analysis means determining the _sentiment_ of a text, in other words its level of positivity. We will perform this analysis on the various manuscripts of the movies, as well as the dialog (transcripts). 

## Sentiment across the movies
By performing a sentiment analysis on the movie manuscripts we are able to build a sentiment storyline, which we show below.

<img src="img/sentiment_series.png" alt="Word cloud for episode vi" style="width:100%">

From this graph, we can se ups and downs throughout the series. We would expect episode VI to be a substantial high, ending the series on a high note. This however does not seem to be the case. 

We can see the pattern that every middle movie in the individual trilogies (II, IV and VIII) all have high sentiments, signaling that we should expect a less positive ninth movie in the series.

## How well does sentiment of the manuscript and dialog fit together?
We are able to compare the story of the dialog with the story of the script.

<img src="img/sentiment_across_movies.png" alt="Word cloud for episode vi" style="width:100%">
We can see that the movie manuscripts are a bit more negative than the dialog. This can most likely be explained by characters dying, or characters fighting. In the manuscript, this will be explained, whereas it is often only shown in the movie.

<h3>Who talks the most?</h3>
Which character is the most talkative in star wars? Will it be one of the evil guys, with their constant blabbering of taking over the world, or someone else entirely? Lets take a look.
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
<br>

From the distributions above, it is clear that the viewer is on the side of the rebellion following Luke and Han. We also see that C-3PO is as talkative as we would expect him to be.

<h3> Character dialog sentiments </h3>
We can also perform a sentiment analysis on individual characters and see how they evolve through episode IV to VI.
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
<br>

Studying Darth Vaders sentiment development, we can almost see how he turns to the light throughout the series. We can also see that Obi-Wan (Ben) interestingly becomes more positive after his death in episode IV.

<h3>Sentiment of character dialogue</h3>
How positive is the individual characters based on the words they say in the movies? Is Darth Vader realy as evil as we think? Lets check it out below. 

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
<br>

If we take a look at episode V, we see that *Creature* is one of the most positive characters. *Creature* is in fact Yoda before Luke knows who he is. When Luke learns his real name and starts training under him, Yoda becomes much more negative. Seems like Luke took a toll on his old master.

In episode 4 we see that the graph fits wonderfully with all the good characters having the highest sentiment score. This trend does not fit very well with episode 6, where we actually see the opposite. It seems like the sentiment score is a bad indicator as to how evil or good a person is, since evil characters can still talk positively.

<h3>Sentiment of dialogue where other characters are mentioned</h3>
Instead of analysing the dialogue of each character, we can analyse the dialogue where characters are mentioned, to see if they are talked positively or negatively *about*. This means we will catch all the slander there is, and it might give a hint about the general reputation of a character.
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
<br>
In episode V, we see that Needa (An imperial caption, evil) is the person who is spoken most positively about, with Darth Vader following relatively shortly after. A reason to some of this comes down to the fact that people speaks pretty formally and positively to a high ranking officer. It might also be the case that Vader's evil companions endores him and openly praises him, which would increase his sentiment score. 

Furthermore, it seems Aunt Beru, who raised Luke, has a fantastic reputation in the 4th episode.


 


