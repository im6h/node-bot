import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
require('dotenv').config();

// import router
import { router } from './crawl/router';

// config server
const main: express.Application = express();
main.use(morgan('dev'));
main.use(cors());
main.use('/api/v1', router);

export { main };
