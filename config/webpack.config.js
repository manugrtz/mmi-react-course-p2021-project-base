import path from 'path';

module.exports = {
  resolve: {
    alias: {
      'components': path.resolve(__dirname, '../src/components/'),
      'pages': path.resolve(__dirname, '../src/pages/'),
    },
  },
}
