const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.use(function (req, res, next) {
  let time = new Date()
  const taiwan = time.toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
  if (req.url !== '/favicon.ico') {
    console.log(`${taiwan} | ${req.method} from ${req.originalUrl}`)
  }
  next();
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  const message = '列出全部 Todo'
  res.render('index', { message })
})

app.get('/new', (req, res) => {
  const message = '新增 Todo 頁面'
  res.render('new', { message })
})

app.get('/:id', (req, res) => {
  const message = '顯示一筆 Todo'
  res.render('detail', { message })
})

app.post('/', (req, res) => {
  const message = '新增一筆 Todo'
  res.render('index', { message })
})

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})