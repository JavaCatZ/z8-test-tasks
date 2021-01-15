Z8.define('org.zenframework.z8.template.controls.AudioFile', {
	extend: 'Z8.form.field.File',
	validate: function() {
		var audioBlock = DOM.selectNode(document, 'audio[name="AudioBlock"]');
		var audioFile = this.getValue();
		if(audioBlock && audioFile) 
		{
			if(audioFile.length)
			{
				console.log(audioFile[0]);
				DOM.setAttribute(audioBlock, 'src', audioFile[0].path + '?&session=' + Application.session);
				audioBlock.outerHTML = audioBlock.outerHTML;
			}
		}
	}
});