let isPalindrome = function(list){
	var map = {};
	var node = list;
	while(node != null){
		var v = node.val;
		if(!v.match(/[^a-zA-Z]/)){ 
			// case-insenstive, ignore non-alpha
			v = v.toLowerCase();
			map[v] = map[v] ? map[v] + 1 : 1;
		}
		node = node.next;
	}
	// a palindrome can have at most one character with an even count
	var oddCount = 0;
	for(let charCount of Object.values(map)){
		if(charCount % 2 != 0) oddCount++;
	}
	return oddCount < 2;
};

module.exports = {isPalindrome};