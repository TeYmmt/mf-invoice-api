var request = require('request');
var config = require('config');
var endpoints = require('../lib/endpoints.js');

function update(token, id, params, cb) {
  if (!token || !id || !params || !cb) {
    cb('Failed arguments.');
    return;
  }

  if (!params || (params && params.departments && !params.departments.id)) {
    cb('Must be departments id.');
    return;
  }

  var endpoint = config.MF_INVOICE_API.ENDPOINT && config.MF_INVOICE_API.ENDPOINT.PARTNERS || endpoints.PARTNERS;
  var uri = config.MF_INVOICE_API.ORIGIN_URL + endpoint + '/' + id;

  request.patch(uri, {
    headers: {
      Authorization: 'BEARER ' + token,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      partner: params,
    }),
  }, function(err, res, body) {
    if (!err && res.statusCode === 200) {
      cb(null, JSON.parse(body));
    } else if(!err && res.statusCode === 401) {
      cb(401);
    } else {
      cb('Error request. err is ' + err + '. Status code is ' + res.statusCode);
    }
  });
}

module.exports = update;
