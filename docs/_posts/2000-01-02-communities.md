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
  <img src="img/word_cloud_iv.png" alt="Word cloud for episode iv" style="width: 80%">
</div>

<div id="V" class="tabcontent">
  <img src="img/word_cloud_v.png" class="two" alt="Word cloud for episode v" style="width: 80%">
</div>

<div id="VI" class="tabcontent">
  <img src="img/word_cloud_vi.png" alt="Word cloud for episode vi" style="width: 80%">
</div>

<script src="table.js"></script>
<script src="tabs.js"></script>