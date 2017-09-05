/*<?php

session_start();
$name;
function report()
{
    if(isset($_SESSION['username'])){

        $name = $_SESSION['username']; 
    }
}

?>*/


var left = document.getElementById('left'),
    right = document.getElementById('right'),
    images = [

        'url(../Images/1.jpg)',
        'url(../Images/2.jpg)',
        'url(../Images/3.jpg)',
        'url(../Images/Services.jpg)',
        'url(../Images/login.jpg)'
    ];

function imageSlide(what) {

    'use strict';

    setInterval(function () {

        var rand = Math.floor(Math.random() * images.length);
        what.style.backgroundImage = images[rand];
        what.style.transition = 'all 3s ease-in-out';

    }, 10000);
}
imageSlide(left);
imageSlide(right);

/**--------------------------------------------------------------------Like -----------------------------------------------------**/

var buttonLike = document.getElementById('buttonLike'),
    spanButtonLike = document.getElementById('spanButtonLike'),
    i = 0,
    buttondisLike = document.getElementById('buttondisLike'),
    spanButtondisLike = document.getElementById('spanButtondisLike'),
    j = 0;

buttonLike.onclick = function () {

    'use strict';

    if (i >= 999) {

        spanButtonLike.textContent = (i + 1) / 1000;
        spanButtonLike.textContent = spanButtonLike.textContent + 'K';
        i = i + 1;

    } else {

        spanButtonLike.textContent = i + 1;
        i = i + 1;
    }

};

buttondisLike.onclick = function () {

    'use strict';

    if (i >= 999) {

        spanButtondisLike.textContent = (i + 1) / 1000;
        spanButtondisLike.textContent = spanButtondisLike.textContent + 'K';
        i = i + 1;

    } else {

        spanButtondisLike.textContent = i + 1;
        i = i + 1;
    }

};

/**--------------------------------------------------------------------Like -----------------------------------------------------**/

/**--------------------------------------------------------------------add Product -----------------------------------------------------**/

var addobject = document.getElementById('addobject'),
    addButton = document.getElementById('addButton'),
    pushObject = document.getElementById('pushObject'),
    products = document.getElementById('products'),
    one = document.getElementById('1'),
    two = document.getElementById('2'),
    three = document.getElementById('3'),
    four = document.getElementById('4'),
    five = document.getElementById('5'),
    six = document.getElementById('6'),
    counterbuttonLike = 0,
    buttonLikeID = 'buttonLike' + counterbuttonLike,
    counterspanbuttonLike = 0,
    spanButtonLikeID = 'spanButtonLike' + counterspanbuttonLike,
    counterbuttondisLike = 0,
    buttondisLikeID = 'buttondisLike' + counterbuttondisLike,
    counterspanbuttondisLike = 0,
    spanButtondisLikeID = 'spanButtondisLike' + counterspanbuttondisLike;

var func1 = function (a) {
    'use strict';
    a.textContent =  parseInt(a.textContent, 10) + 1;

};

