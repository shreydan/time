function updateTime() {
	var time = new Date();
	var hours = time.getHours();
	var mins = time.getMinutes();
	var meridian = "AM";

	if (hours > 11) {
		hours -= 12;
		meridian = "PM"
	}
	
	if (hours > 19) {
		document.body.style.backgroundColor = "black";
		document.getElementById("time").style.color = "white";
		document.getElementById("today").style.color = "white";
	}
	
	if (hours < 10)
		hours = "0" + hours;

	if (mins < 10) 
		mins = "0" + mins;

	if (hours == 0)
		hours = "12";
	
	var timeText = hours + " : " + mins + " " + meridian;
	document.getElementById("time").innerHTML =  timeText;
}

function updateToday() {
	var time = new Date();
	months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	var monthNum = time.getMonth();
	var month = months[parseInt(monthNum)];
	var date = time.getDate();
	var year = time.getFullYear();

	var todayText = date + " " + month + " " + year;
	document.getElementById("today").innerHTML = todayText;
}

function updateAll() {
	updateTime();
	updateToday();
	console.log("tick tock");
}


updateAll();
setInterval(updateAll,1000);
