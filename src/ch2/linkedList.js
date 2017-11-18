let createNode = function(val, next){
	return {
		val : val,
		next : next || null
	};
};

let createLinkedList = function(){
	return {
		head : null,
		tail : null
	};
};

let arrayToLinkedList = function(arr){
	if(!arr || arr.length < 1) return null;
	var list = null;
	for(var i = arr.length-1; i >= 0; i--){
		list = createNode(arr[i], list);
	}

	return list;
};

let linkedListToArray = function(node){
	var arr = [];
	while(node != null){
		arr.push(node.val);
		node = node.next;
	}
	return arr;
};

let getLength = function(list){
	var node = list, len = 0;
	while(node != null){
		len++;
		node = node.next;
	}
	return len;
};

module.exports = {createNode, createLinkedList, arrayToLinkedList, linkedListToArray, getLength};