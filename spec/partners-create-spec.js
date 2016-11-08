var expect = require('chai').expect;
var create = require('../src/partners/create.js');

describe('partners/create', function() {
  it('Success : create one partner', function(done) {
    var params = {
      code: 'ABCD-00001',
      name: 'サンプル取引先',
      name_kana : 'サンプルトリヒキサキ',
      name_suffix : '様',
      memo : 'memo test',
      department_name : '開発部',
      zip : '123-4567',
      tel : '03-1234-5678',
      prefecture : '東京都',
      address1 : '港区サンプル1-2-3',
      address2 : 'サンプルビル',
      person_title : '部長',
      person_name : 'サンプル太郎',
      email : 'sample@example.com',
      cc_emails : 'sample@example.com, sample2@example.com',
    };
    create('[access token]', params, function(err, result) {
      console.log(err, result);
      expect(err).to.be.equal(null);
      expect(result.id).to.not.equal(null);
      expect(result.departments[0].id).to.not.equal(null);
      expect(params.code).to.equal(result.code);
      done();
    });
  }).timeout(5000);
});
