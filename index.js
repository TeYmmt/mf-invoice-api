var getAccessToken = require('./src/getAccessToken.js');
var getParams = require('./src/getParams.js');

function mfInvoiceApi(params) {
  return {
    params: getParams(params),
    accessToken: '',
    refreshToken: '',
    getAccessToken: getAccessToken,
    updateAccessToken: require('./src/updateAccessToken.js'),
    getOffice: require('./src/getOffice.js'),
    saveAccessToken: function(callback) {
      var self = this;
      this.getAccessToken(function(err, tokenInfo) {
        if (err) {
          self.accessToken = 'error';
          self.refreshToken = 'error';
        } else {
          self.accessToken = tokenInfo.access_token;
          self.refreshToken = tokenInfo.refresh_token;
        }
        callback(err);
      });
    },
  };
}

module.exports = mfInvoiceApi;
