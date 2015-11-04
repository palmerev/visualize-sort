var MergeSort = require("../mergesort");
describe("merge function:", function () {
    describe("with integer arrays of equal length:", function () {
        var M, arrayOne, arrayTwo;

        beforeEach(function () {
            M = new MergeSort();
            arrayOne = [];
            arrayTwo = [];
        });

        afterEach(function () {
            M = null;
            arrayOne = null;
            arrayTwo = null;
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

        it("merges consecutive overlapping values", function () {
            var arr1 = arrayOne.concat([1, 3]);
            var arr2 = arrayTwo.concat([2, 4]);
            expect(M.merge(arr1, arr2)).toEqual([1, 2, 3, 4]);
        });

        it("merges consecutive overlapping values with duplicates", function () {
            var arr1 = arrayOne.concat([1, 3]);
            var arr2 = arrayTwo.concat([3, 4]);
            expect(M.merge(arr1, arr2)).toEqual([1, 3, 3, 4]);
        });

        it("merges values with different ranges", function () {
            var arr1 = arrayOne.concat([1, 3, 4]);
            var arr2 = arrayTwo.concat([0, 2, 5]);
            expect(M.merge(arr1, arr2)).toEqual([0, 1, 2, 3, 4, 5]);
        });
    });

    describe("merge function with integer arrays of different length:", function () {
        var M, arrayOne, arrayTwo;

        beforeEach(function () {
            M = new MergeSort();
            arrayOne = [];
            arrayTwo = [];
        });

        afterEach(function () {
            M = null;
            arrayOne = null;
            arrayTwo = null;
        });

        it("merges an empty array with a non-empty array", function () {
            var arr1 = arrayOne.concat([]);
            var arr2 = arrayTwo.concat([0, 2, 5]);
            expect(M.merge(arr1, arr2)).toEqual([0, 2, 5]);
        });
        it("merges consecutive overlapping array values", function () {
            var arr1 = arrayOne.concat([1, 3, 4]);
            var arr2 = arrayTwo.concat([-1, 0, 2, 5]);
            expect(M.merge(arr1, arr2)).toEqual([-1, 0, 1, 2, 3, 4, 5]);
        });
        it("merges values with duplicates", function () {
            var arr1 = arrayOne.concat([1, 3, 3]);
            var arr2 = arrayTwo.concat([1, 2, 2, 5]);
            expect(M.merge(arr1, arr2)).toEqual([1, 1, 2, 2, 3, 3, 5]);
        });
    });
});
