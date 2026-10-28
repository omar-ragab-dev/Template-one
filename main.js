// Toggle Menu 
let icon = document.querySelector(".icon");
let ul = document.querySelector("nav ul");
let span = document.querySelector("nav .icon span:nth-child(2)");

icon.addEventListener("click", function(e) {
    e.stopPropagation();       
    ul.classList.toggle("toggle");
    span.classList.toggle("toggle_span");
});

// Close menu when clicking outside
document.addEventListener("click", function(e) {
    if (!ul.contains(e.target) && !icon.contains(e.target)) {
        ul.classList.remove("toggle");
        span.classList.remove("toggle_span");
    }
});

// Close menu when clicking on a link
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function() {
        ul.classList.remove("toggle");
        span.classList.remove("toggle_span");
    });
});

//  Scroll to Top Button 
let scrollBtn = document.querySelector(".scroll_up");

scrollBtn.addEventListener("click", function(e) {
    e.preventDefault();       
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    
});

// Show/Hide scroll button based on scroll position
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        scrollBtn.style.opacity = "1";
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.opacity = "0";
        scrollBtn.style.visibility = "hidden";
    }
});

// Set initial state
scrollBtn.style.opacity = "0";
scrollBtn.style.visibility = "hidden";