pushObject.onclick = function () {

    'use strict';
    var products = document.getElementById('products'),
        media = document.createElement('div'),
        medialeftright = document.createElement('div'),
        img  = document.createElement('img'),
        mediabody = document.createElement('div'),
        head = document.createElement('h3'),
        paragraph = document.createElement('p'),
        paragraph2 = document.createElement('p'),
        paragraph3 = document.createElement('p'),
        paragraph4 = document.createElement('p'),
        paragraph5 = document.createElement('p'),
        buttonLike = document.createElement('button'),
        spanButtonLike  = document.createElement('span'),
        buttondisLike = document.createElement('button'),
        spanButtondisLike  = document.createElement('span');

    if (products.style.display === 'none') {

        if (one.value !== '' && two.value !== '' && three.value !== '' && four.value !== '' && six.value !== '' && one.value !== ' ' && two.value !== ' ' && three.value !== ' ' && four.value !== ' ' && six.value !== ' ') {



            media.setAttribute('class', 'media');
            media.setAttribute('id', 'media');
            medialeftright.setAttribute('class', 'media-left media-middle');
            img.setAttribute('class', 'media-object mediaPhoto');
            mediabody.setAttribute('class', 'media-body');
            head.setAttribute('class', 'media-heading mediaHead');
            paragraph.setAttribute('class', 'mediaDescription');
            paragraph2.setAttribute('class', 'mediaDescription');
            paragraph3.setAttribute('class', 'mediaDescription');
            paragraph4.setAttribute('class', 'mediaDescription');
            paragraph5.setAttribute('class', 'mediaDescription');
            buttonLike.setAttribute('class', 'like btn btn-danger');
            counterbuttonLike = counterbuttonLike + 1;
            buttonLike.setAttribute('id', buttonLikeID);
            spanButtonLike.setAttribute('class', 'badge');
            counterspanbuttonLike = counterspanbuttonLike + 1;
            spanButtonLike.setAttribute('id', spanButtonLikeID);
            buttonLike.style.marginLeft = '150px';
            spanButtonLike.style.marginLeft = '3px';
            buttondisLike.setAttribute('class', 'like btn btn-primary');
            counterbuttonLike = counterbuttonLike + 1;
            buttondisLike.setAttribute('id', buttondisLikeID);
            spanButtondisLike.setAttribute('class', 'badge');
            counterspanbuttondisLike = counterspanbuttondisLike + 1;
            spanButtondisLike.setAttribute('id', spanButtondisLikeID);
            buttondisLike.style.marginLeft = '5px';
            spanButtondisLike.style.marginLeft = '3px';

            head.textContent = one.value;
            paragraph3.textContent = 'from : ' + two.value;
            paragraph2.textContent = 'price : ' + three.value + ' $';
            paragraph4.textContent = 'date : ' + four.value;
            paragraph5.textContent = 'edited by : ' + 'mohamed';
            buttonLike.textContent = 'Like';
            spanButtonLike.textContent = 0;
            buttondisLike.textContent = 'disLike';
            spanButtondisLike.textContent = 0;
            img.setAttribute('src', '../Images/1.jpg');
            paragraph.textContent = six.value;
            media.appendChild(medialeftright);
            medialeftright.appendChild(img);
            media.appendChild(mediabody);
            mediabody.appendChild(head);
            mediabody.appendChild(paragraph);
            mediabody.appendChild(paragraph2);
            mediabody.appendChild(paragraph3);
            mediabody.appendChild(paragraph4);
            mediabody.appendChild(paragraph5);
            media.appendChild(buttonLike);
            buttonLike.appendChild(spanButtonLike);
            media.appendChild(buttondisLike);
            buttondisLike.appendChild(spanButtondisLike);
            products.appendChild(media);


        }

        addobject.style.display = 'none';
        products.style.display = 'block';

        buttonLike.addEventListener('click', function () {
            func1(spanButtonLike);
        });
        
        buttondisLike.addEventListener('click', function () {
            func1(spanButtondisLike);
        });
        
        buttonLikeID = 'buttonLike' + counterbuttonLike;
        spanButtonLikeID = 'spanButtonLike' + counterspanbuttonLike;
        buttondisLikeID = 'buttondisLike' + counterbuttondisLike;
        spanButtondisLikeID = 'spanButtondisLike' + counterspanbuttondisLike;
    } else {
        products.style.display = 'none';
        addobject.style.display = 'block';
    }
};


addButton.onclick = function () {

    'use strict';
    if (addobject.style.display === 'none') {
        products.style.display = 'none';
        addobject.style.display = 'block';
        one.value = '';
        two.value = '';
        three.value = '';
        four.value = '';
        six.value = '';
        //five.value = '';
    } else {
        addobject.style.display = 'none';
        products.style.display = 'block';
    }
};

/**--------------------------------------------------------------------add Product -----------------------------------------------------**/
