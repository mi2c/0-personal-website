let nameHeading = document.getElementById("name-heading");

nameHeading.addEventListener('mouseenter', function(event) {
    // highlight the mouseover target
    event.target.style.color ='rgb(240, 165, 0)';
});

nameHeading.addEventListener('mouseleave', function(event) {
    event.target.style.color = '';
});

