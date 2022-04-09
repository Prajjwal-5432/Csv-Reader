const { writeToPath } = require('@fast-csv/format');
const fs = require('fs');
const path = require('path')

const bookPath = path.join(__dirname, '../data/newBook.csv')

const addBook = ({ title, isbn, authors, description }) => {
    const res = [[title, isbn, authors, description]]
    return new Promise(resolve => {
        writeToPath(bookPath, res)
            .on('error', err => console.error(err))
            .on('finish', () => resolve(1));
    })
}

module.exports = {
    addBook: addBook
}