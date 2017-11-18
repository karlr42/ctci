var app = require("./2-3.js");
var linkedList = require("./linkedList.js");


for (let fName in app) {
	let func = app[fName];

	describe("2-3 "+fName, function() {
		[
			{
				list : ["a","b","c","d","e","f"],
				val : "c",
				res : ["a","b","d","e","f"]
			},
			{
				list : [3,6,7,42,7,78,14,2,7],
				val : 2,
				res : [3,6,7,42,7,78,14,7]
			}
		].forEach(arg => {
			it("removes middle element", function() {
				var ll = linkedList.arrayToLinkedList(arg.list), node = ll;
				while(node.val != arg.val) node = node.next;
				func(node);
				assert.deepEqual(arg.res, linkedList.linkedListToArray(ll));
			});
		});

	});
}

