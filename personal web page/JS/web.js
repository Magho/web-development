//text recall
/*------------------------------------------------------------------------------------------------------------------*/
var myInput = document.getElementById('input');
var myInput1 = document.getElementById('input1');

myInput.onfocus = function () {

	'use strict';
	//store place holder Attr in back Attr
	this.setAttribute('data-place', this.getAttribute('placeholder'));
	this.setAttribute('placeholder', '');
};

myInput.onblur = function () {

	'use strict';
	//store place holder Attr in back Attr
	this.setAttribute('placeholder', this.getAttribute('data-place'));
	this.setAttribute('data-place', '');
};


myInput1.onfocus = function () {

	'use strict';
	//store place holder Attr in back Attr
	this.setAttribute('place', this.getAttribute('placeholder'));
	this.setAttribute('placeholder', '');
};

myInput1.onblur = function () {

	'use strict';
	//store place holder Attr in back Attr
	this.setAttribute('placeholder', this.getAttribute('place'));
	this.setAttribute('place', '');
};
/*--------------------------------------------------------------------------------------------------------------------------*/

//text animation
/*--------------------------------------------------------------------------------------------------------------------------*/

var welcomeText = 'Welcome to my website I hope you a good time',
	
	i = 0;

window.addEventListener("load", function (evt) {

	'use strict';

	var welcomewriter = setInterval(function () {

		document.getElementById('welcomeStatement').textContent += welcomeText[i];//.innerHTML == .textContent
		i = i + 1;

		if (i > welcomeText.length - 1) {

			clearInterval(welcomewriter);
		}

	}, 100);

});
/*--------------------------------------------------------------------------------------------------------------------------*/

//password desigin
var mypass = document.getElementById('pass'),
	mypassicon = document.getElementById('passicon');

mypassicon.onclick = function () {

	'use strict';

	if (this.className === 'fa fa-eye') {

		mypass.setAttribute('type', 'text');
		this.className = 'fa fa-eye-slash';
	} else {

		mypass.setAttribute('type', 'password');
		this.className = 'fa fa-eye';
	}
};
/*--------------------------------------------------------------------------------------------------------------------------*/

//scroll up
/*--------------------------------------------------------------------------------------------------------------------------*/

var myupButton  = document.getElementById('up');

window.onscroll  = function () {

	'use strict';

	if (window.pageYOffset >= 400) {

		myupButton.style.display = 'block';
	} else {
		myupButton.style.display = 'none';
	}
};

myupButton.onclick = function () {

	'use strict';
	window.scrollTo(0, 0);
};

/*--------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------*/

//change class randomly
var slidelist = ["slider", "slider1", "slider2"],
	randomimg = Math.floor(Math.random() * slidelist.length);
document.getElementById('slideimg').setAttribute('class', slidelist[randomimg]);


/*--------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/

//live preview

/*document.getElementById('').onKeyup = function(){
	document.getElementById('').innerHTML = this.value;
}
*/
/*--------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/

//prevent contextmenu

document.addEventListener('contextmenu', function (e) {
	
	'use strict';

	e.preventDefault();
});
/*--------------------------------------------------------------------------------------------------------------------------*/

//clock preview
/*--------------------------------------------------------------------------------------------------------------------------*/

function showTime() {

	'use strict';

	var now = new Date(),
		hours = now.getHours(),
		minutes = now.getMinutes(),
		seconds = now.getSeconds();

	if (hours < 10) {hours = '0' + hours; }
	if (minutes < 10) {minutes = '0' + minutes; }
	if (seconds < 10) {seconds = '0' + seconds; }

	document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;
}

window.addEventListener("load", function (evt) {
	
	'use strict';

	setInterval(showTime, 500);

});
/*--------------------------------------------------------------------------------------------------------------------------*/


/*--------------------------------------------------------------------------------------------------------------------------*/

// slide show

var slideimg = document.getElementById('slideimg'),

	Images = [
	
	    "http://admusicfuel.com/wp-content/uploads/Music-Fuel-358-1700x600.jpg",
	    "Images/man.jpg",
	    "Images/train.jpg",
	    "Images/buildings.jpg"

    ];

function imageSlide() {

	'use strict';

	setInterval(function () {

		var rand = Math.floor(Math.random() * Images.length);
		slideimg.src = Images[rand];

	}, 3000);
}
imageSlide();
/*--------------------------------------------------------------------------------------------------------------------------*/

//hash identifier

/*if (window.location.hash){


	if (window.location.hash.indexof('mohamed') === 1){
		
		console.log("it is here");
	}else{

		console.log("oops");
	}
}

*/
/*--------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/

//redirect link

/*function redirect(url){	//<button onclick ="redirect('google.com')">click to go </button>

	window.location = url;
}*/
/*--------------------------------------------------------------------------------------------------------------------------*/
