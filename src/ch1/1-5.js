var oneAway = function(a,b){
	var atMostOneReplacement = (a,b) => {
		var seenOneReplaceAlready = false;
		for(var i = 0; i < a.length; i++){
			if(a.charAt(i) != b.charAt(i)){
				if(seenOneReplaceAlready) return false;
				seenOneReplaceAlready = true;
			}
		}
		return true;
	};

	var atMostOneInsertion = (a,b) => { // a.len > b.len
		for(var i = 0, j = 0; i < a.length && j < b.length;){
			if(a.charAt(i) != b.charAt(j)){
				/*
					we can accept one difference(which could be 
					the inserted character), as long as we return
					to the correct sequence on the next iteration
				*/
				if(i != j) return false;
				i++;
			}else{
				i++;
				j++;
			}
		}
		return true;
	};


	if(a.length == b.length){
		//check for replacements
		return atMostOneReplacement(a,b);
	}else if (a.length+1 == b.length){
		// a is smaller, check for a insertions
		return atMostOneInsertion(b,a);
	}else if (a.length-1 == b.length){
		// b is smaller, check for b insertions
		return atMostOneInsertion(a,b);
	}else{
		return false;
	}
};

var oneAwayBv = function(a, b){
	var strToBitVector = (str) => {
		/*
			Assume English alphabet and case-insensitivity to
			create a vector showing which characters exist
		*/
		var vec = Array(26).fill(0);
		for(const c of str){
			vec[(c.toLowerCase().charCodeAt(0) - "a".charCodeAt(0))] = 1;
		}
		return vec;
	};

	var getDiffCount = (a,b) => {
		/*
			use xor to get number of differences
			between two bitvectors
		*/
		var diffCount = 0;
		a.forEach((elem,i) => {
			diffCount += (a[i] ^ b[i])
		});
		return diffCount;
	};


	if(Math.abs(a.length - b.length) > 1){
		// if differ in length by more than one, can't be one away
		return false;
	}else{
		/*
			they can only have at most 2 differences:
				1 if a character added or removed("doesn't have new/old char")
				2 if a character was modified("doesn't have old char" and "has new char")
		*/
		return getDiffCount(strToBitVector(a), strToBitVector(b)) < 3;
	}
};

module.exports = {oneAwayBv, oneAway};