const checkFive = require('../checkFive.js');

describe("checkFive", function(){
    test("should return a descriptive message for numbers less than or equal to 5", function(){
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });
});