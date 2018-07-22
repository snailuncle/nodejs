
// function outputObj(obj) {
// 	var description = "";
// 	for (var i in obj) {
// 		description += i + "\n";
// 	}
// 	log(description);
// }
function outputObj(obj) {
	var description = "";
	for (var i in obj) {
		description += i + " = " + obj[i] + "\n";
	}
	log(description);
}


var d = dialogs.build({
  title: "请选择",
  positive: "确定",
  negative: "取消",
  items: ["A", "B", "C", "D"],
  itemsSelectMode: "single"
})

outputObj(d)
