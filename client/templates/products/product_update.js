AutoForm.addHooks('updateProductForm', {
	onSuccess: function() {
		Materialize.toast('Votre produit a bien été mis à jour !', 4000);
		Router.go("productsList");
	}
});
