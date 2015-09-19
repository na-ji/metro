Products = new Mongo.Collection("products");

Products.allow({
	update: function() { return true; },
	remove: function() { return true; },
	insert: function() { return true; },
});

var ProductSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Nom",
        max: 200
    },
    vat: {
        type: Number,
        label: "TVA",
        decimal: true,
        allowedValues: [20, 10, 8.5, 5.5],
		autoform: {
			noselect: true,
		},
        min: 0
    },
    price: {
        type: Number,
        label: "Prix HT",
        decimal: true,
        min: 0
    },
    unit: {
        type: String,
        label: "Unité",
        max: 50,
        optional: true,
        allowedValues: ['Piece', 'Pack', 'Paquet', 'Boîte'],
		autoform: {
			noselect: true,
		},
        // RegEx: /piece|g|kg|Pack|Paquet|Boîte|Pot|Sachet/
    },
    unitNumber: {
        type: Number,
        label: "Nombre",
        decimal: false,
        min: 0
    },
    type: {
        type: String,
        label: "Type",
        max: 50,
        optional: true,
        allowedValues: ['Bouffe', 'Boisson'],
		autoform: {
			noselect: true,
		},
    },
    picture: {
        type: String,
        label: 'Photo',
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images',
                optional: true,
                accept: 'image/*'
            }
        }
    }
});

Products.attachSchema(ProductSchema);
