const app = require('./src/server');
const logger = require('morgan');

const port = process.env.PORT || 8080

app.use(logger('dev'));
app.listen(port);
