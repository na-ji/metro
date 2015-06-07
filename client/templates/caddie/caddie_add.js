AutoForm.addHooks('insertCaddieForm', {
	onSuccess: function(operation, result, template) {
		Materialize.toast('Votre caddie a bien été ajouté !', 4000);
		Router.go("/caddies");
	}
});
