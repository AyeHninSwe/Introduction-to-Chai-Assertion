const chai = require('chai');

const should = chai.should();

chai.config.showDiff = false;
//chai.config.truncateThreshold = 0;
//chai.config.includeStack = true;

describe("objects", function () {
    it("should equal", function () {
        var a = {
            a: 1,
            b: 2,
            c: {
                a: 1,
                b: 2,
                c: {
                    a: 1,
                    b: 2,
                    x: 3
                }
            }
        };

        var b = {
            a: 1,
            b: 2,
            c: {
                a: 1,
                b: 2,
                c: {
                    a: 1,
                    b: 2,
                    x: 4
                }
            }
        };
        a.should.deep.equal(b);
    });
});

