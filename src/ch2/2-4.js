var linkedList = require("./linkedList.js");

let partitionLL = function(list, partition){
	var lessList = null;
	var moreList = null;
	var node = list;
	while(node != null){
		if(node.val >= partition){
			moreList = linkedList.createNode(node.val, moreList);
		}else{
			lessList = linkedList.createNode(node.val, lessList);
		}
		node = node.next;
	}
	// undoubtedly there is a better way to merge than this..
	node = lessList;
	if(node == null) return moreList;
	while(node.next != null) node = node.next;
	node.next = moreList;
	return lessList;
};

module.exports = {partitionLL};