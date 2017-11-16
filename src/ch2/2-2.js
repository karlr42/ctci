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

var getKthFromLastTwoPtrs = function(list, k){
	/*
		run two pointers, one that is k behind
		the other. Once the first has reached the end,
		the second one is pointing at the result.
	*/
	var head = list, behind = list;
	while(head != null){
		head = head.next;
		if(k >= 0){ //give head a k 'headstart'
			k--;
		}else{
			behind = behind.next;
		}
	}
	return behind.val;
}

module.exports = {getKthFromLast};