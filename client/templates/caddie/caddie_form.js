Template.caddieForm.helpers({
	productChoices: function() {
		var products = Products.find({}, {sort: {type: 1, name: -1}}).fetch(),
			choices = [];

		for (var i = products.length - 1; i >= 0; i--) {
			choices.push({label: products[i].name, value: products[i]._id});
		};

		return choices;
	}
});
