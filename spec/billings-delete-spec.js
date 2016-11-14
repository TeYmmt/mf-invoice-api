var expect = require('chai').expect;
var deletePosting = require('../src/billings/delete.js');

describe('billings/delete', function() {
  it('Success : delete a bill', function(done) {
    deletePosting('[access token]', '[bill id]', function(err) {
      expect(err).to.be.equal(null);
      done();
    });
  }).timeout(5000);
});
