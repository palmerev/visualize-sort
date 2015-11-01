var MergeSort = require("../mergesort");
describe("merge function with arrays of equal length", function () {
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

    it("merges consecutive non-overlapping values", function () {
        var arr1 = arrayOne.concat([1, 2]);
        var arr2 = arrayTwo.concat([3, 4]);
        expect(M.merge(arr1, arr2)).toEqual([1, 2, 3, 4]);
    });

    xit("merges consecutive overlapping values", function () {
        var arr1 = arrayOne.concat([1, 3]);
        var arr2 = arrayTwo.concat([2, 4]);
        expect(M.merge(arr1, arr2)).toEqual([1, 2, 3, 4]);
    });

    xit("merges consecutive overlapping values with duplicates", function () {
        var arr1 = arrayOne.concat([1, 3]);
        var arr2 = arrayTwo.concat([3, 4]);
        expect(M.merge(arr1, arr2)).toEqual([1, 3, 3, 4]);
    });

    xit("merges values with different ranges", function () {
        var arr1 = arrayOne.concat([1, 3, 4]);
        var arr2 = arrayTwo.concat([0, 2, 5]);
        expect(M.merge(arr1, arr2)).toEqual([0, 1, 2, 3, 4, 5]);
    });
});
