
const payment=[
    
        {
            first_name:"Shailesh",
            last_name:"Kumar",
            mobile:8267906808,
            card_name:"Shailesh Kumar",
            debit_card:1111111111111111,
            expiry_month:1,
            expiry_year:"2024",
            security_code:"111",
            zip_code:111111,
            email:"shailezb@gmail.com",
            password:"111111"
          },

          {
            first_name:"a",
            last_name:"b",
            mobile:9,
            card_name:"a b",
            debit_card:9,
            expiry_month:1,
            expiry_year:"2024",
            security_code:"9",
            zip_code:9,
            email:"a@gmail.com",
            password:"9"
          }
    
];

document.getElementById("btn").addEventListener("click",check);

function check(){
    console.log("hello");
    let flag=false;
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let mobile=document.getElementById("mobile").value;
    let cardName=document.getElementById("cardName").value;
    let debit=document.getElementById("debit").value;
    let expMonth=document.getElementById("month").value;
    let expYear=document.getElementById("year").value;
    let secCode=document.querySelector(".security_code").value;
    let zipCode=document.getElementById("zip_code").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let confirm=document.getElementById("confirm").value;

    // console.log(mobile,cardName,debit,expMonth,expYear,secCode,zipCode,email,password,confirm);

     console.log(secCode);

    payment.map(function(elem){
        if(fname==elem.first_name && lname==elem.last_name && mobile==elem.mobile
             && cardName==elem.card_name && debit==elem.debit_card && expMonth==elem.expiry_month
             && expYear==elem.expiry_year && secCode==elem.security_code &&  zipCode==elem.zip_code
             && email==elem.email && password==elem.password && confirm==elem.password){
            flag=true;
        }
    })
    if(flag){
        alert("Booking Successful ! Please check your email for the details.");
    }
    else{
        alert("Wrong information ! Please fill the correct information.");
    }
}


let purchase=[
    {
        "id": 1,
"city": "Delhi",
"heading1": "Le Meridien New Delhi",
"headig2": "New Delhi",
"img1": "https://images.trvl-media.com/hotels/1000000/540000/531700/531648/0be7b7bd.jpg?impolicy=resizecrop&rw=455&ra=fit",
"img2": "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/540000/531700/531648/db6e3fdf_b.jpg",
"img3": "https://images.trvl-media.com/hotels/5000000/4850000/4849400/4849391/c97a1e5e.jpg?impolicy=resizecrop&rw=455&ra=fit",
"img4": "https://images.trvl-media.com/hotels/1000000/540000/531700/531648/55467e67.jpg?impolicy=resizecrop&rw=455&ra=fit",
"text1": "The Capital’s Only Modern Palace Hotel",
"text2": "In AC Hotel Genova we know what need: AC Lounge and delicious breakfast, comfy rooms, common areas and the best rates.",
"text3": "Fully refundable",
"text4": "Reserve now, pay later",
"rating": "4.3",
"review": "Excellent",
"no_of_reviews": "(523 reviews)",
"heading3": "We have 5 left at",
"price1": "Rs8,650",
"price2": "10207"
    }
]


// let purchase=JSON.parse(localStorage.getItem("purchase"));

display();

function display(){
    purchase.map(function(elem){
        let div1=document.createElement("div");
        div1.id="right_one";
        div1.className="shade";
        let div2=document.createElement("div");
        div1.id="right_two";
        div2.className="shade";

        let image=document.createElement("img");
        image.src=elem.img1;

        let name=document.createElement("h2");
        name.textContent=elem.heading1;
    
        let rating=document.createElement("h4");
        rating.textContent=elem.rating+"/5" +elem.no_of_reviews;

        let div3=document.createElement("div");
        div3.className="block";

        let description=document.createElement("p");
        description.textContent="1 Room: Deluxe Room, 1 King Bed";
        description.className="descript1";

        let description2=document.createElement("p");
        description2.textContent="1 King Bed Sleeps 3 Free parking";
        description2.className="descript2";

        div3.append(description,description2);

        div1.append(image,name,rating,div3);
        document.getElementById("right").append(div1);


        //price details
        let price_details=document.createElement("h2");
        price_details.textContent="Price details";
        let hr1=document.createElement("hr");
        let hr2=document.createElement("hr");
        let hr3=document.createElement("hr");

        div4=document.createElement("div");
        div4.className="flexjs";
        let price=document.createElement("p");
        price.textContent="1 room x 1 night";
        let price_value=document.createElement("p");
        price_value.textContent="₹ "+ elem.price2;
        div4.append(price,price_value);
        
        div5=document.createElement("div");
        div5.className="flexjs";
        let tax=document.createElement("p");
        tax.textContent="Taxes and fees";
        let tax_value=document.createElement("p");
        tax_value.textContent="₹ 200";
        div5.append(tax,tax_value);

        div6=document.createElement("div");
        div6.className="flexjs";
        let total=document.createElement("h4");
        total.textContent="Total";
        let total_value=document.createElement("p");
        total_value.textContent=  Number(elem.price2)+200;
        let t=document.createElement("p");
        t.textContent="₹ "+total_value.textContent;
        div6.append(total,t);

        div2.append(price_details,hr1,div4,hr2,div5,hr3,div6);
        document.getElementById("right").append(div2);

    })
}


//navbar

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