var table = new Tabulator("#example-table-theme", {
 	height:450,
 	layout:"fitColumns",
 	responsiveLayout:"hide",
 	columns:[ //Define Table Columns
	 	{title:"Name", field:"name", frozen:true},
	 	{
	 		title: "Network Stats",
	 		columns:[
	 		{title:"In-degree", field:"indegree", sorter:"number"},
	 		{title:"Out-degree", field:"outdegree", sorter:"number"},
	 		{title:"Betweenness centrality", field:"btw_cnt"},
	 		{title:"Eigen centrality", field:"eig_cnt"},
	 		{title:"Community", field:"community"},
	 		],
	 	},
	 	{
	 		title:"Personal Info",
	 		columns:[
	 		{title: "Goodness", field:"goodness", formatter:"progress", formatterParams:{color:["rgb(255,0,0)", 
	 		"rgb(255,64,0)", "rgb(255,128,0)", "rgb(255,192,0)", "rgb(255,255,0)","rgb(191,255,0)", 
	 		"rgb(127,255,0)", "rgb(63,255,0)", "rgb(0,255,0)"]}, sorter:"number"},
	 		{title: "Race", field:"race"},
	 		],
	 	},	 	
 	],
});

//load sample data into the table
// This can be a path to a json file
table.setData("table.json");
table.setSort("indegree", "desc");