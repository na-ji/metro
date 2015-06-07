Template.productCard.helpers({
	priceWithVat: function() {
		return (this.price*(1 + this.vat/100)).toFixed(2);
	},
	image: function() {
		return Images.findOne(this.picture);
	}
});
