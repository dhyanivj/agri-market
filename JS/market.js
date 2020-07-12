function nuts() {
  console.log("clicked btn");
  document.getElementById("grains").style.display = "none";
  document.getElementById("coffee").style.display = "none";
  document.getElementById("olive").style.display = "none";
  document.getElementById("nuts").style.display = "block";
  document.getElementById("cashew").style.display = "none";
}
function cashew() {
  console.log("cashew clicked");
  document.getElementById("grains").style.display = "none";
  document.getElementById("coffee").style.display = "none";
  document.getElementById("olive").style.display = "none";
  document.getElementById("nuts").style.display = "none";
  document.getElementById("cashew").style.display = "block";
}
function grains() {
  console.log("grains clicked");
  document.getElementById("grains").style.visibility = "visible";
  document.getElementById("grains").style.display = "block";
  document.getElementById("nuts").style.display = "none";
  document.getElementById("coffee").style.display = "none";
  document.getElementById("olive").style.display = "none";
  document.getElementById("cashew").style.display = "none";
}
function coffee() {
  console.log("coffee clicked");
  document.getElementById("grains").style.display = "none";
  document.getElementById("nuts").style.display = "none";
  document.getElementById("cashew").style.display = "none";
  document.getElementById("olive").style.display = "none";
  document.getElementById("coffee").style.display = "block";
}
function olive() {
  console.log("olive clicked");
  document.getElementById("grains").style.display = "none";
  document.getElementById("nuts").style.display = "none";
  document.getElementById("cashew").style.display = "none";
  document.getElementById("coffee").style.display = "none";
  document.getElementById("olive").style.display = "block";
}
