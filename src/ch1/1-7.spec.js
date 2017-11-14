var app = require("./1-7.js");


for (let fName in app) {
	let func = app[fName];

	describe("1-7 "+fName, function() {
		[
			{
				matrix : [
					[45, 15, 10],
					[30, 27, 12],
					[7, 52, 91],
				],
				res : [
					[7, 30, 45],
					[52, 27, 15],
					[91, 12, 10]
				],
				n : 3
			},
			{
				matrix : [
					[1, 2, 3, 4, 5],
					[6, 17, 18, 19, 10],
					[7, 20, 21, 22, 11],
					[8, 23, 24, 25, 12],
					[9, 14, 15, 16, 13],
				],
				res : [
					[9, 8, 7, 6, 1],
					[14, 23, 20, 17, 2],
					[15, 24, 21, 18, 3],
					[16, 25, 22, 19, 4],
					[13, 12, 11, 10, 5],

				],
				n : 5
			}
		].forEach(arg => {
			it("rotate matrix", function() {
				assert.deepEqual(
					arg.res,
					func(arg.matrix, arg.n)
				);
			});
		});
	});
}

