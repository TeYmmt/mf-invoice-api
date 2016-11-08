var expect = require('chai').expect;
var getOne = require('../src/partners/get-one.js');

describe('partners/get-one', function() {
  it('Success : get one partner info', function(done) {
    getOne('[access token]', '[partner id]', function(err, result) {
      console.log(err, result);
      expect(err).to.be.equal(null);
      expect(result).to.not.equal(null);
      done();
    });
  });
});
