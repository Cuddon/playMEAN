'use strict';

module.exports = function(app) {
	var books = require('../controllers/books.server.controller');
	var booksPolicy = require('../policies/books.server.policy');

	// Books Routes
	app.route('/api/books').all()
		.get(books.list).all(booksPolicy.isAllowed)
		.post(books.create);

	app.route('/api/books/:bookId').all(booksPolicy.isAllowed)
		.get(books.read)
		.put(books.update)
		.delete(books.delete);

	// Finish by binding the Book middleware
	app.param('bookId', books.bookByID);
};