var app = require("./1-1.js");


for (let fName in app) {
	let func = app[fName];

	describe("1-1 "+fName, function() {
		// unique input
		[
			"abcdefghi",
			"AaBbCcDdeFg1234567890(*&^%$#@!)"
		].forEach(arg => {
			it("return true for strs with unique chars", function() {
				assert.equal(true, func(arg));
			});
		});

		// non-unique input
		[
			"aaa",
			"abcdefghii",
			"AaBbbCcDdeFg1234567890(*&^%$#@!)"
		].forEach(arg => {
			it("return false for strs with duplicate chars", function() {
				assert.equal(false, func(arg));
			});
		});
	});
}

