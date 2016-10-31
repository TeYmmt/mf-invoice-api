var expect = require('chai').expect;
var updateAccessToken = require('../src/updateAccessToken.js');

describe('src/updateAccessToken.js', function() {
  it('Success : update access token by refresh token (you should do manualy)', function(done) {
    const refreshToken = '[obtained refresh token]';
    updateAccessToken(refreshToken, function(err, tokenInfo) {
      console.log({ err, tokenInfo });
      expect(err).to.be.equal(null);
      expect(tokenInfo.refresh_token).to.not.be.equal(refreshToken);
      expect(tokenInfo.access_token).to.not.be.equal(null);
      done();
    });
  });
});
