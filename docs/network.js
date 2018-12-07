var container = document.querySelector('.vis');

var nodes = new vis.DataSet();
var edges = new vis.DataSet();
$.getJSON( "network_nodes.json", function( json ) {
  nodes.add(json);
});
  $.getJSON( "network_edges.json", function( json ) {
    edges.add(json);
});

var data = {
    nodes: nodes,
    edges: edges
};

var options = {
  layout: {
    improvedLayout:true
  },
  physics: false,
  nodes: {
    shape: 'circle',
    scaling: {
      label: {
        enabled: true,
        drawThreshold: 5
      }
    }, 
  },
  edges: {
    width: 1
  },
  interaction: {
    dragNodes: false,
  }
}; 

  network = new vis.Network(container, data, options);
  network.stabilize(2000);
  //network.on('click',(obj)=>{document.querySelector('.report').innerHTML =obj.nodes[0]})

