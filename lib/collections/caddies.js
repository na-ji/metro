Caddies = new Mongo.Collection("caddie");

Caddies.allow({
	update: function() { return true; },
	remove: function() { return true; },
	insert: function() { return true; },
});

var CaddieSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Nom",
        max: 200
    },
    products: {
        type: [Object],
        optional: true,
        label: "Produits"
    },
    "products.$.product": {
        type: String,
        optional: true,
        label: "Produit",
        // autoform: {
        //     options: function() {
        //         var products = Products.find().fetch(),
        //             choices = [];

        //         for (var i = products.length - 1; i >= 0; i--) {
        //             choices.push({label: products[i].name, value: products[i]._id});
        //         };

        //         console.log(choices);

        //         return choices;
        //     },
        //     // afFieldInput: {
        //     //     firstOption: "(Choisir un produit)"
        //     // }
        // }
    },
    "products.$.quantity": {
        type: Number,
        optional: true,
        label: "Quantité"
    },
    total: {
        type: Number,
        label: "Total",
        optional: true,
        min: 0
    },
});

Caddies.attachSchema(CaddieSchema);
