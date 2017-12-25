const Koa = require('koa');
const Router = require('koa-router');
const router = Router();
const app = new Koa();



router.get('/abc', async ctx => {
  console.log(knex.select('name').from('test'))
});

app.use(router.routes())
app.use(router.allowedMethods())

const port = 3000
app.listen(port, () => {
  console.log('Start http://localhost:' + port)
});