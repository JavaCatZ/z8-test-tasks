Z8.define('org.zenframework.z8.template.controls.XML', {
	extend: 'Z8.form.field.TextArea',
	
	completeRender: function() {
		Z8.form.field.TextArea.prototype.completeRender.call(this);
		
		if(this.document) 
		{
			if(this.nextSibling) {
				DOM.remove(this.nextSibling);
			}
			
			var codeEditor = CodeMirror.fromTextArea(this, {mode: "xml", value: this.getValue()});
			
			codeEditor.on('change', () => {
				DOM.setProperty(this, 'value', codeEditor.getValue());
			});
		}
	}
});