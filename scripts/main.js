
var myimg = document.querySelector('img');

myimg.onclick = function(){
	var src = myimg.getAttribute('src');
	if (src === 'images/002.jpg') {
		myimg.setAttribute('src','images/001.jpg');
	}else if (src ==='images/001.jpg') {
		myimg.setAttribute('src','images/002.jpg');
	}
}

var loginbtn = document.getElementById('login');
var nameShow = document.getElementById('name');

function setUserName(){
	var myName = prompt('Please enter your name');
	localStorage.setItem('name',myName);
	nameShow.innerHTML = 'welcome, '+myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	nameShow.innerHTML = 'welcome, '+storedName;
}

loginbtn.onclick =function(){
	setUserName();
}