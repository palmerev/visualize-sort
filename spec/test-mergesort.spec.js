var MergeSort = require("../mergesort");
describe("merge function", function () {
    var M, arrayOne, arrayTwo;

    beforeEach(function () {
        M = new MergeSort();
        arrayOne = [];
        arrayTwo = [];
    });

    it("takes two arrays and returns an array", function () {
        expect(M.merge(arrayOne, arrayTwo)).toBe([]);
    });
});
