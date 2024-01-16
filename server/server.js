const express = require('express')
const app = express();

app.get('/', (req, res) => {
    console.log('Hello World!')
    res.send('Hello WOrld')
})
app.listen(3000);