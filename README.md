# Csv-Reader

## Software that reads CSV Data

### Live version at: https://prajjwal-csv-reader.herokuapp.com/

## Given files:
   * [`authors.csv`](data/authors.csv)
   * [`books.csv`](data/books.csv)
   * [`magazines.csv`](data/magazines.csv)

## Tasks
1. Software that reads the CSV data (of books, magazines, and authors)
2. Print out all books and magazines (on either console UI) with all their details (with a meaningful output format).
3. Find a book or magazine by its `isbn`.
4. Find all books and magazines by their author's email.
5. Print out all books and magazines with all their details sorted by title. This sort should be done for books and magazines together.
6. Add a book and a magazine to the data structure of your software and export it to a new CSV file.

## Walkthrought

1. Install all of the dependencies using npm


  ##### How to run the application(Devlopment Mode)?

  ```bash
  npm install && npm run dev
  ```
  ##### How to run the application(Production Mode)?

  ```bash
  npm install && npm run start
  ```

2. After running the command application will be hosted at `http://localhost:3000`
 
  * `http://localhost:3000/` Landing Page
  * `http://localhost:3000/bookByISBN`  Print Data about a particular book using its `isbn`
  * `http://localhost:3000/authorWorks` Print's all the book's and magazine's written by author in the console
  * `http://localhost:3000/SortedByTitle` Print's all the book's and magazine's in a sorted order based on their title in lexicographical order
  * `http://localhost:3000/addBook` Add's the data to a new CSV file. The Data is provided in the body section of the API as JSON Format
