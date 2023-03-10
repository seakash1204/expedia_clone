
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

// pop js
document.getElementById("input_count").addEventListener("click", showPayModal);
    function showPayModal(){
        document.querySelector(".overlay").classList.add("showOverlay");
        document.querySelector(".reserve").classList.add("showReserve");
    }

    // document.querySelector("#cross_tag").addEventListener("click", closePayModal);
    document.getElementById("cross_tag").addEventListener("click", closePayModal)
   function closePayModal(){
        document.querySelector(".overlay").classList.remove("showOverlay");
        document.querySelector(".reserve").classList.remove("showReserve");
    }
    var count = 0;
    document.getElementById("adults_parent_2").addEventListener("click", fun_sub);
    document.getElementById("adults_parent_4").addEventListener("click", fun_add);
    // document.getElementById("adults_parent_2").addEventListener("click, fun_sub");
    // two dates
    function fun_sub(){
        count--;
        document.getElementById("adults_parent_3").innerHTML = count;
    }
    function fun_add(){
        count++;
        document.getElementById("adults_parent_3").innerHTML = count;
    }
    var bcount = 0;
    document.getElementById("children_div_2").addEventListener("click", fun_sub_chil);
    document.getElementById("children_div_4").addEventListener("click", fun_add_chil);

    function fun_sub_chil(){
        bcount--;
        document.getElementById("children_div_3").innerHTML = bcount;
    }
    function fun_add_chil(){
        bcount++;
        document.getElementById("children_div_3").innerHTML = bcount;
    }
    // document.getElementById("input_count").value
    document.getElementById("cross_tag").addEventListener("click", func_buttn);
    function func_buttn(){
        document.getElementById("input_count").value = count + bcount;
        count = 0;
        bount = 0;
        document.getElementById("children_div_3").innerHTML = 0;
        document.getElementById("adults_parent_3").innerHTML = 0;
    }

    // navbar js
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
    // navbar js