var isPermutation = function(a, b){
	if(a.length !== b.length) return false;
	return a.split("").sort().join("") == b.split("").sort().join("")
};

var isPermutationHT = function(a, b){
	if(a.length !== b.length) return false;
	var map = {};
	/*
		Build frequency map of chars in a, then 
		compare against b
	*/
	for(var c of a.split("")){
		map[c] = map[c] ? map[c] + 1 : 1;
	}
	for(var c of b.split("")){
		if(map[c] > 0){
			map[c] -= 1;
		}else{
			return false;
		}
	}
	return true;
};

module.exports = {isPermutation, isPermutationHT};