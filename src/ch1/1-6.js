var compressString = function(str){
	var compressed = [];
	var lastChar = null;
	var count = 0;
	for(let c of str){
		if(lastChar != c){
			if(count > 0){
				compressed.push(count+"");
				count = 0;
			}
			compressed.push(c);
			lastChar = c;
		}
		count++;
	}
	if(count > 0){
		compressed.push(count+"");
	}
	return str.length < compressed.length ? str : compressed.join("");
};

module.exports = {compressString};