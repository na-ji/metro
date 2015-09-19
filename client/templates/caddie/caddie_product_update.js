AutoForm.addHooks('updateCaddieProductForm', {
	onSuccess: function(operation, result, template) {
		console.log(operation);
		console.log(result);
		console.log(template);
		console.log(this);
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
