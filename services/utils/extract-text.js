const textract = require('textract')

module.exports = file => {
  const toHtml = text => text.replace(/\n/g, '<br />')
  const toSnippet = text => text.replace(/\n/g, ' ').substring(0, 50)
  return new Promise((resolve, reject) => {
    textract.fromBufferWithName('testing.docx', file, { preserveLineBreaks: true }, (err, text) => {
      if(err) {
        reject(err)
      }
      resolve({
        html: toHtml(text),
        snippet: toSnippet(text)
      })
    })
  })
}
