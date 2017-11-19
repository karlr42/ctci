let isPalindromeOddElemCount = function(list){
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

module.exports = {isPalindromeOddElemCount};