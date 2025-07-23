
function Vinz_toggleDropdown(button) {
	var container = button.parentElement;
    var content = button.nextElementSibling;
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
		button.classList.add("active");
		container.classList.add("active");
    } else {
        content.style.display = "none";
		button.classList.remove("active");
		container.classList.remove("active");
    }
}
