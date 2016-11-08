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
      'content-type': 'application/json',
    }
  }, function(err, res, body) {
    if (!err && res.statusCode === 200) {
      cb(null, JSON.parse(body));
    } else if(res.statusCode === 401) {
      cb(401);
    } else {
      cb('Error request. err is ' + err + '. Status code is ' + res.statusCode);
    }
  });
}

module.exports = get;
