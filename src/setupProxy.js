const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.mymemory.translated.net',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
};