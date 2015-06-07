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
