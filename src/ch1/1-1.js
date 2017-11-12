var isUnique = function(str){
	var map = {};
	for(var c of str.split("")){
		if(map[c]) return false;
		map[c] = true;
	}
	return true;
};

module.exports = {isUnique};