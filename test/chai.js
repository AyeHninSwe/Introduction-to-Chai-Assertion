const chai = require('chai');

//expect
const expect = chai.expect;

//should
const should = chai.should();

//assert
const assert = chai.assert; // no chaining possible;

 let a = 2, b = 2; 
// expect API examples
// expect(a).to.be.equal(b,"A and B are not same");

// should
// a.should.be.equal(b);

// assert
// assert.equal(a,b,"A and B are not equal")

//Objects/string/boolean
function myObj(){
     return{
         a : 100,
        b : "Hello",
     }
 };

 x = new myObj();
 y = new myObj();
// expect(x).to.be.an("Object");
// //expect(x).to.be.equal(y);

// //deep.equal or deep.equals can be used for object assertion
// expect(x).to.be.deep.equal(y);

// should
//x.should.be.an("Object");
// x.should.be.equal(y);
// //deep.equal or deep.equals can be used for object assertion
// x.should.be.deep.equals(y);

//assert 
//assert.deepEqual(x,y,"X and Y are not equal")

// //chaning experssions
// //x is an object; x and y are equal
// //keywords -> and, with, but, ...
// expect(x).to.be.an("object").and.to.be.deep.equal(y);
// x.should.be.an("Object").and.to.be.deep.equal(y);

//arrays
let numbers = [0,1,2,3];
//expect(numbers).to.be.an("array").that.include(0,"Number is not included in the array");
//numbers.should.be.an("array").that.include(0);
//assert.isArray(numbers,"Number is not array")

//should extras
// should -> object.prototype -> a.should
function writeToFile(error){
    //should extras
    // normal scenarios
    // error.should.not.exist();
    should.not.exist(error);

}

writeToFile(undefined);