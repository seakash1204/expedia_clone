
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
    let secCode=document.getElementById("sec_code").value;
    let zipCode=document.getElementById("zip_code").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let confirm=document.getElementById("confirm").value;

    // console.log(mobile,cardName,debit,expMonth,expYear,secCode,zipCode,email,password,confirm);

     console.log(secCode);

    payment.map(function(elem){
        if(fname==elem.first_name && lname==elem.last_name && mobile==elem.mobile
             && cardName==elem.card_name && debit==elem.debit_card && expMonth==elem.expiry_month
             && expYear==elem.expiry_year &&  zipCode==elem.zip_code
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

//secCode==elem.security_code &&