---
title: "Word Clouds"
bg: red
color: white
fa-icon: cloud
---

<h2> Wordclouds </h2>
To get a grasp of the most important words and terms in the star wars universe, we analyse the original triology (Episode IV - VI) using TF-IDF to find the words that are most significant for the individual movies.

<h4>Wordcloud for...</h4>
<div class="tab">
  <button class="tablink cloud" onclick="openImg(event, 'IV', 'cloud')" id="defaultCloud">Episode IV</button>
  <button class="tablink cloud" onclick="openImg(event, 'V', 'cloud')">Episode V</button>
  <button class="tablink cloud" onclick="openImg(event, 'VI', 'cloud')">Episode VI</button>
</div>

<!-- Tab content -->
<div id="IV" class="tabcontent cloud">
  <img src="img/word_cloud_iv.png" alt="Word cloud for episode iv" style="width: 80%">
</div>

<div id="V" class="tabcontent cloud">
  <img src="img/word_cloud_v.png" class="two" alt="Word cloud for episode v" style="width: 80%">
</div>

<div id="VI" class="tabcontent cloud">
  <img src="img/word_cloud_vi.png" alt="Word cloud for episode vi" style="width: 80%">
</div>