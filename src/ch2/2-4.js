var linkedList = require("./linkedList.js");

let partitionLL = function(list, partition){
	var lessList = null;
	var moreList = null;
	var mergeNode = null; // keep track of tail of lessList
	var node = list;
	while(node != null){
		if(node.val >= partition){
			moreList = linkedList.createNode(node.val, moreList);
		}else{
			lessList = linkedList.createNode(node.val, lessList);
			if(mergeNode == null) mergeNode = lessList;
		}
		node = node.next;
	}
	if(mergeNode == null){
		return moreList;
	}else{
		mergeNode.next = moreList;
		return lessList;
	}
};

module.exports = {partitionLL};