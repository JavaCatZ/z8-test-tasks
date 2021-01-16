Z8.define('org.zenframework.z8.template.controls.XML', {
	extend: 'Z8.form.field.TextArea',
	
	validate: function() {	
		if(this && DOM.getChildAt(this, 1)) {
			if(DOM.getChildAt(this, 2))
			{
				DOM.remove(DOM.getChildAt(this, 2));
			}
			
			var codeEditor = CodeMirror.fromTextArea(DOM.getChildAt(this, 1), { mode: "xml", lineNumbers: true });
			codeEditor.setValue(this.value ? this.value : '');
				
			codeEditor.on('change', () => {
				this.value = codeEditor.getValue();
			})
		}
	}
});