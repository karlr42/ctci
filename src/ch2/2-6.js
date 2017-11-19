let isPalindrome = function(list){
	var map = {};
	for(var node = list; node != null; node = node.next){
		var v = node.val;
		if(typeof v == "string"){
			// pre-process string vals
			if(v.match(/[^a-zA-Z]/)){
				continue;
			}else{
				v = v.toLowerCase();
			}
		}
		map[v] = map[v] ? map[v] + 1 : 1;
	}
	// a palindrome can have at most one element with an odd count
	var oddCount = 0;
	for(let charCount of Object.values(map)){
		if(charCount % 2 != 0) oddCount++;
	}
	return oddCount < 2;
};

var isPalindromeStack = function(list){
	/*
		two pointers- one normal, one twice as fast 
		first one pushes to a stack as it proceeds
		when second reaches the end, first is at the middle
		then first keeps going and pops off stack to compare

		has good performance- O(n/2) + however long to reach
		first difference, so O(n) at the worst.
		but - this can't be easily modified for linked lists that
		are strings with punctuation etc. that you need to
		skip for comparisons, so that's a reason to prefer the other approach.
		You could pre-process the list first.
	*/
	var stack = [];
	for(var node = list, runner = list; runner != null && runner.next != null; 
			node = node.next, runner = runner.next.next){
		stack.push(node.val);
	}
	if(runner != null){
		// ll has odd length, because we skipped to null with a jump of 2
		node = node.next;
	}
	for(; node != null; node = node.next){
		var a = node.val;
		var b = stack.pop();
		if(a !== b) return false;
	}
	return true;
};

module.exports = {isPalindrome, isPalindromeStack};