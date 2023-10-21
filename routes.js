const {
    addBook,
    getAllBooks,
    getBookID,
    updateBookID,
    deleteBook
} = require('./handler');

const routes = [{
    method: 'POST',
    path: '/books',
    handler: addBook
},
{
    method: 'GET',
    path: '/books',
    handler: getAllBooks
},
{
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookID
},
{
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookID
},
{
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBook
}
];

module.exports = routes;