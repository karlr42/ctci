var app = require("./ex1.js");

describe("ex1", function() {
	describe("returnFoo", function() {
		it("should return 'returnFoo'", function() {
			assert.equal("foo", app.returnFoo());
		});
	});
});