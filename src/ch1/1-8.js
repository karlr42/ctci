var zeroMatrix = function (matrix){
	var rowsToZero = {};
	var colsToZero = {};
	for(var i = 0 ; i < matrix.length; i++){
		for(var j = 0; j < matrix[i].length; j++){
			if(matrix[i][j] == 0){
				// zero row
				rowsToZero[i] = true;
				colsToZero[j] = true;
			}
		}
	}
	Object.keys(rowsToZero).forEach(i => {
		for(var k = 0; k < matrix[i].length; k++){
			matrix[i][k] = 0;
		}
	});
	Object.keys(colsToZero).forEach(j => {
		for(var k = 0; k < matrix.length; k++){
			matrix[k][j] = 0;
		}
	});
	return matrix;

};

module.exports = {zeroMatrix};