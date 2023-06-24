var menuIcon = document.getElementById("menuIcon");
var navLinks = document.getElementById("navLinks");
var dropdowns = document.querySelectorAll(".dropdown");
var dropdownContents = document.querySelectorAll(".dropdown-content");

menuIcon.addEventListener("click", toggleMenu);

dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener("click", function(event) {
        event.stopPropagation();
        var dropdownContent = this.querySelector(".dropdown-content");

        closeDropdowns();
        toggleDropdown(dropdownContent);
    });
});

navLinks.addEventListener("click", function() {
    closeDropdowns();
});

function toggleMenu() {
    if (navLinks.style.right === "0px") {
        navLinks.style.right = "100%";
    } else {
        navLinks.style.right = "0px";
    }
}

function toggleDropdown(dropdownContent) {
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

function closeDropdowns() {
    dropdownContents.forEach(function(dropdownContent) {
        dropdownContent.style.display = "none";
    });
}
