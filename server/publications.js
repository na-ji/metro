// Meteor.publish('products', function() {
// 	return Products.find();
// });

Meteor.publish('images', function() {
	return Images.find();
});

Meteor.publishComposite('products', {
    find: function() {
        return Products.find();
    },
    children: [
        {
            find: function(product) {
                return Images.find(
                    { _id: product.picture }
                );
            }
        }
    ]
});

Meteor.publishComposite('caddies', {
    find: function() {
        return Caddies.find();
    },
    children: [
        {
            find: function(caddie) {
            	if (caddie.products !== undefined) {
	            	var or = {$or: []};
	            	for (var i = caddie.products.length - 1; i >= 0; i--) {
	            		or.$or.push({_id: caddie.products[i].product});
	            	};
	                return Products.find(or);
                }
                return null;
            }
        }
    ]
});
