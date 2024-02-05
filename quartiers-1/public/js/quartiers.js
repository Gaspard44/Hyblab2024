"use strict";

// Wait for the content to preload and display 1st slide
// Here we simulate a loading time of one second
setTimeout(() => { 
    // fade out the loader "slide"
    // and send it to the back (z-index = -1)
    anime({
        delay: 100,
        targets: '#loader',
        opacity: '0',
        'z-index' : -1,
        easing: 'easeOutQuad',
    });
}, 100);

function backgroundTransition() {
    const container = document.querySelector(".background-container");
    const old_img = document.querySelector(".background-container img");
    old_img.classList.add("out");

    const new_img = document.createElement("img");
    new_img.src = "img/backgrounds/" + quartier.toLocaleLowerCase() + "/" + topic + "." + extension;
    container.appendChild(new_img);

    setTimeout(function() {
        old_img.remove();
    }, 2000);
}