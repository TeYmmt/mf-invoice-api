var expect = require('chai').expect;
var mfInvoiceApi = require('../index.js');

describe('src/getOffice.js', function() {
  it('Success : get office info', function(done) {
    var invoice = mfInvoiceApi();
    const refreshToken = '[obtained refresh token]';
    invoice.updateAccessToken(refreshToken, function(err, tokenInfo) {
      invoice.getOffice(function(err, result) {
        console.log(err, result);
        expect(err).to.be.equal(null);
        expect(result).to.not.equal(null);
        done();
      });
    });
  });
});
