import http from 'http';

import app from './index';

const debug = console.log;

let currentApp = app.callback();
const server = http.createServer(currentApp);

const PORT = 8001;
const HOST = 'localhost';

server.listen(PORT, () => {
  debug(`Server running at http://${HOST}:${PORT} env:${process.env.NODE_ENV}`);
});

if (module.hot) {
  console.log('module.hot')
  module.hot.accept('./index.tsx', () => {
    console.log('changed');
    server.removeListener('request', currentApp);
    currentApp = app.callback();
    server.on('request', currentApp);
  });
}