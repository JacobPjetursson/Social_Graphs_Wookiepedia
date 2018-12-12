---
title: "Word Clouds"
bg: red
color: white
fa-icon: cloud
---

<h2> Wordclouds </h2>
To get a grasp of the most important words and terms in the star wars universe, we analyse the original triology (Episode IV - VI) using TF-IDF to find the words that are most significant for the individual movies. We can then showcase these words using a _word cloud_

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

From the wordclouds we see that names are very heavily represented, which is an indicator of the important characters for the respective movies. We also see that words such as "going" and "come" appears in all 3 of the wordclouds. In the word cloud for episode 5, we see the phrase "yes sir" as one of the big phrases, which is most likely good ol' C3PO talking. The word "going", is mentioned a LOT of times in episode 4, which is why it appears so big in the cloud. In fact, it is said 62 times in Episode 4, but only 41 in episode 5 and 6 combined.