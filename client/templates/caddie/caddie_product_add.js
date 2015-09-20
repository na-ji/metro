AutoForm.addHooks('insertCaddieProductForm', {
	onSuccess: function(operation, result, template) {
		Materialize.toast('Le produit a bien été ajouté !', 4000);
		Router.go("caddieShow", {_id: this.docId});
	}
});
