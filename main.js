/*eslint-env browser, node */
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
    console.log("content: ", content);
    var newPara = document.createElement("p");
    newPara.textContent = content;
    document.getElementsByClassName("result")[0].appendChild(newPara);
}
function displayResult () {
    "use strict";
    document.getElementsByClassName("result")[0].textContent = "";
    var characters = getResultAsArray();
    console.log("characters: ", characters);
    var sortedInput = window.ms.mergesort(characters);
    console.log("sortedInput: ", sortedInput);
    if(!sortedInput) {
        throw new Error("no sortedInput");
    }
    sortedInput.forEach(function (element, index, array) {
        addParagraphWithContent(array[index]);
    });
}

function init () {
    "use strict";
    var sortButton = document.getElementsByClassName("sort-button")[0];
    sortButton.addEventListener("click", displayResult);
}
document.addEventListener("DOMContentLoaded", init);
