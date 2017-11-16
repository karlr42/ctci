let removeDups = function(list){
	var map = {}, node = list, prev = list;
	while(node != null){
		if(map[node.val]){
			//this is a dup, remove it
			prev.next = node.next;
		}else{
			map[node.val] = true;
			prev = node;
		}
		node = node.next;
	}
	return list;
};

let removeDupsNoBuffer = function(list){
	// O(n^2) algo by looking at all other nodes
	var node = list;
	while(node != null){
		var val = node.val, runner = node;
		while(runner.next != null){
			if(runner.next.val == val){
				runner.next = runner.next.next;
			}else{
				runner = runner.next;
			}
		}
		node = node.next;
	}
	return list;
};

module.exports = {removeDups, removeDupsNoBuffer};