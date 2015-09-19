Template.afRadioGroup_metro.inheritsHelpersFrom("afRadioGroup_materialize");
Template.afRadioGroup_metro.inheritsEventsFrom("afRadioGroup_materialize");

Template.afFileUpload_meteor.inheritsHelpersFrom("afFileUpload");
Template.afFileUpload_meteor.inheritsEventsFrom("afFileUpload");
Template.afFileUpload_meteor.inheritsHooksFrom("afFileUpload");
Template.afFileUpload_meteor.replaces("afFileUpload");

Template.fileThumbImg_meteor.inheritsHelpersFrom("afFileUploadThumbImg");
Template.fileThumbImg_meteor.inheritsEventsFrom("afFileUploadThumbImg");
Template.fileThumbImg_meteor.inheritsHooksFrom("afFileUploadThumbImg");
Template.fileThumbImg_meteor.replaces("afFileUploadThumbImg");

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
