module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://test.my-site.com',
      },
    },
  },
};
