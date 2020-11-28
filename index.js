const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set(path.join(__dirname, '/views'))

app.get('/', (req, res) => {
  res.render('index')
})
app.listen(3000, () => {
  console.log('server is listening on port 3000')
})
