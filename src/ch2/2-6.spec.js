var app = require("./2-6.js");
var linkedList = require("./linkedList.js");


for (let fName in app) {
	let func = app[fName];

	describe("2-6 "+fName,function() {
		[
			["m","a","d","a","m","i","m","a","d","a","m"],
			["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ",
				"c","a","t",","," ","a"," ","c","a","n","a","l",";"," ","P","a","n","a","m","a","!"],
			[0,1,2,1,0],
			[true,false,true,false,true]
		].forEach(arg => {
			it("find linked list palindromes", function() {
				assert.equal(true,
					func(linkedList.arrayToLinkedList(arg)));
			});
		});

		[
			["m","a","d","a","m","i","m","n","o","t","a","d","a","m"],
			["A"," ","m","y","n",","," ","a"," ","p","l","a","n",","," ","a"," ",
				"c","a","t",","," ","a"," ","c","a","n","a","l",";"," ","P","a","n","a","m","a","!"],
			[0,1,2,2,3,0],
			[true,false,true,false,true,false]
		].forEach(arg => {
			it("return false for not linked list palindromes", function() {
				assert.equal(false,
					func(linkedList.arrayToLinkedList(arg)));
			});
		});

	});
}

