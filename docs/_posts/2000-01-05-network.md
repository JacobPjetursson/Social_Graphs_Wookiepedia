---
title: "Networks"
bg: '#63BD2F'
color: white
icon: img/icons/jedi.png
---

<h2> Networks </h2>
<!-- Tab links -->
<div class="tab">
  <button class="tablink" onclick="openImg(event, 'degree')">Degree</button>
  <button class="tablink" onclick="openImg(event, 'between')">Betweenness</button>
  <button class="tablink" onclick="openImg(event, 'eigen')">Eigenvector</button>
</div>

<div id="degree" class="tabcontent">
  <img src="img/graph.png" alt="Graph with node size by degree centrality" height="2000px" width="2000px">
</div>

<div id="between" class="tabcontent">
  <img src="img/between.png" alt="Graph with node size by betweenness centrality" height="2000px" width="2000px">
</div>

<div id="eigen" class="tabcontent">
  <img src="img/eigen.png" alt="Graph with node size by eigenvector centrality" height="2000px" width="2000px">
</div>



{% highlight text linenos=table %}
---
title: "home"
bg: white     #defined in _config.yml, can use html color like '#010101'
color: black  #text color
style: center
---

# Example headline!
and so on..
{% endhighlight %}
