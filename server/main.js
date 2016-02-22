import express from 'express'

let app = new express()

app.get('/', (req, res) => {
    res.render('./../app/index.ejs', {})
})
.use(express.static(`${__dirname}/../build`))
.listen(7777)

console.log(__dirname + '/../')