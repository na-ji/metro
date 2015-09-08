AutoForm.addHooks('insertCaddieForm', {
	onSuccess: function() {
		Materialize.toast('Votre caddie a bien été ajouté !', 4000);
		Router.go("caddiesList");
	}
});
