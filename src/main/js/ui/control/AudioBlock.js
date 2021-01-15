Z8.define('org.zenframework.z8.template.controls.AudioBlock', {
	extend: 'Z8.form.field.Text',
	tag: 'audio',
	 
	completeRender: function() {
		Z8.form.field.Text.prototype.completeRender.call(this);
		DOM.setAttribute(this.document, 'name', 'AudioBlock');	
	}
});