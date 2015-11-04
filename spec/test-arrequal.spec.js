/* eslint-env node, jasmine */
var MergeSort = require("../mergesort");

describe("arrEqual", function () {
    "use strict";
    var M;
    beforeEach(function () {
        M = new MergeSort();
    });

    afterEach(function () {
        M = null;
    });

    it("compares empty arrays", function (){
        expect(M.arrEqual([], [])).toBe(true);
    });

    it("compares arrays with same members in same order", function () {
        expect(M.arrEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    });

    it("compares arrays with same members in different order", function () {
        expect(M.arrEqual([1, 2, 3], [3, 1, 2])).toBe(false);
    });
    it("compares arrays of different lengths", function () {
        expect(M.arrEqual([1, 2, 3], [1, 2])).toBe(false);
    });
});
