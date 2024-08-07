function myFunction(id) {
  var e = document.getElementById(id);
  e.style.display = e.style.display == "block" ? "none" : "block";
}

function toggle() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
