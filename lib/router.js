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

Router.route('/products/:_id/edit', {
	name: 'productUpdate',
	waitOn: waitOnCollections,
	data: function() { return Products.findOne(this.params._id); }
});
