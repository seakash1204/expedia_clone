document.getElementById("popup").addEventListener("click", showModal);
function showModal(){
    document.querySelector(".overlay").classList.add("showOverlay");
    document.querySelector(".lang").classList.add("showlang");
}

document.querySelector("span").addEventListener("click", closeModal);
function closeModal(){
    document.querySelector(".overlay").classList.remove("showOverlay");
    document.querySelector(".lang").classList.remove("showlang");
}