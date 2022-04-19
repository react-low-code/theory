import Koa from 'koa'

const app = new Koa()

app.use(context => {
    context.body = 'Hello Koa';
})

app.listen(3000)
app.listen(3001)