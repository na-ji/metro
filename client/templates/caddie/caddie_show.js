function product(id) {
	return Products.findOne(id);
}

function priceWithVat(product) {
	return (product.price*(1 + product.vat/100)).toFixed(2);
}

Template.caddieShow.helpers({
	product: function() {
		return product(this.product);
	},
	totalPrice: function() {
		for (var i = this.products.length - 1, total = 0, item; i >= 0; i--) {
			item = product(this.products[i].product);
			total   += this.products[i].quantity * priceWithVat(item);
		};
		return total.toFixed(2);
	}
});
