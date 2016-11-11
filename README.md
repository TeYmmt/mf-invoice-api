# mf-invoice-api
Node.js implementation for https://github.com/moneyforward/invoice-api-doc   
This is always in Beta.   

## now implementation list
- [x] 事業所情報の取得 GET /api/v1/office.json
- [ ] 事業所情報の編集 PATCH /api/v1/office
- [ ] 取引先一覧の取得 GET /api/v1/partners.json
- [x] 取引先の取得 GET /api/v1/partners/:id.json
- [x] 取引先の作成 POST /api/v1/partners
- [x] 取引先の更新 PATCH /api/v1/partners/:id
- [ ] 取引先の削除 DELETE /api/v1/partners/:id
- [ ] 請求書一覧の取得 GET /api/v1/billings.json
- [ ] 請求書一覧の検索 GET /api/v1/billings/search.json
- [x] 請求書の取得 GET /api/v1/billings/:id.json
- [ ] 請求書pdfの取得 GET /api/v1/billings/:id.pdf
- [x] 請求書の作成 POST /api/v1/billings
- [ ] 請求書の更新 PATCH /api/v1/billings/:id
- [x] 請求書の郵送 POST /api/v1/billings/:id/posting
- [ ] 請求書の郵送キャンセル POST /api/v1/billings/:id/cancel_posting
- [ ] 請求書の削除 DELETE /api/v1/billings/:id
- [ ] 品目一覧の取得 GET /api/v1/items.json
- [ ] 品目の取得 GET /api/v1/items/:id.json
- [ ] 品目の作成 POST /api/v1/items
- [ ] 品目の更新 PATCH /api/v1/items/:id
- [ ] 品目の削除 DELETE /api/v1/items/:id
- [ ] 送付履歴一覧の取得 GET /api/v1/sent_history.json

## How to use this
```
var config = require('config');
var mfInvoiceApi = require('mf-invoice-api/src');
// use config, or set parameters
mfInvoiceApi.init(config.MF_INVOICE_API, function(err, info) {
  // after this, you can use other functions.(mfInvoiceApi has access token)
});

// other place
var params = {
  code: 'ABCD-00001',
  name: 'サンプル取引先',
};
mfInvoiceApi.partners.create(params, function(err, result) {
  console.log(err, result);
});
```
Look at `spec/sample-spec.js` also.
