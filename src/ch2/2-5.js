var linkedList = require("./linkedList.js");

let sumLists = function(aList,bList){
	var a = aList, b = bList, res = null;
	var carry = 0;
	while(a != null || b != null){
		var r = (a ? a.val: 0) + (b ? b.val: 0) + carry;
		carry = r > 9 ? 1 : 0;
		r %= 10;
		res = linkedList.createNode(r,res);
		a = a ? a.next : null, b = b ? b.next : null;
	}
	if(carry) res = linkedList.createNode(1,res);
	return res;
};

let sumListsForward = function(a,b){
	// can solve recursively, but need to pad first

	let pad = function(list, n){
		while(n > 0){
			list = linkedList.createNode(0,list);
			n--;
		}
		return list;
	}

	let sumDigit = function(a,b){
		if(a == null && b == null) return {sum : null, carry : 0};
		var lessSigResult = sumDigit(a.next,b.next);
		var r = a.val + b.val + lessSigResult.carry;
		var carry = r > 9 ? 1 : 0;
		r %= 10;
		return {sum : linkedList.createNode(r,lessSigResult.sum), carry : carry};
	};

	var aLen = linkedList.getLength(a);
	var bLen = linkedList.getLength(b);
	if(aLen < bLen){
		a = pad(a, bLen - aLen);
	}else if(bLen < aLen){
		b = pad(b, aLen - bLen);
	}

	var res = sumDigit(a, b);
	if(res.carry){
		res.sum = linkedList.createNode(1,res.sum)
	}
	return res.sum;


};

let sumListsForwardStrParsing = function(aList,bList){
	/*
		Pretty poor string-parsing based solution
	*/
	var a = aList, b = bList, res = null;
	var aStr = "", bStr = "";
	while(a != null || b != null){
		if(a) aStr += a.val;
		if(b) bStr += b.val;
		a = a ? a.next : null, b = b ? b.next : null;
	}
	var r = parseInt(aStr) + parseInt(bStr);
	for(let n of (r+"").split("").reverse()){
		res = linkedList.createNode(n,res);
	}
	return res;
};

module.exports = {sumLists, sumListsForward, sumListsForwardStrParsing};