
document.getElementById("input_button_id").addEventListener("click", fun_click_button)
function fun_click_button() {
    let location = document.getElementById("input_location").value;
    let date = document.getElementById("input_date").value;
    let count = document.getElementById("input_count").value;
    if (location == "" || date == "" || count == "") {
        alert("Fill All Data")
    }
    else{
        localStorage.setItem("date", JSON.stringify(date));
        localStorage.setItem("location", JSON.stringify(location));
        localStorage.setItem("count", JSON.stringify(count));
        window.open("../Hotel_product_page/product.html","_self");   
    }
    
}