var playlistid = "PLB512E1B41012D8EF"

var listlengthcheck = "http://gdata.youtube.com/feeds/api/playlists/"+playlistid+"?v=2&alt=jsonc&max-results=1&callback=listlength"
document.write('<scr'+'ipt type="text/javascript" src="' + listlengthcheck + '"></scr'+'ipt>');

function listlength (youtube) {
	var totalItems = Math.ceil(youtube.data.totalItems/10);
	var results = new Array("1","11","21","31","41","51","61","71","81","91","101","111","121","131","141","151","161","171","181","191");
	var index = results[Math.floor(Math.random() * totalItems)];
	var listurl = "http://gdata.youtube.com/feeds/api/playlists/"+playlistid+"?v=2&alt=jsonc&start-index="+index+"&max-results=10&callback=ylistrandom";  	
	document.write('<scr'+'ipt type="text/javascript" src="' + listurl + '"></scr'+'ipt>');
}

function ylistrandom (youtube) {
	var entries = youtube.data.items;	
	var src= entries[Math.floor(Math.random()*entries.length)].video.id;
	document.write('<embed src="http://www.youtube.com/v/' + src + '&hl=ja_JP&fs=1&" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="200" height="165"></embed>');
}