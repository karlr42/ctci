let getKthFromLast = function(list, k){
	/*
		iterate to end to get the length, then 
		iterate again to n-k-1
	*/
	var node = list, len = 0;
	while(node != null){
		node = node.next;
		len++;
	}
	var target = len - k - 1;
	node = list;
	for(var i = 0; i != target; i++){
		node = node.next;
	}
	return node.val;
};

module.exports = {getKthFromLast};