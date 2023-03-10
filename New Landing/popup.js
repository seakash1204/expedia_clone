// popup start

document.getElementById("reserveBtn").addEventListener("click", showPayModal);
function showPayModal(){
    document.querySelector(".overlay").classList.add("showOverlay");
    document.querySelector(".reserve").classList.add("showReserve");
}

document.getElementById("closePayModalBtn").addEventListener("click", closePayModal);
function closePayModal(){
    document.querySelector(".overlay").classList.remove("showOverlay");
    document.querySelector(".reserve").classList.remove("showReserve");
}

// popup end