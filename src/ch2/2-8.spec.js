var app = require("./2-8.js");
var linkedList = require("./linkedList.js");


for (let fName in app) {
	let func = app[fName];

	describe("2-8 "+fName, function() {
		[
			{
				list : ["a","b","c","d","e"],
				loopPoint : 2
			},
			{
				list : [1,2,3,4,5,6,7,8,9,10,11,12],
				loopPoint : 10
			},
		].forEach(arg => {
			it("finds loop point", function() {
				var list = linkedList.arrayToLinkedList(arg.list);

				var loopNode = list, n = arg.loopPoint;
				while(n > 0){
					loopNode = loopNode.next;
					n--;
				}

				var node = list;
				while(node.next != null) node = node.next;
				node.next = loopNode;

				assert.equal(loopNode, func(list));
			});
		});

		[
			{
				list : ["a","b","c","d","e","c","e","f"],
			},
			{
				list : [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
			},
		].forEach(arg => {
			it("returns null if no loop", function() {
				assert.equal(null, func(linkedList.arrayToLinkedList(arg.list)));
			});
		});

	});


}

