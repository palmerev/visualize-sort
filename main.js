/*eslint-env browser */
/* global MS */
window.ms = new MS();

function getResultAsArray () {
    "use strict";
    var textInput = document.getElementById("text-input");
    var input = textInput.value;
    var values = input.split(/\D+/);
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
    var sortedInput = window.ms.mergesort(characters);
    if(!sortedInput) {
        throw new Error("no sortedInput");
    }
    sortedInput.forEach(function (element, index, array) {
        addParagraphWithContent(element);
    });
}

function init () {
    "use strict";
    var sortButton = document.getElementsByClassName("sort-button")[0];
    sortButton.addEventListener("click", displayResult);
}
document.addEventListener("DOMContentLoaded", init);
