var fincal = require("../"),
    chai = require("chai"),
    expect = chai.expect;

chai.should();

describe("Tokyo", function() {
    
    it("should have a working time() method.", function() {
        fincal.tokyo.time().should.be.an("object");
    });
    
    it("should have a working areEquityMarketsOpen() method.", function() {
        fincal.tokyo.areEquityMarketsOpen().should.be.a("boolean");
    });
    
});