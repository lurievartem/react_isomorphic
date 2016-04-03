import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import { server as config } from '../config/server';

import controllers from './controllers';
import './database/mongo-db';

const app = new express();
const port = process.env.PORT || config.port || 3000;

app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(bodyParser.text({type: 'application/graphql'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

controllers(app);

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
});


