var request = require('request');
var getParams = require('./getParams.js');

function getAccessToken(initParams, callback) {
  var params = (callback && initParams && getParams(initParams)) || getParams();
  if (!callback && typeof initParams === 'function') {
    callback = initParams;
  }
  if (!params) {
    callback('Error : not exist params.');
    return;
  }
  
  request.post(params.accessTokenUrl, {
    form: {
      'client_id': params.clientId,
      'client_secret': params.clientSecret,
      'redirect_uri': params.redirectUrl,
      'grant_type': 'authorization_code',
      code: params.authCode,
    }
  }, function (err, res, body) {
    if (!err && res.statusCode === 200) {
      callback(null, JSON.parse(body));
    } else {
      callback('Error is ' + err + '. Status code is ' + res.statusCode);
    }
  });
}

module.exports = getAccessToken;
