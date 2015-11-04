/*global document */
var MS = function() {
    "use strict";
};

/**
* Takes two sorted arrays and returns one sorted array with all elements of
* listA and listB
*
* @param {array} listA - A sorted array
* @param {array} listB - A sorted array
* @returns {array} The combined sorted array
*/
MS.prototype.merge = function (listA, listB) {
    "use strict";
    var output = [];
    var arrayA = listA.slice();
    var arrayB = listB.slice();
    while (arrayA.length > 0 && arrayB.length > 0) {
        if (arrayA[0] <= arrayB[0]) {
            output.push(arrayA.shift());
        }
        else {
            output.push(arrayB.shift());
        }
    }
    while (arrayA.length > 0) {
        output.push(arrayA.shift());
    }
    while (arrayB.length > 0) {
        output.push(arrayB.shift());
    }
    return output;
};

/**
* @param {array} arr - An array to be sorted
* @returns {array} The sorted version of the array
*/
MS.prototype.mergesort = function (arr){
    "use strict";
    var list = arr.slice();
    //base case
    if (list.length <= 1) {
        return list;
    }

    //recursive case
    var left,
    right,
    midpoint;

    // divide the list into halves
    midpoint = parseInt(list.length / 2);
    left = list.slice(0, midpoint);
    right = list.slice(midpoint, list.length);
    // recursively sort both sublists
    var sortedLeft = this.mergesort(left);
    var sortedRight = this.mergesort(right);
    // merge the now sorted sublists
    return this.merge(sortedLeft, sortedRight);
};

MS.prototype.arrEqual = function (arr1, arr2) {
    "use strict";
    var sameLength = (arr1.length === arr2.length);
    if (!sameLength) {
        return false;
    }

    for (var i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
           return false;
        }
    }

    return true;
};

//module.exports = MS;
function getResultAsArray () {
    "use strict";
    var textInput = document.getElementById("text-input");
    //var result = document.getElementsByClassName("result")[0];
    var input = textInput.value;
    var values = input.split(/\D*/);
    return values;
}
function addParagraphWithContent (content) {
    "use strict";
    var newPara = document.createElement("p");
    newPara.textContent = content;
    document.getElementsByClassName("result")[0].appendChild(newPara);
}
function displayResult () {
    "use strict";
    document.getElementsByClassName("result")[0].textContent = "";
    var characters = getResultAsArray();
    characters.forEach(function (element, index, array) {
        addParagraphWithContent(element);
    });
}

function init () {
    "use strict";
    var sortButton = document.getElementsByClassName("sort-button")[0];
    sortButton.addEventListener("click", displayResult);
}
document.addEventListener("DOMContentLoaded", init);
