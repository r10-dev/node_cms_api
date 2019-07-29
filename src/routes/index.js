const bodyParser = require('body-parser');
const authors = require('../authors/authors.routes')

module.exports = (app, router) => {

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  });
  app.use('/api', authors);

}




