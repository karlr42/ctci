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
				n : 3
			}
		].forEach(arg => {
			it("rotate matrix", function() {
				assert.equal(
					[
						[7, 30, 45],
						[52, 27, 15],
						[91, 12, 10]
					],
					func(arg.matrix, arg.n)
				);
			});
		});
	});
}

