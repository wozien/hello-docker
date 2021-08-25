const app = require('express')()

app.get('*', (req, res) => {
  res.end('Hello Docker!')
}).listen(8080, () => console.log('Server listening on 8080...'))