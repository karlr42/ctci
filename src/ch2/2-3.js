let deleteMiddleNode = function(list){
	/*
		copy values from next node to curr node,
		which effectively deletes the curr node
		without needing to know anytihng to the
		left.
	*/
	var node = list;
	while(true){
		node.val = node.next.val;
		if(node.next.next != null){
			node = node.next;
		}else{
			node.next = null;
			break;
		}
	}
};

module.exports = {deleteMiddleNode};