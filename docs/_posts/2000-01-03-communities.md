---
title: "Communities"
bg: blue
color: white
icon: img/icons/community.png
---

# Communities

Community detection algorithms attempt to find groups of nodes in a network that link to each other more than to others. This gives rise to some interesting questions. What will these detected communities contain? Will they be split up with characters from different movies, families, affiliations or race? Or maybe something entirely different?

We have run the *Louvain community detection algorithm*, and came up with 9 different communities in total. Yet again we present a dynamic visualization of the communities below, with the colors being the different communities.

The size of the nodes are set to the cubic root of their degree to make it easier to see the various communities.
<div class="viscom">Network Graph</div>
<br>

The community detection algorithm mostly found the communities based on which movies or family the characters belong to. The largest community, which has the color blue, seem to be made up mostly by characters from the first 3 episodes, as well as from the animated series "The Clone Wars", although there is a few exceptions. 

The second largest community (pink) mostly contains characters from the episodes 4-8. The third largest community (yellow) contains characters like Anakin, Jabba and Boba Fett. What seems to be in common here is the connections to the planet of Tatooine, which is where Jabba has his gangster empire and Anakin is native too. The fourth community (light-green) mostly contains characters from the animated series "Rebels".

The fifth community (red) contains characters which are part of the main cast of the "Rogue One" movie. The sixth community (dark-green) is a bit harder to place. It contains the "Lars" family along with other characters local to the "Tatooine" planet, but also has some droids mixed into it, such as R2D2 and C-3PO.

The seventh community (purple) captures the Naberrie family. The eigth community (turqoise) consists of Dapp and his two employees and the ninth and final community with the fewest (white) captures the Panzoro family.

Feel free to check this out yourself by going back to the <a href="#example-table">interactive table</a> from previously