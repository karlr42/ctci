var isPermOfPalindrome = function(str){
	var map = {};
	// get char frequency map
	for(let i = 0 ; i < str.length; i++){
		// skip non alpha characters, and ignore case
		const c = str.charAt(i).toLowerCase();
		if(c.match(/[^a-z]/)) continue;
		map[c] = map[c] ? map[c] + 1 : 1;
	}
	/*
		A permutation must have either even
		numbers of all characters, or even 
		of all and one odd count
	*/
	var oddCount = 0;
	for (const count of Object.values(map)) {
		if(count % 2 != 0) oddCount++;
	}
	return oddCount < 2;
};

module.exports = {isPermOfPalindrome};