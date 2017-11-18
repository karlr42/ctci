var app = require("./2-5.js");
var linkedList = require("./linkedList.js");

let convert = (l) => parseInt(l.join(""));

describe("2-5 A", function() {
	[
		{
			a : [7,1,6],
			b : [5,9,2],
			c : 912
		},
		{
			a : [7,1,6],
			b : [2],
			c : 619
		},
		{
			a : [8,7,9],
			b : [5,8,6],
			c : 1663
		}
	].forEach(arg => {
		it("sums linked lists with reverse order", function() {
			assert.equal(
				arg.c,
				convert(
					linkedList.linkedListToArray(
						app.sumLists(
							linkedList.arrayToLinkedList(arg.a),
							linkedList.arrayToLinkedList(arg.b)
						)
					)
				)
			);
		});
	});
});

for(let func of [app["sumListsForward"], app["sumListsForwardStrParsing"]]){
	describe("2-5 B", function() {
		[
			{
				a : [6,1,7],
				b : [2,9,5],
				c : 912
			},
			{
				a : [6,1,7],
				b : [2],
				c : 619
			},
			{
				a : [9,7,8],
				b : [6,8,5],
				c : 1663
			}
		].forEach(arg => {
			it("sums linked lists with forward order", function() {
				assert.equal(
					arg.c,
					convert(
						linkedList.linkedListToArray(
							func(
								linkedList.arrayToLinkedList(arg.a),
								linkedList.arrayToLinkedList(arg.b)
							)
						)
					)
				);
			});
		});
	});
}


