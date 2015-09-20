AutoForm.addHooks('updateCaddieProductForm', {
	onSuccess: function(operation, result, template) {
		Materialize.toast('Le produit a bien été mis à jour !', 4000);
		Router.go("caddieShow", {_id: this.docId});
	}
});

Template.caddieProductUpdate.helpers({
	index: function() {
		console.log(Router.current().params);
		console.log(this);
		return Router.current().params.index;
	}
});
