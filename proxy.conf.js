const proxy = [
    {
      context: '/api',
      target: 'http://interno.seat.ind.br:40000/setores/v1',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;