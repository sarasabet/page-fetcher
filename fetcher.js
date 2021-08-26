const args = process.argv.slice(2)
const url = args[0];
const filePath = args[1];

const fs = require('fs')
const request = require('request');
request(url, (error, response, body) => {
  console.log('error', error);
  console.log('statusCode;', response && response.statusCode);
  writeOnfilles(body)
})

const writeOnfilles = (content) => {
  fs.appendFile('./test.txt', content, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log("file written successfully")
  })
};  

