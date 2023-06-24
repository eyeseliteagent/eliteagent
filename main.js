function toggleMenu() {
    var navLinks = document.getElementById("navLinks");

    if (navLinks.style.right === "0px") {
        navLinks.style.right = "100%";
    } else {
        navLinks.style.right = "0px";
    }
}


function toggleDropdown(isHovered, dropdownId) {
    var dropdownContent = document.getElementById(dropdownId);

    if (isHovered) {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
}