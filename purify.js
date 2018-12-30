const purify = require('purify-css')
const { readFile } = require('fs')
let css = ''

let options = {
  output: './src/assets/css/style.css'
}

readFile(path, 'utf8', (err, data) => {
  if (!err && content) {
    readFile('./node_modules/bootstrap/dist/css/bootstrap.css', 'utf8', (err, data) => {
      if (!err && data) {
        css += data
        readFile('./src/assets/css/addons.css', 'utf8', (err, data) => {
          if (!err && data) {
            css += data
            purify(content, css, options)
          } else {
            console.log(err)
          }
        })
      } else {
        console.log(err)
      }
    })
  } else {
    console.log(err)
  }
})
