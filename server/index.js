const express = require('express'),
    bodyParser = require('body-parser'),
    book_controllers = require('./controllers/book_controllers')

const app = express();
app.use(bodyParser.json());

//Each one of these endpoints reference the controller JS file with the methods 
// contained there on
// Best practice is to the path as similar as you can
// the end points will filter the decision by the method/function used
app.post(`/api/books`, book_controllers.create)

app.get(`/api/books`, book_controllers.read)

app.put(`/api/books/:id`, book_controllers.update)

app.delete(`/api/books/:id`, book_controllers.delete)


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on: ${PORT}`));