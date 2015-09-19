AutoForm.addHooks('insertProductForm', {
	onSuccess: function() {
		Materialize.toast('Votre produit a bien été ajouté !', 4000);
		Router.go("productsList");
	}
});
