import Koa from 'koa'
import Router from '@koa/router'
import compress from 'koa-compress'
import bodyParser from 'koa-bodyparser'
import koaStatic from 'koa-static'
import multer from '@koa/multer'


const app = new Koa()
const router = new Router()
const upload = multer({
    dest: '/uploads' // 指定文件的保存路径
});
router
    .get('/', (context) => {
        context.body = '我捕获根路径的get请求'
    })
    .get('/user', context => {
        context.body = '我捕获路径是/user的get请求'
    })
    .post('/user', context => {
        context.body = '我捕获路径是/user的post请求'
    })

router
    .get('/user/:id', (context) => {
        context.body = `我捕获路径是/user/xx形式的的get请求，路径上的参数是${context.params.id}`
    })
    .get('/user/:id/:local', (context) => {
        context.body = `我捕获路径是/user/xx/yy形式的的get请求，路径上的参数是${context.params.id}和${context.params.local}`
    })

 router
    .post(
        '/upload', 
        upload.single('file'),
        async (context, next) => {
            console.log('文件名:' + context.request.file.filename)
            console.log('文件路径:' + context.request.file.path)
            await next()
            
        }
    )

const studentRouter = new Router()
studentRouter
    .get('/:id', 
    async (context, next) => {
        console.log(context.params.id)
        await next()
    },
    (context) => {
        context.body = `我捕获路径为 /student/xx 形式的 get 请求,我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求我捕获路径为 /student/xx 形式的 get 请求`
    })

router.use('/student', studentRouter.routes(), studentRouter.allowedMethods())


app
    // .use(koaStatic(process.cwd()))
    .use(koaStatic(process.cwd() + '/static')) 
    .use(bodyParser())
    .use(compress({
        filter(content_type) {
            // 在响应的 Content-Type 中包含 text 时才压缩数据
            return /text/i.test(content_type)
        },
        threshold: 1028,
    }))
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3001)