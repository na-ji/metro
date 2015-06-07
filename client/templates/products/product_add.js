Template.productAdd.helpers({
	vatChoices: function() {
		return [
			{label: "5.5", value: 5.5},
			{label: "10", value: 10},
			{label: "20", value: 20}
		];
	},
	unitChoices: function() {
		return {
			'Piece' : 'Piece', 
			'Pack' : 'Pack', 
			'Paquet' : 'Paquet', 
			'Boîte' : 'Boîte'
		};
	},
	typeChoices: function() {
		return {
			'Bouffe' : 'Bouffe',
			'Boisson' : 'Boisson',
		};
	}
});
