Template.productAdd.helpers({
	vatChoices: function() {
		return {
			5.5: '5.5',
			10 : '10',
			20 : '20'
		};
	},
	unitChoices: function() {
		return {
			'Piece' : 'Piece', 
			'Pack' : 'Pack', 
			'Paquet' : 'Paquet', 
			'Boîte' : 'Boîte'
		};
	}
});
