Z8.define('org.zenframework.z8.template.controls.YouTubeVideoBlock', {
	extend: 'Z8.form.field.VideoDocument',
	tag: 'iframe',
	
	completeRender: function() {
		Z8.form.field.VideoDocument.prototype.completeRender.call(this);
		DOM.setAttribute(this.document,'name','YoutubeVideo');
		DOM.setAttribute(this.document, 'frameBorder', 0);
		DOM.setAttribute(this.document, 'allowfullscreen', true);
	}
});