const { getBookData } = require('./getBookData')

const getBookByISBN = isbn => {
    return new Promise(async resolve => {
        let bookData = await getBookData()
        const result = bookData.filter(book => book.isbn === isbn)
        resolve(result)
    })
}

module.exports = {
    getBookByISBN: getBookByISBN
}