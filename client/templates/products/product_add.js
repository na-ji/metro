AutoForm.addHooks('insertProductForm', {
	onSuccess: function(operation, result, template) {
		Materialize.toast('Votre produit a bien été ajouté !', 4000);
		Router.go("/products");
	}
});
