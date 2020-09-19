import express from 'express'
const app = express()
import bodyParser from 'body-parser'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000
const API_PATH = '/api/v1/'

import router from './routes/v1/'
app.use(API_PATH, router)

app.listen(PORT)
console.log(
  `
  Listening:
  user - http://localhost:${PORT}${API_PATH}user/
  `
);
