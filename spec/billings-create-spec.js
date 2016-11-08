var expect = require('chai').expect;
var create = require('../src/billings/create.js');

describe('billings/create', function() {
  it('Success : create one billing', function(done) {
    var params = {
      department_id: '[department id]',
      title: 'サンプル',
      items: [{
        name: '商品A',
        quantity: '10',
        unit_price: '500',
      }],
    };
    create('[access token]', params, function(err, result) {
      console.log(err, result);
      expect(err).to.be.equal(null);
      expect(result.status).to.not.equal(null);
      done();
    });
  }).timeout(5000);
});
