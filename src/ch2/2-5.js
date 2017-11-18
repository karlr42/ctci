var linkedList = require("./linkedList.js");

let sumLists = function(aList,bList){
	var a = aList, b = bList, res = null;
	var carry = 0;
	while(a != null || b != null){
		var r = (a ? a.val: 0) + (b ? b.val: 0) + carry;
		carry = r > 9 ? 1 : 0;
		r = r % 10;
		res = linkedList.createNode(r,res);
		a = a ? a.next : null, b = b ? b.next : null;
	}
	if(carry) res = linkedList.createNode(1,res);
	return res;
};

module.exports = {sumLists};