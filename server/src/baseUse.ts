import Koa from 'koa'

const app = new Koa()

app.use(async (context, next) => {
    try {
        await next()
    } catch (error: any) {
        context.body = `出错了,${error}`;
    }
})

app.use(async(context, next) => {
    context.set('X-Response-Time', `${new Date().getTime()}`);
    context.set({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'GET,POST'
    })
    await next()
    console.log('finish')
})

app.use(async (context) => {
    console.log('set body')
    context.body = 'Hello Koa';
})

app.listen(3000, () => {
    console.log('正在监听 3000')
})