var products_list = {};

function product(id) {
	if (products_list[id] === undefined) {
		products_list[id] = Products.findOne(id);
	}
	return products_list[id];
}

function priceWithVat(product) {
	return (product.price*(1 + product.vat/100)).toFixed(2);
}

function totalPrice(products) {
	for (var i = products.length - 1, total = 0, item; i >= 0; i--) {
		item  = product(products[i].product);
		total += products[i].quantity * priceWithVat(item);
	};
	return total.toFixed(2);
}

function totalSellPrice(products) {
	for (var i = products.length - 1, total = 0, item; i >= 0; i--) {
		item  = product(products[i].product);
		total += products[i].quantity * item.unitNumber * item.unitSellPrice;
	};
	return total.toFixed(2);
}

Template.caddieShow.helpers({
	product: function() {
		return product(this.product);
	},
	totalPrice: function() {
		return totalPrice(this.products);
	},
	totalSellPrice: function() {
		return totalSellPrice(this.products);
	},
	profit: function() {
		return (totalSellPrice(this.products) - totalPrice(this.products)).toFixed(2);
	},
	totalQuantity: function() {
		for (var i = this.products.length - 1, total = 0, item; i >= 0; i--) {
			item  = product(this.products[i].product);
			total += this.products[i].quantity * item.unitNumber;
		};
		return total;
	}
});
