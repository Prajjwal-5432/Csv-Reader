const csv = require('csv-parser')
const fs = require('fs')
const path = require('path')

const bookPath = path.join(__dirname, '../data/books.csv')

const getBookData = () => {
    let res = []
    return new Promise(resolve => {
        fs.createReadStream(bookPath)
            .pipe(csv({ separator: ';' }))
            .on('data', data => {
                res.push(data)
            })
            .on('end', () => {
                resolve(res)
            })
    })
}

module.exports = {
    getBookData: getBookData
}