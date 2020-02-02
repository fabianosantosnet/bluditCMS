
if(window.location.href.indexOf('videos.html') != -1) //prevent script running all the time
{
	// Find all the YouTube video embedded on a page by -> https://www.labnol.org/code/19452-embed-youtube-with-javascript
	var videos = document.getElementsByClassName("youtube");

	for (var i=0; i<videos.length; i++)
	{

	  var youtube = videos[i];

	  // Based on the YouTube ID, we can easily find the thumbnail image
	  var img = document.createElement("img");
	  img.setAttribute("src", "http://i.ytimg.com/vi/" + youtube.id + "/hqdefault.jpg");
	  img.setAttribute("class", "videoy-thumb");

	  // Overlay the Play icon to make it look like a video player
	  var circle = document.createElement("div");
	  circle.setAttribute("class","circle");

	  youtube.appendChild(img);
	  youtube.appendChild(circle);

	  // Attach an onclick event to the YouTube Thumbnail
	  youtube.onclick = function()
	  {
	    // Create an iFrame with autoplay set to true
	    var iframe = document.createElement("iframe");
	    iframe.setAttribute("src","https://www.youtube.com/embed/" + this.id + "?autoplay=0&autohide=1&border=0&wmode=opaque?rel=0&enablejsapi=1&fs=1");
	    iframe.setAttribute("class","videoiframe");

	    // The height and width of the iFrame should be the same as parent
	    iframe.style.width  = this.style.width;

	    iframe.style.height = this.style.height;

	    // Replace the YouTube thumbnail with YouTube HTML5 Player
	    this.parentNode.replaceChild(iframe, this);

	  };
      }
}
