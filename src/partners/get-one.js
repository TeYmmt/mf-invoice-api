var request = require('request');
var config = require('config');
var endpoints = require('../lib/endpoints.js');

function getOne(token, id, cb) {
  if (!token || !id || !cb) {
    cb('Failed arguments.');
    return;
  }

  var endpoint = config.MF_INVOICE_API.ENDPOINT && config.MF_INVOICE_API.ENDPOINT.PARTNERS || endpoints.PARTNERS;
  var uri = config.MF_INVOICE_API.ORIGIN_URL + endpoint + '/' + id +'.json';

  request.get(uri, {
    headers: {
      Authorization: 'BEARER ' + token,
    }
  }, function(err, res, body) {
    var result = body && JSON.parse(body);
    if (!err && res.statusCode === 200) {
      cb(null, result);
    } else if(!err && res.statusCode === 401) {
      cb(401);
    } else {
      var errIs = 'Error request. err is ' + err + '.';
      var statusCodeIs = ' Status code is ' + res.statusCode + '.';
      var errContent = result && result.errors && JSON.stringify(result.errors);
      cb(errIs + statusCodeIs + errContent);
    }
  });
}

module.exports = getOne;
