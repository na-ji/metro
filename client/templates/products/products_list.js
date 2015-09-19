Template.productsList.helpers({
	products: function() {
		return Products.find({}, {sort: {type: -1, name: 1}});
	}
});
