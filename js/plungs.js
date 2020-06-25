var bars = document.getElementById('bars'),
    bar1 = document.getElementById('bar1'),
    bar2 = document.getElementById('bar2'),
    bar3 = document.getElementById('bar3'),
    nav = document.getElementById('nav'),
	nav_b = document.getElementById('nav_bar');
bars.onclick = function () {
    'use strict';
    bar1.classList.toggle('top');
    bar2.classList.toggle('mid');
    bar3.classList.toggle('bot');
    nav.classList.toggle('translate');
    document.querySelector("body").classList.toggle('overflow');
}