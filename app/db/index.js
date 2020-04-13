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

module.exports = db