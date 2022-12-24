//const path = require('path')

const defaultConfig = ({
  //root: path.resolve(__dirname, 'src'),
  //root: './src',
  resolve: {
    alias: {
      '~bootstrap': './node_modules/bootstrap'
      //path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  // server: {
    // port: 8080,
    // hot: true
  // }
});
export default defaultConfig;