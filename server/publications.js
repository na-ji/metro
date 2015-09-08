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

Meteor.publish('caddies', function() {
        return Caddies.find();
    }
);
