'use strict';

// Configuring the Books module
angular.module('books').run(['Menus',
	function(Menus) {
		// Add the Books dropdown item
		Menus.addMenuItem('topbar', {
			title: 'Books',
			state: 'books',
			type: 'dropdown'
		});

		// Add the dropdown list item
		Menus.addSubMenuItem('topbar', 'books', {
			title: 'List Books',
			state: 'books.list'
		});

		// Add the dropdown create item
		Menus.addSubMenuItem('topbar', 'books', {
			title: 'Create Book',
			state: 'books.create'
		});
	}
]);