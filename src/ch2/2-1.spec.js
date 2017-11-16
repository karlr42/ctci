var app = require("./2-1.js");
var linkedList = require("./linkedList.js");


for (let fName in app) {
	let func = app[fName];

	describe("2-1 "+fName, function() {
		[
			{
				list : [1,2,2,3,4,5,1,6,7,8,9,4],
				res :  [1,2,3,4,5,6,7,8,9],
			}
		].forEach(arg => {
			it("removes duplicates", function() {
				assert.deepEqual(arg.res, 
					linkedList.linkedListToArray(func(linkedList.arrayToLinkedList(arg.list))));
			});
		});

	});
}

