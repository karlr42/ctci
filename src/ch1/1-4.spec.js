var app = require("./1-4.js");


for (let fName in app) {
	let func = app[fName];

	describe("1-4 "+fName, function() {
		[
			"Tact Coa",
			"aann",
			"AIRAIRANA"
		].forEach(arg => {
			it("return true for perms of a palindrome", function() {
				assert.equal(true, func(arg));
			});
		});

		[
			"abc",
			"javascript",
			"amandoesnothaveaplaninpanama"
		].forEach(arg => {
			it("return false for strs that aren't perms of a palindrome", function() {
				assert.equal(false, func(arg));
			});
		});
	});
}

