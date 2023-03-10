
let data = [];

let dataObj =  {
    "id": 1,
    "city": "Mumbai",
    "heading1": "The St. Regis Mumbai",
    "heading2": "Mumbai",
    "img1": "https://images.trvl-media.com/hotels/6000000/5310000/5301700/5301691/cea6d2e2.jpg?impolicy=resizecrop&rw=455&ra=fit",
    "img2": "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/6000000/5310000/5301700/5301691/000ae696_b.jpg",
    "img3": "https://images.trvl-media.com/hotels/6000000/5310000/5301700/5301691/80859cbb.jpg?impolicy=resizecrop&rw=455&ra=fit",
    "img4": "https://images.trvl-media.com/hotels/6000000/5310000/5301700/5301691/88d6a345.jpg?impolicy=resizecrop&rw=455&ra=fit",
    "text1": "Indulgent Staycation at The Best Address",
    "text2": "Luxuriate in our curated Staycation offering. Enjoy breakfast, a curated dinner & an upgrade while 2 kids below 12 eat & stay free",
    "text3": "Fully refundable",
    "text4": "Reserve now, pay later",
    "rating": "4.6/5",
    "review": "Wonderful",
    "no_of_reviews": "(459 reviews)",
    "heading3": "We have 5 left at",
    "price1": "Rs13,500",
    "price2": "15930"
}

data.push(dataObj);

let detailContainer = document.getElementById("detailContainer");
displayDetails(data);

function displayDetails(data){
    detailContainer.textContent = "";

    data.map((elem) => {

        let topDiv = document.createElement("div");
        topDiv.setAttribute("class","topDiv")
        
        let topDiv1 = document.createElement("div");
        let seeAllProp = document.createElement("p");
        seeAllProp.textContent = "See all properties";
        seeAllProp.style.color = "rgb(54,98,216)";
        seeAllProp.style.cursor = "pointer"; 

        topDiv1.append(seeAllProp);

        let topDiv2 = document.createElement("div");
        let price = document.createElement("h2");
        price.textContent = elem.price1;
        let perNight = document.createElement("p")
        perNight.textContent = "per night";

        topDiv2.append(price,perNight);

        topDiv.append(topDiv1,topDiv2);



        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class","imgDiv")

        let primeImg = document.createElement("div")
        let img1 = document.createElement("img");
        img1.src = elem.img1;

        primeImg.append(img1)

        let secImg = document.createElement("div");
        
        let img2 = document.createElement("img");
        img2.src = elem.img2;
        let img3 = document.createElement("img");
        img3.src = elem.img3;
        let img4 = document.createElement("img");
        img4.src = elem.img4;
        let img5 = document.createElement("p");
        // img5.textContent = "Show More"

        secImg.append(img2,img3,img4,img5);

        imgDiv.append(primeImg,secImg);


        let btns = document.createElement("div");
        btns.setAttribute("class","btns");

        let leftBtns = document.createElement("div");

        let btn1 = document.createElement("button");
        btn1.textContent = "Overview";

        let btn2 = document.createElement("button");
        btn2.textContent = "Rooms";

        let btn3 = document.createElement("button");
        btn3.textContent = "Location";

        let btn4 = document.createElement("button");
        btn4.textContent = "Amenities";

        let btn5 = document.createElement("button");
        btn5.textContent = "Policies";

        leftBtns.append(btn1,btn2,btn3,btn4,btn5);

        let rightBtns = document.createElement("div");

        let btn6 = document.createElement("button");
        btn6.setAttribute("id","reserveBtn");
        btn6.textContent = "Reserve a room";
        btn6.style.cursor = "pointer";
        btn6.onclick="showPayModal()"
        
        rightBtns.append(btn6);

        btns.append(leftBtns,rightBtns)

        

        let infoDiv = document.createElement("div");
        infoDiv.setAttribute("class","infoDiv")

        let leftInfoDiv = document.createElement("div");

        let leftInfoDiv1 = document.createElement("div");

        let hotelName = document.createElement("h2");
        hotelName.textContent = elem.heading1;

        let rating = document.createElement("p");
        rating.textContent = elem.rating +" "+elem.review;

        let no_of_reviews = document.createElement("p");
        no_of_reviews.textContent = elem.no_of_reviews;

        let amenities = document.createElement("p");
        amenities.textContent = "Popular amenities";

        leftInfoDiv1.append(hotelName,rating,no_of_reviews,amenities);


        let leftInfoDiv2 = document.createElement("div");


        let leftLiDiv = document.createElement("div");

        let li1 = document.createElement("li");
        li1.textContent = "Pool"

        let li2 = document.createElement("li");
        li2.textContent = "Air conditioning";

        let li3 = document.createElement("li");
        li3.textContent = "Free WiFi";

        leftLiDiv.append(li1,li2,li3);

        let rightLiDiv = document.createElement("div");

        let li4 = document.createElement("li");
        li4.textContent = "Spa";

        let li5 = document.createElement("li");
        li5.textContent = "Parking included";

        let li6 = document.createElement("li");
        li6.textContent = "Restaurant";

        rightLiDiv.append(li4,li5,li6);

        leftInfoDiv2.append(leftLiDiv,rightLiDiv);

        leftInfoDiv.append(leftInfoDiv1,leftInfoDiv2);


        let rightInfoDiv = document.createElement("div");


        infoDiv.append(leftInfoDiv);


        detailContainer.append(topDiv,imgDiv,btns,infoDiv);

        // console.log(data);
    })
}





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