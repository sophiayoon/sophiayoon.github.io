function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent"); // get all the tab contents
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // set all tab contents invisible
    }
    tablinks = document.getElementsByClassName("tablinks"); // get all the buttons
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", ""); // remove all active classes
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
