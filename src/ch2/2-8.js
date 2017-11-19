let findLoop = function(list){
	/*
		If you have two pointers, one that 
		takes a node at a time, and another
		going twice as fast, they will overlap
		at some point if there is a loop.
	*/
    var walk = list, run = list;
    while(run !== null && run.next !== null){
        walk = walk.next;
        run = run.next.next;
        if(walk === run) break;
    }
    if(walk == null || run == null){
    	// got to the end with no loop
    	return null;
    }
    /*
    	once they collide, you can find the looping
    	point by resetting the walking pointer and
    	slowing the runner, until they intersect.

    	I don't quite understand it, but it's fine 
    	to memorise this as a principle.
    */
    walk = list;
    while(walk !== run){
    	walk = walk.next;
    	run = run.next;
    }
    return walk;
};

module.exports = {findLoop};