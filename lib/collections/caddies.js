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
        label: "Produit"
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
    locked: {
        type         : Boolean,
        label        : "Verrouillé",
        optional     : true,
        defaultValue : false
    },
    lockedProducts: {
        type     : Object,
        label    : "Produits",
        optional : true,
        blackbox : true
    }
});

Caddies.attachSchema(CaddieSchema);
