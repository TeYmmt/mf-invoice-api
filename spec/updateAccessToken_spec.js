var expect = require('chai').expect;
var updateAccessToken = require('../src/updateAccessToken.js');

describe('src/updateAccessToken.js', function() {
  it.skip('Success : update access token by refresh token (you should do manualy)', function(done) {
    const refreshToken = '[obtained refresh token]';
    updateAccessToken(refreshToken, function(err, success) {
      expect(err).to.be.equal(null);
      expect(success).to.be.equal(true);
      done();
    });
  });
});
