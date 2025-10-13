var vg_1 = "chloropleth.vg.json";
vegaEmbed("#world_map", vg_1).then(function(result) {

}).catch(console.error);

vegaEmbed('#treemap', 'treeMap.vg.json', {actions:false}).catch(console.error);

var vg_2 = "interactive_line_chart.vg.json";
vegaEmbed("#homi_line_chart", vg_2).then(function(result) {

}).catch(console.error);

var vg_3 = "drug_donut_chart.vg.json";
vegaEmbed("#drug_donut", vg_3).then(function(result) {

}).catch(console.error);

var vg_4 = "homicide_donut_chart.vg.json";
vegaEmbed("#homicide_donut", vg_4).then(function(result) {

}).catch(console.error);

var vg_5 = "economic_donut_chart.vg.json";
vegaEmbed("#economic_donut", vg_5).then(function(result) {

}).catch(console.error);

var vg_6 = "violence_donut_chart.vg.json";
vegaEmbed("#violence_donut", vg_6).then(function(result) {

}).catch(console.error);

var vg_7 = "boxplot.vg.json";
vegaEmbed("#boxplot", vg_7).then(function(result) {

}).catch(console.error);

var vg_8 = "resilience_avg.vg.json";
vegaEmbed("#resilience_bar", vg_8).then(function(result) {

}).catch(console.error);