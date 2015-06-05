Template.productsList.helpers({
	products: function() {
		return Products.find();
	}
});
