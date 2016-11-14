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

var office = require('./office');
var partners = require('./partners');
var billings = require('./billings');

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
            });
          });
        } else {
          cb(err, res);
        }
      });
    },
  },
  partners: {
    create: function (params, cb) {
      partners.create(info.accessToken, params, function(err, res) {
        if (err === 401) {
          accessToken.update(info.refreshToken, function(err, newInfo) {
            refreshInfo(err, newInfo);
            partners.create(info.accessToken, params, function(err, res) {
              cb(err, res);
            });
          });
        } else {
          cb(err, res);
        }
      });
    },
    update: function (id, params, cb) {
      partners.update(info.accessToken, id, params, function(err, res) {
        if (err === 401) {
          accessToken.update(info.refreshToken, function(err, newInfo) {
            refreshInfo(err, newInfo);
            partners.update(info.accessToken, id, params, function(err, res) {
              cb(err, res);
            });
          });
        } else {
          cb(err, res);
        }
      });
    },
    getOne: function (id, cb) {
      partners.getOne(info.accessToken, id, function(err, res) {
        if (err === 401) {
          accessToken.update(info.refreshToken, function(err, newInfo) {
            refreshInfo(err, newInfo);
            partners.getOne(info.accessToken, id, function(err, res) {
              cb(err, res);
            });
          });
        } else {
          cb(err, res);
        }
      });
    },
    delete: function (id, cb) {
      partners.delete(info.accessToken, id, function(err, res) {
        if (err === 401) {
          accessToken.update(info.refreshToken, function(err, newInfo) {
            refreshInfo(err, newInfo);
            partners.delete(info.accessToken, id, function(err, res) {
              cb(err, res);
            });
          });
        } else {
          cb(err, res);
        }
      });
    },
  },
  billings: {
    create: function (params, cb) {
      billings.create(info.accessToken, params, function(err, res) {
        if (err === 401) {
          accessToken.update(info.refreshToken, function(err, newInfo) {
            refreshInfo(err, newInfo);
            billings.create(info.accessToken, params, function(err, res) {
              cb(err, res);
            });
          });
        } else {
          cb(err, res);
        }
      });
    },
    posting: function (id, cb) {
      billings.posting(info.accessToken, id, function(err) {
        if (err === 401) {
          accessToken.update(info.refreshToken, function(err, newInfo) {
            refreshInfo(err, newInfo);
            billings.posting(info.accessToken, id, function(err) {
              cb(err);
            });
          });
        } else {
          cb(err);
        }
      });
    },
    cancelPosting: function (id, cb) {
      billings.cancelPosting(info.accessToken, id, function(err) {
        if (err === 401) {
          accessToken.update(info.refreshToken, function(err, newInfo) {
            refreshInfo(err, newInfo);
            billings.cancelPosting(info.accessToken, id, function(err) {
              cb(err);
            });
          });
        } else {
          cb(err);
        }
      });
    },
    getOne: function (id, cb) {
      billings.getOne(info.accessToken, id, function(err, res) {
        if (err === 401) {
          accessToken.update(info.refreshToken, function(err, newInfo) {
            refreshInfo(err, newInfo);
            billings.getOne(info.accessToken, id, function(err, res) {
              cb(err, res);
            });
          });
        } else {
          cb(err, res);
        }
      });
    },
    delete: function (id, cb) {
      billings.delete(info.accessToken, id, function(err) {
        if (err === 401) {
          accessToken.update(info.refreshToken, function(err, newInfo) {
            refreshInfo(err, newInfo);
            billings.delete(info.accessToken, id, function(err) {
              cb(err);
            });
          });
        } else {
          cb(err);
        }
      });
    },
  },
  getAccessToken: accessToken.get,
  updateAccessToken: accessToken.update,
};

module.exports = mfInvoiceApi;
