var expect = require('chai').expect;
var mfInvoiceApi = require('../index.js');
var config = require('config');

describe('index.js', function() {
  it('Success using config : get access token && done a function', function(done) {
    mfInvoiceApi.init(config.MF_INVOICE_API, function(err, info) {
      expect(err).to.be.equal(null);
      expect(info.accessToken).to.not.be.equal(null);
      console.log(err, info);
      done();
    });
  }).timeout(5000);
});
