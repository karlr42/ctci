let intersection = function(l1,l2){
	/*
		look at last element of both - if they match,
		there _is_ an intersection. Its position can
		be found by comparing lengths.
	*/
	for(var aLen = 0, a = l1; a.next != null; a = a.next, aLen++){}
	for(var bLen = 0, b = l2; b.next != null; b = b.next, bLen++){}

	if(a === b){
		/*
			there is an intersection - use the diff in length to
			truncate the longer list and get two lists of same 
			length. Then just iterate pointers together until
			they intersect.
		*/
		var target;
		var shorter, longer;
		if(bLen > aLen){
			target = bLen - aLen;
			longer = advanceByCount(l2,target);
			shorter = l1;
		}else{
			target = aLen - bLen;
			longer = advanceByCount(l1,target);
			shorter = l2;
		}
		// advance in sequence until intersection point
		for(; longer != null && shorter != null; longer = longer.next, shorter = shorter.next){
			if(longer === shorter) return longer;
		}
	}
	return null;
};

let advanceByCount = function(list, count){
	var node = list;
	while(node != null && count > 0){
		node = node.next;
		count--;
	}
	return node;
};

module.exports = {intersection};