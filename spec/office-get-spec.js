var expect = require('chai').expect;
var get = require('../src/office/get.js');

describe('src/office/get.js', function() {
  it('Success : get office info', function(done) {
    get('[access token]', function(err, result) {
      console.log(err, result);
      expect(err).to.be.equal(null);
      expect(result).to.not.equal(null);
      done();
    });
  });
});
