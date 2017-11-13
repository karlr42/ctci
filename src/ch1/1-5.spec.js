var app = require("./1-5.js");


for (let fName in app) {
	let func = app[fName];

	describe("1-5 "+fName, function() {
		[
			["pale", "ple"],
			["pales", "pale"],
			["pale", "bale"],
		].forEach(arg => {
			it("return true for one away", function() {
				assert.equal(true, func(arg[0],arg[1]));
			});
		});

		[
			["pale", "bake"]
		].forEach(arg => {
			it("return false for not one away", function() {
				assert.equal(false, func(arg[0],arg[1]));
			});
		});
	});
}

