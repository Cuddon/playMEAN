'use strict';

//Setting up route
angular.module('books').config(['$stateProvider',
	function($stateProvider) {
		// Books state routing
		$stateProvider.
		state('books', {
			abstract: true,
			url: '/books',
			template: '<ui-view/>'
		}).
		state('books.list', {
			url: '',
			templateUrl: 'modules/books/views/list-books.client.view.html'
		}).
		state('books.create', {
			url: '/create',
			templateUrl: 'modules/books/views/create-book.client.view.html'
		}).
		state('books.view', {
			url: '/:bookId',
			templateUrl: 'modules/books/views/view-book.client.view.html'
		}).

			// e.g. the route:  http://192.168.1.1:3000/books/5540b040ee80904c2a9e9409/edit
		state('books.edit', {
			url: '/:bookId/edit',
			templateUrl: 'modules/books/views/edit-book.client.view.html'
		});
	}
]);