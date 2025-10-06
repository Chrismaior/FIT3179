var vg_1 = "chloropleth.vg.json";
vegaEmbed("#world_map", vg_1).then(function(result) {

}).catch(console.error);

vegaEmbed('#treemap', 'treeMap.vg.json', {actions:false}).catch(console.error);

var vg_2 = "interactive_line_chart.vg.json";
vegaEmbed("#homi_line_chart", vg_2).then(function(result) {

}).catch(console.error);