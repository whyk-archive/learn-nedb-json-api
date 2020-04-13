const express = require('express')
const router = express.Router()
const db = require('../../../db/')

router.get('/', (req, res) => {
  const query = req.query.name ? { name: req.query.name } : {}
  db.find(query, (err, doc) => {
    if (err) console.error(err)
    else res.json(doc)
  })
})

router.post('/', (req, res) => {
  if (!req.headers['x-api-key']) {
    res.end('API KEYがありません')
    return
  }

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

router.delete('/', (req, res) => {
  if (!req.headers['x-api-key']) {
    res.end('API KEYがありません')
    return
  }

  db.remove({ name: req.query.name }, (err, _) => {
    if (err) res.end(err)
    else res.end('削除が完了しました')
  })
})

module.exports = router