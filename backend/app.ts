import express from 'express';
import * as http from 'http';
import * as bodyparser from 'body-parser';
import cookieParser = require('cookie-parser');
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors'
import debug from 'debug';
import * as dotenv from 'dotenv';

import { database } from "./src/models";
import { CommonRoutesConfig } from './src/common/common.routes.config';
import { UsersRoutes } from './src/routes/users.routes.config';

dotenv.config();

database.sync()
    .then(() => debugLog("connected to db"))            
    .catch((err) => debugLog(err));   
    
const app: express.Application = express();
const server: http.Server = http.createServer(app);
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');
const port = process.env.APP_PORT || 3000;

app.use(bodyparser.json());
app.use(cors(
    {
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization'],
        credentials: true,
        methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
        origin: "http://localhost:3000",
        preflightContinue: false,
    }
));
app.use(cookieParser());

app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

routes.push(new UsersRoutes(app));

app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));


app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server running at http://localhost:${port}`)
});

server.listen(port, () => {
    debugLog(`Server running at http://localhost:${port}`);
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
});