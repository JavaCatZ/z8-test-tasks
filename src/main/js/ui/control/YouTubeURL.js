Z8.define('org.zenframework.z8.template.controls.YouTubeURL', {
	extend: 'Z8.form.field.Text',
	
	validate: function() {
		var url = this.getValue();
		var videoBlock = DOM.selectNode(document, 'iframe[name="YoutubeVideo"]');
		
		if(url && videoBlock) {
			switch (true) {
				case (url.indexOf('watch?v=') !== -1):
					url = url.replace('watch?v=','embed/');
				break;
				case ((url.indexOf('.com') !== -1) && (url.indexOf('.com/embed/') === -1)):
					url = url.replace('.com','.com/embed');
				break;
				case (url.indexOf('youtu.be') !== -1):
					url = url.replace('youtu.be','www.youtube.com/embed');
				break;
			}
			
			DOM.setAttribute(videoBlock, 'src', url.slice(0, (url.indexOf('&') !== -1 ? url.indexOf('&') :  url.length)));
			videoBlock.outerHTML = videoBlock.outerHTML;
		}
	}
});