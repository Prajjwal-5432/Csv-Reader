const { getBookData } = require('./getBookData')
const { getMagazineData } = require('./getMagazineData')

const getSortedByTitle = () => {
    return new Promise(async resolve => {
        let bookData = await getBookData()
        let magazineData = await getMagazineData()

        let data = [...bookData, ...magazineData];

        data.sort(function (a, b) {
            const title1 = a["\ufefftitle"].toUpperCase()
            const title2 = b["\ufefftitle"].toUpperCase()

            if (title1 < title2) return -1
            if (title1 > title2) return 1
            return 0
        })

        resolve(data)
    })
}

module.exports = {
    getSortedByTitle: getSortedByTitle
}