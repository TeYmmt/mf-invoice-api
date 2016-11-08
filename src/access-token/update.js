var request = require('request');
var getParams = require('../lib/get-params.js');

function update(refreshToken, callback) {
  var asProp = this;
  var token = (callback && refreshToken) || (!callback && asProp && asProp.refreshToken);
  if (!callback && typeof refreshToken === 'function') {
    callback = refreshToken;
  }
  if (!token) {
    callback('Error : not exist refresh token.');
    return;
  }

  var params = getParams(asProp && asProp.params);
  if (!params) {
    callback('Error : not exist params.');
    return;
  }

  request.post(params.refreshTokenUrl, {
    form: {
      'client_id': params.clientId,
      'grant_type': 'refresh_token',
      'refresh_token': token,
    }
  }, function (err, res, body) {
    if (!err && res.statusCode === 200) {
      var newToken = JSON.parse(body);
      if (this && typeof asProp.refreshToken === 'string' && typeof asProp.accessToken === 'string') {
        asProp.refreshToken = newToken.refresh_token;
        asProp.accessToken = newToken.access_token;
      }
      console.log(newToken);
      callback(null, newToken);
    } else {
      callback('Error is ' + err + '. Status code is ' + res.statusCode);
    }
  });
}

module.exports = update;
