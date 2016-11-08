var expect = require('chai').expect;
var create = require('../src/billings/posting.js');

describe('billings/posting', function() {
  it('Success : posting one bill', function(done) {
    create('[access token]', '[bill id]', function(err) {
      expect(err).to.be.equal(null);
      done();
    });
  }).timeout(5000);
});
