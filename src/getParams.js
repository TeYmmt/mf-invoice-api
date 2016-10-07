var config = require('config');

function getParams(initParams) {
  return (this && this.params) || initParams || (config && config.MF_INVOICE_API && {
    accessTokenUrl: config.MF_INVOICE_API.ACCESS_TOKEN_URL,
    clientId: config.MF_INVOICE_API.CLIENT_ID,
    clientSecret: config.MF_INVOICE_API.CLIENT_SECRET,
    redirectUrl: config.MF_INVOICE_API.REDIRECT_URL,
    authCode: config.MF_INVOICE_API.AUTH_CODE,
  }) || {};
}

module.exports = getParams;
