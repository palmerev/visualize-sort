var MS = function() {};

/**
* @param {array} list - An array to be sorted
* @returns {array} The sorted version of the array
*/
MS.prototype.mergesort = function (list){

}

/**
* Takes two sorted arrays and returns one sorted array with all elements of
* listA and listB
*
* @param {array} listA - A sorted array
* @param {array} listB - A sorted array
* @returns {array} The combined sorted array
*/
MS.prototype.merge = function (listA, listB) {
    var output = [];
    while (listA.length > 0 && listB.length > 0) {
        if (listA[0] <= listB[0]) {
            output.push(listA.shift());
        }
        else {
            output.push(listB.shift());
        }
    }
    while (listA.length > 0) {
        output.push(listA.shift());
    }
    while (listB.length > 0) {
        output.push(listB.shift());
    }
    return output;
}

module.exports = MS;
