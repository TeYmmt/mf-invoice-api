var config = require('config');
var expect = require('chai').expect;
var mfInvoiceApi = require('../src/index.js');

var partnerId;
var departmentId;
var billingId;

describe('sample spec', function() {
  before(function(done) {
    this.timeout(5000);
    mfInvoiceApi.init(config.MF_INVOICE_API, function(err, info) {
      console.log(err, info);
      done();
    });
  });

  it('get office info', function(done) {
    mfInvoiceApi.office.get(function(err, result) {
      expect(err).to.equal(null);
      console.log(err, result);
      done();
    });
  }).timeout(5000);

  it('create a partner', function(done) {
    mfInvoiceApi.partners.create({
      code: 'ABCD-00001',
      name: 'サンプル取引先',
      zip : '123-4567',
      address1 : '港区サンプル1-2-3',
    }, function(err, result) {
      expect(err).to.equal(null);
      console.log(err, result);
      partnerId = result.id;
      departmentId = result.departments[0].id;
      done();
    });
  }).timeout(5000);

  it('update a partner', function(done) {
    mfInvoiceApi.partners.update(partnerId, {
      code: 'ABCD-00002',
      name: 'サンプル取引先2',
    }, function(err, result) {
      expect(err).to.equal(null);
      console.log(err, result);
      done();
    });
  }).timeout(5000);

  it('get a partner', function(done) {
    mfInvoiceApi.partners.getOne(partnerId, function(err, result) {
      expect(err).to.equal(null);
      console.log(err, result);
      done();
    });
  }).timeout(5000);

  it('create a bill', function(done) {
    mfInvoiceApi.billings.create({
      department_id: departmentId,
      title: 'サンプル',
      items: [{
        name: '商品A',
        quantity: '10',
        unit_price: '500',
      }],
    }, function(err, result) {
      expect(err).to.equal(null);
      console.log(err, result);
      billingId = result.id;
      done();
    });
  }).timeout(5000);

  it('get a bill', function(done) {
    mfInvoiceApi.billings.getOne(billingId, function(err, result) {
      expect(err).to.equal(null);
      console.log(err, result);
      done();
    });
  }).timeout(5000);

  it('post a bill', function(done) {
    mfInvoiceApi.billings.posting(billingId, function(err) {
      expect(err).to.equal(null);
      console.log(!err && 'send it.');
      done();
    });
  }).timeout(5000);
});
