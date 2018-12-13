const express = require('express')
const app = express()
const port = 3000

const counter = require('./counter')
app.get('*', (req, res) => res.send("Hellow Israel"+counter.getCounter()))
app.post('*', (req, res) => res.send(counter.increment()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
