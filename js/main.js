function setup()
{
	loadJSON("feed.json", phone, 'jsonp');
	$("#first").html("This is not good");
}

function phone(input)
{	
	document.write(input.methodSuccess);
	//$("#first").html(input.feeds[0].layout);
	// for (var i = 0; i < data.length; i++)
	// {
	// 	document.write(data.methodSuccess);
	// }
}
// function load() {
// 	var mydata = JSON.parse(data);
// 	alert(mydata.feeds[1].layout);
// }
