function getParams(config) {
  return config && {
    originUrl: config.ORIGIN_URL || 'https://invoice.moneyforward.com',
    accessTokenUrl: config.ACCESS_TOKEN_URL || 'https://invoice.moneyforward.com/oauth/token',
    refreshTokenUrl: config.REFRESH_TOKEN_URL || 'https://invoice.moneyforward.com/oauth/token',
    clientId: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
    redirectUrl: config.REDIRECT_URL,
    authCode: config.AUTH_CODE,
  } || {
    originUrl: 'https://invoice.moneyforward.com',
    accessTokenUrl: 'https://invoice.moneyforward.com/oauth/token',
    refreshTokenUrl: 'https://invoice.moneyforward.com/oauth/token',
    clientId: '',
    clientSecret: '',
    redirectUrl: '',
    authCode: '',
  };
}

module.exports = getParams;
