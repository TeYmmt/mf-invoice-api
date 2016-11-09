var request = require('request');
var getParams = require('../lib/get-params.js');

function get(params, callback) {
  if (!params || !callback) {
    callback((!callback && 'not exist params.') || 'not arguments.');
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

module.exports = get;
