// assign variable to hamburger menu icon (which only displays when viewport is small enough)
let hamburgerIcon = document.querySelector('.hamburgerIconContainer');

// assign variable to nav
let nav = document.querySelector('nav');

// assign variable to header logo
let headerLogo = document.querySelector('.hamburgerHeaderLogo');

// function that runs when hamburger is clicked
hamburgerIcon.addEventListener('click', function(click) {

    // if nav display === 'none', set nav display to 'block' and hide header logo
    if (nav.style.visibility === 'hidden') {
        nav.style.visibility = 'visible';
        headerLogo.style.visibility = 'hidden';
    } 
    
    // otherwise, set nav display to 'none' and show header logo
    else {
        nav.style.visibility = 'hidden';
        headerLogo.style.visibility = 'visible';
    }
})

// function that sets nav to display when window is resized if window is large enough

function displayNavOnResize() {
    if (window.innerWidth > 918) {
        nav.style.visibility = 'visible';
        headerLogo.style.visibility = 'hidden';
    } else {
        nav.style.visibility = 'hidden';
        headerLogo.style.visibility = 'visible';
    }
}

// trigger function when window is resized

window.onresize = displayNavOnResize;