Template.caddieForm.helpers({
	productChoices: function() {
		var products = Products.find().fetch(),
			choices = [];

		for (var i = products.length - 1; i >= 0; i--) {
			choices.push({label: products[i].name, value: products[i]._id});
		};

		return choices;
	}
});
