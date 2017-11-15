var app = require("./1-8.js");


for (let fName in app) {
	let func = app[fName];

	describe("1-8 "+fName, function() {
		[
			{
				matrix : [
					[45, 0, 10],
					[30, 27, 12],
					[7, 52, 91],
				],
				res : [
					[0, 0, 0],
					[30, 0, 12],
					[7, 0, 91],
				]
			},
			{
				matrix : [
					[45, 4, 10, 11, 89],
					[30, 27, 12, 57, 67],
					[7, 52, 91, 9, 0],
				],
				res : [
					[45, 4, 10, 11, 0],
					[30, 27, 12, 57, 0],
					[0, 0, 0, 0, 0],

				]
			},
			{
				matrix : [
					[0, 4, 10, 11, 89],
					[, 27, 12, 57, 67],
					[7, 52, 91, 9, 0],
				],
				res : [
					[0, 0, 0, 0, 0],
					[0, 27, 12, 57, 0],
					[0, 0, 0, 0, 0],

				]
			}
		].forEach(arg => {
			it("set matrix row and columns to 0", function() {
				assert.deepEqual(
					arg.res,
					func(arg.matrix)
				);
			});
		});
	});
}

