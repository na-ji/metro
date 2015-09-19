function priceWithVat(product) {
	return (product.price*(1 + product.vat/100)).toFixed(2);
}

var i = 0;

Template.productRow.onRendered(function () {
	i = 0;
});

Template.productRow.helpers({
	priceWithVat: function() {
		return priceWithVat(this.product);
	},
	unitPrice: function() {
		return ((priceWithVat(this.product)) / this.product.unitNumber).toFixed(2);
	},
	image: function() {
		return Images.findOne(this.product.picture);
	},
	total: function() {
		return (priceWithVat(this.product)*this.quantity).toFixed(2);
	},
	index: function() {
		console.log(i);
		console.log(this);
		return i++;
	}
});
