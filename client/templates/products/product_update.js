AutoForm.addHooks('updateProductForm', {
	onSuccess: function(operation, result, template) {
		Materialize.toast('Votre produit a bien été mis à jour !', 4000);
		Router.go("/products");
	}
});
