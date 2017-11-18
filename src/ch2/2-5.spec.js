var app = require("./2-5.js");
var linkedList = require("./linkedList.js");


for (let fName in app) {
	let func = app[fName];

	describe("2-5 "+fName, function() {
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
			}
		].forEach(arg => {
			it("sums linked lists with reverse order", function() {
				let convert = (l) => parseInt(l.join(""));
				var copyA = arg.a, copyB = arg.b;
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

