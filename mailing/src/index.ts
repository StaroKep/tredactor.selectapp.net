import express from 'express';
import bodyParser from 'body-parser';

import registration from 'src/handlers/registration';

const app = express();
app.use(bodyParser.json());

registration(app);

app.listen(60015, function() {
    console.log('Example app listening on port 60015!');
});
