var expect = require('chai').expect;
var cancelPosting = require('../src/billings/cancel-posting.js');

describe('billings/cancelPosting', function() {
  it('Success : cancel a posting', function(done) {
    cancelPosting('[access token]', '[bill id]', function(err) {
      expect(err).to.be.equal(null);
      done();
    });
  }).timeout(5000);
});
