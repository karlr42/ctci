var app = require("./1-2.js");


for (let fName in app) {
	let func = app[fName];

	describe("1-2 "+fName, function() {
		[
			["abc", "cba"],
			["a", "a"],
			["abcdefgh", "defabchg"],
			["aabb", "bbaa"],
			["aBcDabC", "DCcBbaa"]
		].forEach(arg => {
			it("return true for perms", function() {
				assert.equal(true, func(arg[0], arg[1]));
			});
		});

		[
			["abc", "ba"],
			["a", "b"],
			["abcdefgh", "defghijkl"],
			["aBcDabC", "DCcbbaa"]
		].forEach(arg => {
			it("return false for not perms", function() {
				assert.equal(false, func(arg[0], arg[1]));
			});
		});
	});
}

