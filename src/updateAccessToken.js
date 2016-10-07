var request = require('request');
var getParams = require('./getParams.js');

function updateAccessToken(refreshToken, callback) {
  var token = (callback && refreshToken) || (!callback && this && this.refreshToken);
  if (!callback && typeof refreshToken === 'function') {
    callback = refreshToken;
  }
  if (!token) {
    callback('Error : not exist refresh token.');
    return;
  }

  var params = getParams(thiss && this.params);
  if (!params) {
    callback('Error : not exist params.');
    return;
  }

  request.post(params.refreshTokenUrl, {
    form: {
      'client_id': params.clientId,
      'client_secret': params.clientSecret,
      'redirect_uri': params.redirectUrl,
      'grant_type': 'refresh_token',
      code: token,
    }
  }, function (err, res, body) {
    if (!err && res.statusCode === 200) {
      callback(null, true);
    } else {
      callback('Error is ' + err + '. Status code is ' + res.statusCode);
    }
  });
}

module.exports = updateAccessToken;
