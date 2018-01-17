let books = [];
let id = 0;

module.exports = {

    //CREATE -> POST
    create: (req, res, next) => {
        //increment id to add a unique id to each book
        id++
        //assigning the new object created the title/author off the body that was sent off the request
        let book = {
            id: id,
            title: req.body.title,
            author: req.body.author
        }
        books.push(book);
        res.status(200).send(`Book added successfully`);
    },

    //READ -> GET
    read: (req, res, next) => {
        res.status(200).send(books)
    },

    //UPDATE -> PUT
    update: function (req, res, next) {
        let bookID = parseInt(req.params.id);
        // console.log(bookID);
        let bookToUpdate;
        let index;
        for (let i = 0; i < books.length; i++) {
            if (books[i].id === bookID) {
                bookToUpdate = books[i]
                index = i;
            }
        }
            books[index].title = req.body.title,
            books[index].author = req.body.author
        res.status(200).send('Book updated successfully');
    },

    //DELETE -> DELETE
    delete: function (req, res, next) {
        // let deleteBookID = req.params.id;
        // let index = books.indexOf(book => book.id === deleteBookID)
        // books.splice(book, 1)
        books = books.filter((book) => {
            return book.id !== parseInt(req.params.id)
        })
        res.status(200).send('Book deleted');
    }
}