Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/', {
	name: 'index',
});

Router.route('/products', {
	name: 'productsList',
	waitOn: function() { 
		return Meteor.subscribe('products'); 
	}
});

Router.route('/products/add', {
	name: 'productAdd',
	waitOn: function() { 
		return Meteor.subscribe('products'); 
	}
});
