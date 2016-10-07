var expect = require('chai').expect;
var getOffice = require('../src/getOffice.js');

describe('src/getOffice.js', function() {
  it.skip('Success : get office info', function(done) {
    var token = '[your access token]';
    getOffice(token, function(err, data) {
      console.log(err, data);
      expect(err).to.be.equal(null);
      expect(data).to.be.exist;
      done();
    });
  });
});
