var menuIcon = document.getElementById("menuIcon");
var navLinks = document.getElementById("navLinks");
var aboutDropdown = document.getElementById("aboutDropdown");
var aboutDropdownContent = document.getElementById("aboutDropdownContent");
var propertiesDropdown = document.getElementById("propertiesDropdown");
var propertiesDropdownContent = document.getElementById("propertiesDropdownContent");

menuIcon.addEventListener("click", toggleMenu);
aboutDropdown.addEventListener("mouseover", function() { toggleDropdown(true, aboutDropdownContent); });
aboutDropdown.addEventListener("mouseout", function() { toggleDropdown(false, aboutDropdownContent); });
propertiesDropdown.addEventListener("mouseover", function() { toggleDropdown(true, propertiesDropdownContent); });
propertiesDropdown.addEventListener("mouseout", function() { toggleDropdown(false, propertiesDropdownContent); });

function toggleMenu() {
    if (navLinks.style.right === "0px") {
        navLinks.style.right = "100%";
    } else {
        navLinks.style.right = "0px";
    }
}

function toggleDropdown(isHovered, dropdownContent) {
    if (isHovered) {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
}
