// import required modules
const fs = require('fs')

// promise to write the generate html to a file, no need for a copy file here since no CSS sheet is being used. All styling is done with bootstrap
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if(err) {
                reject(err)
                return
            }

            resolve({
                ok: true,
                message: 'Team Profile Created!'
            })
        })
    })
}

module.exports = { writeFile }