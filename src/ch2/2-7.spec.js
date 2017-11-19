var app = require("./2-7.js");
var linkedList = require("./linkedList.js");


for (let fName in app) {
	let func = app[fName];

	describe("2-7 "+fName, function() {
		[
			{
				/*
					 i.e. list 1 is 0,1,2
					 list 2 is 4,3,1,2
					 pass node node '0' and node '4'
				*/
				a : [0],
				b : [4,3],
				common : [1,2]
			},
			{
				a : [0,1,2,3,4,5,6,7],
				b : [8,9,10,11,12],
				common : [3,4,5,6,7]
			},
		].forEach(arg => {
			it("finds intersection", function() {
				var common = linkedList.arrayToLinkedList(arg.common);
				var a = linkedList.arrayToLinkedList(arg.a);
				var b = linkedList.arrayToLinkedList(arg.b);

				var node = a;
				while(node.next != null) node = node.next;
				node.next = common;

				var node = b;
				while(node.next != null) node = node.next;
				node.next = common;

				assert.equal(common, func(a,b));
			});
		});

		[
			{
				a : [0,1,2],
				b : [4,3,1,2],
			},
			{
				a : [0,1,2,3,4,5,6,7],
				b : [8,9,10,11,12],
			},
		].forEach(arg => {
			it("returns null if no intersection", function() {
				var a = linkedList.arrayToLinkedList(arg.a);
				var b = linkedList.arrayToLinkedList(arg.b);

				assert.equal(null, func(a,b));
			});
		});

	});


}

