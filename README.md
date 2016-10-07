# mf-invoice-api
Node.js implementation for https://github.com/moneyforward/invoice-api-doc   
This is always in Beta.   

## How to use this
```
var mfInvoiceApi = require('mf-invoice-api');
var invoice = mfInvoiceApi();

// only once execute invoice.saveAccessToken() to save access token
invoice.saveAccessToken(function(err) {
  if (!err) {
    // getOffice() is to get office info.
    invoice.getOffice(function(err, result) {
      console.log(err, result);
    });
  }
});
```
