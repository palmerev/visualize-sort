/* eslint-env node, jasmine */
var MergeSort = require("../mergesort");
describe("mergesort:", function () {
    "use strict";
    describe("with integer arrays of equal length:", function () {
        var M, arr;

        beforeEach(function () {
            M = new MergeSort();
            arr = [];
        });

        afterEach(function () {
            M = null;
            arr = null;
        });

        it("takes two arrays and returns an array", function () {
            expect(M.arrEqual(M.mergesort(arr), [])).toBe(true);
        });

        it("sorts arrays of length 1", function () {
            var list = arr.concat(2, 1);
            expect(M.arrEqual(M.mergesort(list), [1, 2])).toBe(true);
        });

        it("sorts 1,4,2,3 (array of even length)", function () {
            var list = arr.concat(1, 4, 2, 3);
            var sorted = M.mergesort(list);
            expect(M.arrEqual(sorted, [1, 2, 3, 4])).toBe(true);
        });

        it("sorts 5,1,4,2,3 (array of odd length)", function () {
            var list = arr.concat(5, 1, 4, 2, 3);
            var sorted = M.mergesort(list);
            expect(M.arrEqual(sorted, [1, 2, 3, 4, 5])).toBe(true);
        });
    });
});
