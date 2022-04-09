const express = require('express')
const { getBookData } = require('./getBookData')
const { getMagazineData } = require('./getMagazineData')
const { getBookByISBN } = require('./getBookByISBN')
const { getAuthorWork } = require('./getAuthorWork')
const { getSortedByTitle } = require('./getSortedByTitle')
const { addBook } = require('./addBook')
const ejs = require('ejs')

const app = express()

const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Home API
app.get('/', (req, res) => {
    res.render('pages/home')
})

//All Books and Magazine API
app.get('/all', async (req, res) => {
    try {
        let bookData = await getBookData()
        let magazineData = await getMagazineData()
        let data = []

        data.push(bookData)
        data.push(magazineData)

        res.render('pages/getAll', {
            data: data
        })
    } catch (error) {
        console.log(error)
    }
})

//API to Fetch particular book by its ISBN
//run-> localhost:3000/bookByISBN

app.get('/bookByISBN', async (req, res) => {
    res.render('pages/bookByISBN');
})

app.get('/book', async (req, res) => {
    if (!req.query.isbn) {
        return res.send({
            error: "ISBN cannot be Empty"
        })
    }
    try {
        const result = await getBookByISBN(req.query.isbn)
        if (!result.length) {
            return res.send({
                error: "Can't find this book please check your ISBN"
            })
        }
        res.json(result)
    } catch (error) {
        console.log(error)
    }
})


//API to Fetch all of authors book and magazine by their email
//run-> localhost:3000/authorWorks

app.get('/authorWorks', (req, res) => {
    res.render('pages/authorByEmail')
})
app.get('/author', async (req, res) => {
    if (!req.query.email) {
        return res.send({
            error: "Email field cannot be empty"
        })
    }
    try {
        let result = await getAuthorWork(req.query.email)
        if (!result.length) {
            return res.send({
                error: "Can't find the Email. Please Recheck"
            })
        }
        res.json(result)
    } catch (error) {
        console.log(error)
    }
})


//API to get all books and magazines by their titles
app.get('/sortedByTitle', async (req, res) => {
    try {
        const result = await getSortedByTitle()
        res.render('pages/sortedByTitle', {
            data: result
        })
    } catch (error) {
        console.log(error)
    }
})

app.post('/addBook', async (req, res) => {
    try {
        const result = await addBook(req.body)
        res.json({
            "message": "Records inserted"
        })
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log('Server is up and running on port ' + PORT)
})