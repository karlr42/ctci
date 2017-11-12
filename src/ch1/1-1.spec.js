var app = require("./1-1.js");

describe("1-1", function() {
	describe("isUnique", function() {
		// unique input
		[
			"abcdefghi",
			"AaBbCcDdeFg1234567890(*&^%$#@!)"
		].forEach(arg => {
			it("return true for strs with unique chars", function() {
				assert.equal(true, app.isUnique(arg));
			});
		});

		// non-unique input
		[
			"aaa",
			"abcdefghii",
			"AaBbbCcDdeFg1234567890(*&^%$#@!)"
		].forEach(arg => {
			it("return false for strs with duplicate chars", function() {
				assert.equal(false, app.isUnique(arg));
			});
		});
	});
});

