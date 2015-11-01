var mergesort = require("./mergesort");

describe("merge function", function () {
    beforeEach(function () {
        var arrayOne = [];
        var arrayTwo = [];
    });

    it("takes two arrays and returns an array", function () {
        expect(merge(arrayOne, arrayTwo)).toBe([]);
    });
});
