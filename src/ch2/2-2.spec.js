var app = require("./2-2.js");
var linkedList = require("./linkedList.js");


for (let fName in app) {
	let func = app[fName];

	describe("2-2 "+fName, function() {
		[
			{
				list : [1,2,3,4,5,6,7,8,9,10],
				k :  3
			},
			{
				list : [1,2,3,4,5,6,7,8,9],
				k :  8
			}
		].forEach(arg => {
			it("finds kth to last element", function() {
				assert.equal(arg.list[arg.list.length-1-arg.k], 
					func(linkedList.arrayToLinkedList(arg.list), arg.k));
			});
		});

	});
}

