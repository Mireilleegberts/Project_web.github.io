/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var profileButton = document.querySelector('header button:nth-of-type(1)');
var menu = document.querySelector('header nav');

var zoekbtn = document.querySelector('header button:nth-of-type(2)');
var filter = document.querySelector('header form');

profileButton.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.toggle('show');
    
});

zoekbtn.addEventListener('click', function (e) {
    e.preventDefault();
    filter.classList.toggle('showFilter');
    
});

