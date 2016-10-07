var expect = require('chai').expect;
var getAccessToken = require('../src/getAccessToken.js');

describe('src/getAccessToken.js', function() {
  it.skip('Success : get access token', function(done) {
    getAccessToken(function(err, tokenInfo) {
      expect(err).to.be.equal(null);
      expect(tokenInfo).to.be.exist;
      console.log(tokenInfo);
      done();
    });
  });
});
