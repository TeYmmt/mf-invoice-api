# mf-invoice-api
Node.js implementation for https://github.com/moneyforward/invoice-api-doc   
This is always in Beta.   

## now implementation list
:white_check_mark: 事業所情報の取得 GET /api/v1/office.json
:white_medium_square: 事業所情報の編集 PATCH /api/v1/office
:white_medium_square: 取引先一覧の取得 GET /api/v1/partners.json
:white_check_mark: 取引先の取得 GET /api/v1/partners/:id.json
:white_check_mark: 取引先の作成 POST /api/v1/partners
:white_check_mark: 取引先の更新 PATCH /api/v1/partners/:id
:white_medium_square: 取引先の削除 DELETE /api/v1/partners/:id
:white_medium_square: 請求書一覧の取得 GET /api/v1/billings.json
:white_medium_square: 請求書一覧の検索 GET /api/v1/billings/search.json
:white_check_mark: 請求書の取得 GET /api/v1/billings/:id.json
:white_medium_square: 請求書pdfの取得 GET /api/v1/billings/:id.pdf
:white_check_mark: 請求書の作成 POST /api/v1/billings
:white_medium_square: 請求書の更新 PATCH /api/v1/billings/:id
:white_check_mark: 請求書の郵送 POST /api/v1/billings/:id/posting
:white_medium_square: 請求書の郵送キャンセル POST /api/v1/billings/:id/cancel_posting
:white_medium_square: 請求書の削除 DELETE /api/v1/billings/:id
:white_medium_square: 品目一覧の取得 GET /api/v1/items.json
:white_medium_square: 品目の取得 GET /api/v1/items/:id.json
:white_medium_square: 品目の作成 POST /api/v1/items
:white_medium_square: 品目の更新 PATCH /api/v1/items/:id
:white_medium_square: 品目の削除 DELETE /api/v1/items/:id
:white_medium_square: 送付履歴一覧の取得 GET /api/v1/sent_history.json

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
