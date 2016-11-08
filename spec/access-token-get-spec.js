var expect = require('chai').expect;
var getAccessToken = require('../src/access-token/get.js');

describe('src/access-token/get.js', function() {
  it('Success : get access token', function(done) {
    getAccessToken(function(err, tokenInfo) {
      expect(err).to.be.equal(null);
      expect(tokenInfo).to.be.exist;
      console.log(tokenInfo);
      done();
    });
  });
});
