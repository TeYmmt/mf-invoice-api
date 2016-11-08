var accessToken = require('./access-token');
var getParams = require('./lib/get-params.js');

var info = {};

function init(config, callback) {
  var params = getParams(config);
  accessToken.get(params, function (err, result) {
    var initInfo = {
      params: params,
      accessToken: (!err && result.access_token) || 'error',
      refreshToken: (!err && result.refresh_token) || 'error',
      expiresIn: (!err && result.expires_in) || 'error',
      createdAt: (!err && result.created_at) || 'error',
      scope: (!err && result.scope) || 'error',
    };
    info = initInfo;

    callback(err, info);
  });
}

function refreshInfo(err, newInfo) {
  info.accessToken = (!err && newInfo.access_token) || (info && info.access_token) || 'error';
  info.refreshToken = (!err && newInfo.refresh_token) || (info && info.refresh_token) || 'error';
  info.expiresIn = (!err && newInfo.expires_in) || (info && info.expires_in) || 'error';
  info.createdAt = (!err && newInfo.created_at) || (info && info.created_at) || 'error';
  info.scope = (!err && newInfo.scope) || (info && info.scope) || 'error';
}

var office = require('./src/office');
var partners = require('./src/partners');
var billings = require('./src/billings');

var mfInvoiceApi = {
  init: init,
  office: {
    get: function(cb) {
      office.get(info.accessToken, function(err, res) {
        if (err === 401) {
          accessToken.update(info.refreshToken, function(err, newInfo) {
            refreshInfo(err, newInfo);
            office.get(info.accessToken, function(err, res) {
              cb(err, res);
            };
          });
        } else {
          cb(err, res);
        }
      });
    },
  },
  partners: {
    create: function (cb) {
      partners.create(info.accessToken, function(err, res) {
        if (err === 401) {
          accessToken.update(info.refreshToken, function(err, newInfo) {
            refreshInfo(err, newInfo);
            partners.create(info.accessToken, function(err, res) {
              cb(err, res);
            };
          });
        } else {
          cb(err, res);
        }
      });
    },
    update: function (cb) {
      partners.update(info.accessToken, function(err, res) {
        if (err === 401) {
          accessToken.update(info.refreshToken, function(err, newInfo) {
            refreshInfo(err, newInfo);
            partners.update(info.accessToken, function(err, res) {
              cb(err, res);
            };
          });
        } else {
          cb(err, res);
        }
      });
    },
    getOne: function (cb) {
      partners.getOne(info.accessToken, function(err, res) {
        if (err === 401) {
          accessToken.update(info.refreshToken, function(err, newInfo) {
            refreshInfo(err, newInfo);
            partners.getOne(info.accessToken, function(err, res) {
              cb(err, res);
            };
          });
        } else {
          cb(err, res);
        }
      });
    },
  },
  billings: {
    create: function (cb) {
      billings.create(info.accessToken, function(err, res) {
        if (err === 401) {
          accessToken.update(info.refreshToken, function(err, newInfo) {
            refreshInfo(err, newInfo);
            billings.create(info.accessToken, function(err, res) {
              cb(err, res);
            };
          });
        } else {
          cb(err, res);
        }
      });
    },
    posting: function (cb) {
      billings.update(info.accessToken, function(err) {
        if (err === 401) {
          accessToken.update(info.refreshToken, function(err, newInfo) {
            refreshInfo(err, newInfo);
            billings.posting(info.accessToken, function(err) {
              cb(err);
            };
          });
        } else {
          cb(err);
        }
      });
    },
    getOne: function (cb) {
      billings.getOne(info.accessToken, function(err, res) {
        if (err === 401) {
          accessToken.update(info.refreshToken, function(err, newInfo) {
            refreshInfo(err, newInfo);
            billings.getOne(info.accessToken, function(err, res) {
              cb(err, res);
            };
          });
        } else {
          cb(err, res);
        }
      });
    },
  },
  getAccessToken: accessToken.get,
  updateAccessToken: accessToken.update,
  saveAccessToken: function(newParams, cb) {
    var params = (callback && newParams) || null;
    var callback = (!cb && newParams) || cb;
    accessToken.get(params || info.params, function(err, tokenInfo) {
      refreshInfo(err, tokenInfo);
      callback(err, info);
    });
  },
};

module.exports = mfInvoiceApi;
