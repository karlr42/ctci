var app = require("./2-4.js");
var linkedList = require("./linkedList.js");


for (let fName in app) {
	let func = app[fName];

	describe("2-4 "+fName, function() {
		[
			{
				list : [10,1],
				part : 5
			},
			{
				list : [3,10,1],
				part : 5
			},
			{
				list : [7,10,1],
				part : 5
			},
			{
				list : [3,5,8,5,10,2,1],
				part : 5
			},
			{
				list : [3,5,8,5,10,2,1],
				part : 1
			}
		].forEach(arg => {
			it("partitions linked list", function() {
				var res = linkedList.linkedListToArray(func(linkedList.arrayToLinkedList(arg.list), arg.part));
				console.log(res);
				var jumps = 0;
				for(let i = 0; i < res.length-2; i++){
					if(res[i+1] > res[i] && (res[i] < arg.part && res[i+1] >= arg.part)) jumps++;
				}
				assert.equal(true, res.length == arg.list.length && jumps < 2);
			});
		});

	});
}

