var request = require('request');
var config = require('config');
var endpoints = require('../lib/endpoints.js');

function create(token, params, cb) {
  if (!token || !params || !cb) {
    cb('Failed arguments.');
    return;
  }

  if (params && !params.name) {
    cb('Must be partners name.');
    return;
  }

  var endpoint = config.MF_INVOICE_API.ENDPOINT && config.MF_INVOICE_API.ENDPOINT.PARTNERS || endpoints.PARTNERS;
  var uri = config.MF_INVOICE_API.ORIGIN_URL + endpoint;

  request.post(uri, {
    headers: {
      Authorization: 'BEARER ' + token,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      partner: params,
    }),
  }, function(err, res, body) {
    if (!err && res.statusCode === 201) {
      cb(null, JSON.parse(body));
    } else if(!err && res.statusCode === 401) {
      cb(401);
    } else {
      cb('Error request. err is ' + err + '. Status code is ' + res.statusCode);
    }
  });
}

module.exports = create;
