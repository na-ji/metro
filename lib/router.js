Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'index'
});

var waitOnCollections = function () {
    return [
        Meteor.subscribe('products')
    ];
};

var waitOnAllCollections = function () {
    return $.merge(waitOnCollections, [Meteor.subscribe('caddies')]);
};

Router.route('/products', {
    name: 'productsList',
    waitOn: waitOnCollections
});

Router.route('/caddies', {
    name: 'caddiesList',
    waitOn: waitOnAllCollections
});

Router.route('/products/add', {
    name: 'productAdd',
    waitOn: waitOnCollections
});

Router.route('/caddies/add', {
    name: 'caddieAdd',
    waitOn: waitOnAllCollections
});

Router.route('/products/:_id/edit', {
    name: 'productUpdate',
    waitOn: waitOnCollections,
    data: function () {
        return Products.findOne(this.params._id);
    }
});

Router.route('/caddies/:_id/show', {
    name: 'caddieShow',
    waitOn: waitOnAllCollections,
    data: function () {
        return Caddies.findOne(this.params._id);
    }
});

Router.route('/caddies/:_id/add-product', {
    name: 'caddieProductAdd',
    waitOn: waitOnAllCollections,
    data: function () {
        return Caddies.findOne(this.params._id);
    }
});

Router.route('/caddies/:_id/update-product/:index', {
    name: 'caddieProductUpdate',
    waitOn: waitOnAllCollections,
    data: function () {
        return Caddies.findOne(this.params._id);
    }
});
