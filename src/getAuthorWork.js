const { getBookData } = require('./getBookData')
const { getMagazineData } = require('./getMagazineData')

const getAuthorWork = email => {
    return new Promise(async resolve => {
        const bookData = await getBookData()
        const magazineData = await getMagazineData()

        const books = bookData.filter(book => book.authors.split(',').findIndex(author => author == email) != -1)
        const magazines = magazineData.filter(magazine => magazine.authors.split(',').findIndex(author => author == email) != -1)

        const work = [...books, ...magazines]

        resolve(work)
    })
}

module.exports = {
    getAuthorWork: getAuthorWork
}