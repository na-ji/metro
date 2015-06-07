function priceWithVat(product) {
	return (product.price*(1 + product.vat/100)).toFixed(2);
}

Template.productRow.helpers({
	priceWithVat: function() {
		return priceWithVat(this.product);
	},
	image: function() {
		return Images.findOne(this.product.picture);
	},
	total: function() {
		return (priceWithVat(this.product)*this.quantity).toFixed(2);
	}
});
