var expect = require('chai').expect;
var deletePartner = require('../src/partners/delete.js');

describe('partners/delete', function() {
  it('Success : delete one partner', function(done) {
    deletePartner('[access token]', '[partner id]', function(err) {
      expect(err).to.be.equal(null);
      done();
    });
  });
});
