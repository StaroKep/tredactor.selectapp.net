import express from 'express';
import bodyParser from 'body-parser';

import root from 'handlers/root';
import user from 'handlers/user';
import article from 'handlers/article';

const app = express();
app.use(bodyParser.json());

root(app);
user(app);
article(app);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
