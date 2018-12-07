---
title: "Word Clouds"
bg: red
color: white
fa-icon: cloud
---

<h2> Wordclouds </h2>
<!-- Tab links -->
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