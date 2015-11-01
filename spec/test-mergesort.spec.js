var MergeSort = require("../mergesort");
describe("merge function", function () {
    var M, arrayOne, arrayTwo;

    beforeEach(function () {
        M = new MergeSort();
        arrayOne = [];
        arrayTwo = [];
    });

    it("takes two arrays and returns an array", function () {
        expect(M.merge(arrayOne, arrayTwo)).toEqual([]);
    });

    it("merges arrays of length 1", function () {
        var arr1 = arrayOne.concat([1]);
        var arr2 = arrayTwo.concat([2]);
        expect(arr1).toEqual([1]);
        expect(arr2).toEqual([2]);
        expect(M.merge(arr1, arr2)).toEqual([1, 2]);
    });
});
