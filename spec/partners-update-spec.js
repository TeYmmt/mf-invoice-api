var expect = require('chai').expect;
var update = require('../src/partners/update.js');

describe('partners/update', function() {
  it('Success : update one partner', function(done) {
    var params = {
      name: 'サンプル取引先 change',
    };
    update('[access token]', '[partner id]', params, function(err, result) {
      console.log(err, result);
      expect(err).to.be.equal(null);
      expect(params.name).to.equal(result.name);
      done();
    });
  });
});
