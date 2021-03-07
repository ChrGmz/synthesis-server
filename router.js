const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const router = new Router();

const {
  getSampleNames,
  getSampleByName,
} = require('./controllers/controllers');

router.get('/samples', getSampleNames);
router.get('/samples/:category/:name', getSampleByName);

module.exports = router;
