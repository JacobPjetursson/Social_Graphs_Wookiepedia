var goodCont = document.querySelector('.visgood');
var comCont = document.querySelector('.viscom');

var nodes = new vis.DataSet();
var com_nodes = new vis.DataSet();
var edges = new vis.DataSet();
var deg_nodes = [];
var eig_nodes = [];
var btw_nodes = [];
$.getJSON( "network_nodes_deg.json", function( json ) {
  deg_nodes = json;
  nodes.add(deg_nodes);
});
$.getJSON( "network_nodes_eig.json", function( json ) {
  eig_nodes = json;
});
$.getJSON( "network_nodes_btw.json", function( json ) {
  btw_nodes = json;
});

$.getJSON( "network_nodes_com.json", function( json ) {
  com_nodes.add(json);
});

$.getJSON( "network_edges.json", function( json ) {
  edges.add(json);
});

var goodData = {
    nodes: nodes,
    edges: edges
};

var comData = {
    nodes: com_nodes,
    edges: edges
};

var options = {
  layout: {
    improvedLayout:true
  },

  physics: false,
  nodes: {
    borderWidth: 1,
    shape: 'circle',
    scaling: {
      label: {
        enabled: true
      }
    },
    font: {
      color: '#000000'
    },
    color: {
      border: '#000000'
    }
  },
  edges: {
    width: 1,
    color: {
      color: '#000000',
      opacity: 0.2
    }
  },
  interaction: {
    dragNodes: false,
  },
  groups:{
    "1":{
      color:{
        background:'#0000FF'
      }
    }, 
    "2":{
      color:{
        background:'#FDEE00'
      }
    },
    "3":{
      color:{
        background:'#50FF50'
      }
    },
    "4":{
      color:{
        background:'#FFB6C1'
      }
    },
    "5":{
      color:{
        background:'#FF0000'
      }
    },
    "6":{
      color:{
        background:'#006400'
      }
    },
    "7":{
      color:{
        background:'#551A8B'
      }
    },
    "8":{
      color:{
        background:'#00CCCC'
      }
    },
    "9":{
      color:{
        background:'#7EC0EE'
      }
    },
  }
}; 

network = new vis.Network(goodCont, goodData, options);
network = new vis.Network(comCont, comData, options);

function sizeby(centrality) {
  if (centrality == "btw") {
    nodes.update(btw_nodes);
  } else if (centrality == "deg") {
    nodes.update(deg_nodes);
  } else if (centrality == "eig") {
    nodes.update(eig_nodes);
  }
}

