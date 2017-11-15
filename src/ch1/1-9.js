var isRotation = function(s1, s2){
	/*
		Definition of rotation - divide string 
		into two parts, a and b, and then swap
		them i.e. ab -> ba
		Then, note that : 
		 ab + ab = abab && ba.isSubstr(abab) == true
	*/
	if(s1.length != s2.length) return false;
	return isSubstring(s2, s1+s1);
};

var isSubstring = (a,b) => b.indexOf(a) > -1;

module.exports = {isRotation};