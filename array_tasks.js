var arrayTasks = {


	concat: function (arr1, arr2) {
		var array = [];
		arr1.forEach(function(number){
			array.push(number);
		})
		arr2.forEach(function(number){
			array.push(number);
		})
		return array;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(x => x ** 2);
	},

	sum: function (arr) {
		return arr.reduce(function(total, elementValue){
			return total + elementValue;
		})
	},

	findDuplicates: function (arr) {
    results = []
    arr.forEach(function(element, i){
      if (arr.includes(element, i + 1) && !results.includes(element)){
          results.push(element);
        }
    })
    return results;
  },

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter(function(element){
		return element !== valueToRemove;
	})
	},

	findIndexesOf: function (arr, itemToFind) {
		results = []
    arr.forEach(function(element, i){
      if (element === itemToFind){
				results.push(i);
			}
    })
    return results;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		evenNumbers = arr.filter(function(element){
			return element % 2 === 0;
		})

		squared = evenNumbers.map(function(element){
			return element ** 2;
		})

		return squared.reduce(function(total, elementValue){
			return total + elementValue;
		})
	}

}

module.exports = arrayTasks
