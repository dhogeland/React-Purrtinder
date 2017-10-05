const port        = 3001,
      express     = require('express'),
      cors        = require('cors'),
      bodyParser  = require('body-parser'),
      serverCtrl  = require('./server/serverCtrl'),
      app         = express();


app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(`${__dirname}/public`));

app.get('/api/getCatPictures', serverCtrl.getCatPictures);

app.listen(port, () => {
  console.log('Server listening on ' + port);
});
