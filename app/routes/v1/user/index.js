const express = require('express')
const router = express.Router()
const Datebase = require('nedb')
const crypto = require('crypto')

const PASSWORD = 'hogehoge'

const db = new Datebase({
  afterSerialization: doc => {
    const cipher = crypto.createCipher('aes256', PASSWORD)
    let encrypted = cipher.update(doc, 'utf8', 'base64')
    encrypted += cipher.final('base64')
    return encrypted
  },
  beforeDeserialization: encrypted => {
    const decipher = crypto.createDecipher('aes256', PASSWORD)
    let doc = decipher.update(encrypted, 'base64', 'utf8')
    doc += decipher.final('utf8')
    return doc
  },
  filename: 'app/db/user.db'
})

db.loadDatabase(err => {
  if (err) console.error(err)

  console.log('load database completed.')
})

router.get('/', (_, res) => {
  db.find({}, (err, doc) => {
    if (err) console.error(err)
    else res.json(doc)
  })
})

router.post('/', (req, res) => {
  const user = {
    name: req.body.name,
    screen_name: req.body.screen_name,
    bio: req.body.bio
  }

  db.insert(user, (err, newDoc) => {
    if (err) res.end(err)
    else res.json(newDoc)
  })
})

module.exports = router