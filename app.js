const app = require('./src/server');
const port = process.env.PORT || 3003

app.listen(port, _ => console.log(`App listening port ${port}`));
