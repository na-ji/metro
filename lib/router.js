Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/', {
	name: 'index',
});

var waitOnCollections = function() {
	return [
		Meteor.subscribe('products'),
		Meteor.subscribe('images')
	];
};

Router.route('/products', {
	name: 'productsList',
	waitOn: waitOnCollections
});

Router.route('/products/add', {
	name: 'productAdd',
	waitOn: waitOnCollections
});
