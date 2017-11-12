var isUnique = function(str){
	var map = {};
	for(var c of str.split("")){
		if(map[c]) return false;
		map[c] = true;
	}
	return true;
};

var isUniqueNoAdditionalStructures = function(str){
	// if we sort, then we just check adjacent elements
	var chars = str.split("").sort();
	for(var i = chars.length-1; i > 0; i--){
		if(chars[i] == chars[i-1]) return false;
	}
	return true;
};

/*
	another way with no additional structure would be to 
	do the O(n^2) thing of 'for each char, look at every
	other char'
*/

module.exports = {isUnique, isUniqueNoAdditionalStructures};