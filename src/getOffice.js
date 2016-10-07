var request = require('request');
var config = require('config');

function getOffice(accessToken, callback) {
  var token = (typeof callback === 'function' && accessToken)
    || (!callback && this && this.accessToken);

  if (!callback && typeof accessToken === 'function') {
    callback = accessToken;
  }
  if (!token) {
    callback('Error : not exist token.');
    return;
  }

  var endpoint = config.MF_INVOICE_API.ENDPOINT && config.MF_INVOICE_API.ENDPOINT.OFFICE || '/api/v1/office';
  var uri = config.MF_INVOICE_API.ORIGIN_URL + endpoint + '.json';

  var office = function(enableTry, cb) {
    request.get(uri, {
      headers: {
        Authorization: 'BEARER ' + token,
        'content-type': 'application/json',
      }
    }, function(err, res, body) {
      if (!err && res.statusCode === 200) {
        cb(null, JSON.parse(body));
      } else if(!err && res.statusCode === 401 && enableTry) {
        cb('unauthorized');
      } else {
        cb('Error request. err is' + err + '. Status code is ' + res.statusCode);
      }
    });
  };

  office(true, function(err, result) {
    if (err === 'unauthorized') {
      if (this && this.updateAccessToken) {
        this.updateAccessToken(function(err, refresh) {
          if (!err) {
            office(function(err, result) {
              callback(err, result);
            });
          } else {
            callback(err);
          }
        });
      } else {
        callback(err);
      }
    } else {
      callback(err, result);
    }
  });
}

module.exports = getOffice;
