var request = require('request');
var config = require('config');
var endpoints = require('../lib/endpoints.js');

function create(token, id, cb) {
  if (!token || !id || !cb) {
    cb('Failed arguments.');
    return;
  }

  var endpoint = config.MF_INVOICE_API.ENDPOINT && config.MF_INVOICE_API.ENDPOINT.BILLINGS || endpoints.BILLINGS;
  var uri = config.MF_INVOICE_API.ORIGIN_URL + endpoint + '/' + id + '/posting';

  request.post(uri, {
    headers: {
      Authorization: 'BEARER ' + token,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }, function(err, res, body) {
    if (!err && res.statusCode === 200) {
      cb(null);
    } else if(!err && res.statusCode === 401) {
      cb(401);
    } else {
      cb('Error request. err is ' + err + '. Status code is ' + res.statusCode);
    }
  });
}

module.exports = create;
