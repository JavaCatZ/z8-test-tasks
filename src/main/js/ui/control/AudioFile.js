Z8.define('org.zenframework.z8.template.controls.AudioFile', {
	extend: 'Z8.form.field.File',
	validate: function() {
		var audioBlock = DOM.selectNode(document, 'audio[name="AudioBlock"]');
		var audioFile = this.getValue();
		if(audioBlock && audioFile) 
		{
			if(audioFile.length)
			{
				DOM.setAttribute(audioBlock, 'src', encodeURI((window._DEBUG_ ? '/' : '') + audioFile[0].path.replace(/\\/g, '/')) +
						'?&session=' + Application.session + (audioFile[0].id != null ? '&id=' + audioFile[0].id : ''));
				audioBlock.outerHTML = audioBlock.outerHTML;
			}
		}
	}
});