Template.afRadioGroup_metro.inheritsHelpersFrom("afRadioGroup_materialize");
Template.afRadioGroup_metro.inheritsEventsFrom("afRadioGroup_materialize");

Template.afFileUpload_metro.inheritsHelpersFrom("afFileUpload");
Template.afFileUpload_metro.inheritsEventsFrom("afFileUpload");
Template.afFileUpload_metro.inheritsHooksFrom("afFileUpload");
Template.afFileUpload_metro.replaces("afFileUpload");

Template.fileThumbImg_metro.inheritsHelpersFrom("afFileUploadThumbImg");
Template.fileThumbImg_metro.inheritsEventsFrom("afFileUploadThumbImg");
Template.fileThumbImg_metro.inheritsHooksFrom("afFileUploadThumbImg");
Template.fileThumbImg_metro.replaces("afFileUploadThumbImg");

Template.afRadioGroup_metro.helpers({
	itemAtts: function() {
		var atts;
		atts = _.clone(this.atts);
		atts.id = atts.id + "_" + this._id;
		if (this.selected) {
			atts.checked = 'checked';
		}
		return atts;
	}
});
