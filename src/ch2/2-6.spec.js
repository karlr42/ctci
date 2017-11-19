var app = require("./2-6.js");
var linkedList = require("./linkedList.js");

describe("2-6 isPalindrome",function() {
	[
		["m","a","d","a","m","i","m","a","d","a","m"],
		["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ",
			"c","a","t",","," ","a"," ","c","a","n","a","l",";"," ","P","a","n","a","m","a","!"],
		[0,1,2,1,0],
		[1,2,3,3,2,1],
		[true,false,true,false,true]
	].forEach(arg => {
		it("finds linked list palindromes", function() {
			assert.equal(true,
				app.isPalindrome(linkedList.arrayToLinkedList(arg)));
		});
	});

	[
		["m","a","d","a","m","i","m","n","o","t","a","d","a","m"],
		["A"," ","m","y","n",","," ","a"," ","p","l","a","n",","," ","a"," ",
			"c","a","t",","," ","a"," ","c","a","n","a","l",";"," ","P","a","n","a","m","a","!"],
		[0,1,2,2,3,0],
		[1,2,3,4,2,1],
		[true,false,true,false,true,false]
	].forEach(arg => {
		it("returns false for not linked list palindromes", function() {
			assert.equal(false,
				app.isPalindrome(linkedList.arrayToLinkedList(arg)));
		});
	});
});

describe("2-6 isPalindromeStack",function() {

	[
		["m","a","d","a","m","i","m","a","d","a","m"],
		[0,1,2,1,0],
		[1,2,3,3,2,1],
		[true,false,true,false,true]
	].forEach(arg => {
		it("stack-approach finds linked list palindromes", function() {
			assert.equal(true,
				app.isPalindromeStack(linkedList.arrayToLinkedList(arg)));
		});
	});

	[
		["m","a","d","a","m","i","m","n","o","t","a","d","a","m"],
		[0,1,2,2,3,0],
		[1,2,3,4,2,1],
		[true,false,true,false,true,false]
	].forEach(arg => {
		it("stack-approach returns false for not linked list palindromes", function() {
			assert.equal(false,
				app.isPalindromeStack(linkedList.arrayToLinkedList(arg)));
		});
	});
});