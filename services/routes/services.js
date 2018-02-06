const express = require('express')
const router  = express.Router()

const upload = require('multer')()

const extractText = require('../utils/extract-text')

router.post(
  '/',
  (req, res) => res.json({ success: true })
)

router.post('/extract-text', upload.single('doc'), async (req, res) => {
  if(req.file) {
    const text = await extractText(req.file.buffer)
    res.json({
      html: text.html,
      snippet: text.snippet,
      title: req.file.originalname.split('.')[0]
    })
  } else {
    res.json({ success: false })
  }
})

module.exports = router
