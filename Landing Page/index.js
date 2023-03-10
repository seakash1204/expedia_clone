
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


// Category Div...

// let divId = document.querySelectorAll("#searchDiv > div:not(:first-child)");

function showDiv(divId) {
    // hide all child divs
    var childDivs = document.querySelectorAll('.searchDiv > div:not(:first-child)');
    for (var i = 0; i < childDivs.length; i++) {
        childDivs[i].style.display = 'none';
    }
    console.log(childDivs);

    // show the selected child div
    var selectedDiv = document.getElementById(divId);
    selectedDiv.style.display = 'block';

}


