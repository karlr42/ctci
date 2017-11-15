var rotateMatrix = function (matrix, n){
	/*
		- transpose matrix(make rows into columns by diagonal-left-down swapping)
		- then swap the order of columns to get the result
	*/
	for(var i = 0 ; i < n; i++){
		// row-by-row transpose
		for(var j = i+1; j < n; j++){
			// diagonally swap 
			let temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}
	// swap leftmost row cells with rightmost cells
	for(var i = 0 ; i < n; i++){
		for(var j = 0 ; j < n/2; j++){
			let temp = matrix[i][j];
			matrix[i][j] = matrix[i][n-1-j];
			matrix[i][n-1-j] = temp;
		}
	}
	return matrix;

};

module.exports = {rotateMatrix};