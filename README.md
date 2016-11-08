# mf-invoice-api
Node.js implementation for https://github.com/moneyforward/invoice-api-doc   
This is always in Beta.   

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
