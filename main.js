const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const about = require("./routes/about")
const contact = require("./routes/contact")

const date = new Date().getFullYear()

app.set('view engine', 'ejs');
app.use(express.static('src'));

app.get('/', (req, res) => {
    res.render('index', {date:date});
})

app.use('/about', about)

app.use('/contact', contact)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})