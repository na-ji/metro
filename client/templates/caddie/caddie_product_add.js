AutoForm.addHooks('insertCaddieProductForm', {
	onSuccess: function(operation, result, template) {
		console.log(operation);
		console.log(result);
		console.log(template);
		console.log(this);
		Router.go("caddieShow", {_id: this.docId});
	}
});
