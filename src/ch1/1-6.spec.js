var app = require("./1-6.js");


for (let fName in app) {
	let func = app[fName];

	describe("1-6 "+fName, function() {
		[
			"aabcccccaaa",
		].forEach(arg => {
			it("compress string", function() {
				assert.equal("a2b1c5a3", func(arg));
			});
		});

		[
			"abcdefghi",
		].forEach(arg => {
			it("not compress strings that would be longer", function() {
				assert.equal("abcdefghi", func(arg));
			});
		});
	});
}

