var request = require('request');
var config = require('config');
var endpoints = require('../lib/endpoints.js');

function get(token, cb) {
  if (!token || !cb) {
    cb((!cb && 'not exist token.') || (!token && !cb && 'not arguments'));
    return;
  }

  var endpoint = config.MF_INVOICE_API.ENDPOINT && config.MF_INVOICE_API.ENDPOINT.OFFICE || endpoints.OFFICE;
  var uri = config.MF_INVOICE_API.ORIGIN_URL + endpoint + '.json';

  request.get(uri, {
    headers: {
      Authorization: 'BEARER ' + token,
    }
  }, function(err, res, body) {
    var result = body && JSON.parse(body);
    if (!err && res.statusCode === 200) {
      cb(null, result);
    } else if(res.statusCode === 401) {
      cb(401);
    } else {
      var errIs = 'Error request. err is ' + err + '.';
      var statusCodeIs = ' Status code is ' + res.statusCode + '.';
      var errContent = result && result.errors && JSON.stringify(result.errors);
      cb(errIs + statusCodeIs + errContent);
    }
  });
}

module.exports = get;
