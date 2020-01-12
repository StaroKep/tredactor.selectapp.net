import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import user from 'handlers/user';

import { DB } from 'db';

const app = express();
app.use(bodyParser.json());

user(app);

app.get('/', function(request: Request, response: Response) {
    DB.connect();
    response.send('Hello, world!');
    DB.end();
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
