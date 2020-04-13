const express = require('express')
const router = express.Router()
const db = require('../../../db/')

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