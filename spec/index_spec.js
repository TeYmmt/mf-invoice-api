var expect = require('chai').expect;
var mfInvoiceApi = require('../index.js');

describe('index.js', function() {
  it('Success using config : get access token && done a function', function(done) {
    var invoice = mfInvoiceApi();
    expect(invoice.accessToken).to.be.exist;

    invoice.saveAccessToken(function(err) {
      expect(err).to.be.equal(null);
      if (!err) {
        invoice.getOffice(function(err, result) {
          console.log(err, result);
          expect(err).to.be.equal(null);
          expect(result).to.be.exist;
          done();
        });
      }
    });
  }).timeout(5000);
});
