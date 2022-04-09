const csv = require('csv-parser')
const fs = require('fs')
const path = require('path')

const magazinePath = path.join(__dirname, '../data/magazines.csv')

const getMagazineData = () => {
    let res = []
    return new Promise(resolve => {
        fs.createReadStream(magazinePath)
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
    getMagazineData: getMagazineData
}