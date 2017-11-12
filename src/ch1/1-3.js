var urlifyInPlace = function(str, len){
	var numSpaces = Math.floor((str.length - len) / 2);
	str = str.split("");
	for(var i = len-1, j = str.length-1; numSpaces > 0; i--){
		if(!str[i] || !str[j]) break;
		if(str[i] !== " "){
			// swap
			str[j] = str[i];
			str[i] = " "; // or temp
			j--;
		}else{
			// when we hit a space, there should be enough room
			str[j]   = "0";
			str[j-1] = "2";
			str[j-2] = "%";
			numSpaces--;
			j -= 3;
		}
	}
	return str.join("");
};

var urlifyRegex = function(str, len){
	return str.substr(0,len).replace(/\s/g, "%20");
};

module.exports = {urlifyInPlace, urlifyRegex};