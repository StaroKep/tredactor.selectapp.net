import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import root from 'handlers/root';
import user from 'handlers/user';
import userAuth from 'handlers/user/auth';
import article from 'handlers/article';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

root(app);
user(app);
userAuth(app);
article(app);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
