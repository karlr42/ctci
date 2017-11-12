var app = require("./1-3.js");


for (let fName in app) {
	let func = app[fName];

	describe("1-3 "+fName, function() {
		it("replaces spaces with %20", function() {
			var arg = ["Mr John Smith    ", 13];
			assert.equal("Mr%20John%20Smith", func(arg[0], arg[1]));
		});
		it("handles string of all spaces", function() {
			var arg = ["         ", 3];
			assert.equal("%20%20%20", func(arg[0], arg[1]));
		});
		it("handles string with space at end", function() {
			var arg = ["M N SM       ", 7];
			assert.equal("M%20N%20SM%20", func(arg[0], arg[1]));
		});
		it("doesn't change strs with no spaces", function() {
			var arg = ["MrJohnSmith", 11];
			assert.equal("MrJohnSmith", func(arg[0], arg[1]));
		});
	});
}

