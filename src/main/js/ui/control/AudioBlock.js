Z8.define('org.zenframework.z8.template.controls.AudioBlock', {
	extend: 'Z8.form.field.Document',
	tag: 'audio',
	 
	setSource: function() {},
	
	completeRender: function() {
		Z8.form.field.Document.prototype.completeRender.call(this);
		
		if(this.document) {
			DOM.setAttribute(this.document, 'name', 'AudioBlock');
			DOM.setAttribute(this.document, 'controls', 'true');
		}
	}
});