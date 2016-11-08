var expect = require('chai').expect;
var getOne = require('../src/billings/get-one.js');

describe('billings/get-one', function() {
  it('Success : get one billing', function(done) {
    getOne('[access token]', '[bill id]', function(err, result) {
      console.log(err, result);
      expect(err).to.be.equal(null);
      expect(result.pdf_url).to.not.equal(null);
      done();
    });
  }).timeout(5000);
});
