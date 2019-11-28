

let myDiv = document.getElementById('container')
var intervalId = setInterval(function(){
	var randInt = Math.floor(Math.random() * 20)
	myDiv.innerHTML += '<div class="element">'+randInt+'</div>'
}, 5000);

