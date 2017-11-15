var app = require("./1-9.js");


for (let fName in app) {
	let func = app[fName];

	describe("1-9 "+fName, function() {
		[
			["erbottlewat", "waterbottle"],
			["foobar", "barfoo"]
		].forEach(arg => {
			it("return true for rotated strings", function() {
				assert.equal(true, func(arg[0],arg[1]));
			});
		});

		[
			["erbottlewat", "waterbutelk"],
			["foobar", "bafroo"]
		].forEach(arg => {
			it("return false for not rotated strings", function() {
				assert.equal(false, func(arg[0],arg[1]));
			});
		});
	});
}

