const Koa = require('koa');
const morgan = require('koa-morgan');
const cors = require('@koa/cors');

const chalk = require('chalk');
const router = require('./router');
const app = new Koa();
const PORT = 3001;

app.use(morgan('dev'));
app.use(cors());

app.use(router.routes());
app.use(router.allowedMethods());

(function bootstrap() {
  try {
    app.listen(PORT, () => {
      console.log(
        chalk.cyanBright(`Server running in http://localhost:${PORT} 🚀`)
      );
    });
  } catch (error) {
    console.log(chalk.bgRed(error));
  }
})();
