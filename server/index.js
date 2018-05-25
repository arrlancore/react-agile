'use strict';
import http from 'http';
import Tree from './TreeReader';
import app from './server';
const Pages = './common/pages';
var fs = require('fs');

const server = http.createServer(app);
Tree(Pages, (err, data) => {
  if (err) {
    throw err;
  }
  function imprt(filename, path) {
    return `import ${filename} from '../common/${path.join('/')}'\n`;
  }
  let text = '';
  data.forEach((item) => {
    text += imprt(item.filename, item.path);
  });
  fs.writeFile('./server/_tree.js', text, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved!');
  });
});
let currentApp = app;
server.listen(3000);

if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}
