const express = require('express')
// http://expressjs.com/fr/4x/api.html

const handleRequest = (request, response) => {
  console.log('Got a request on', request.url)
  response.json('OK')
}

const app = express()

app.get('/', handleRequest)

const afterServerStart = () => console.log('listening on port 3000')

app.listen(3000, afterServerStart)