/* ================= TAB SWITCHING ================= */

function showRequest(){

document.getElementById("requestSection").style.display="block";
document.getElementById("offerSection").style.display="none";

}

function showOffer(){

document.getElementById("requestSection").style.display="none";
document.getElementById("offerSection").style.display="block";

}


/* ================= LOGIN ================= */

function login(){

let contact=document.getElementById("loginContact").value;

let storedContact=localStorage.getItem("userContact");

if(contact===storedContact){

alert("Login Successful");
window.location.href="index.html";

}
else{

alert("Account not found. Please signup first.");

}

}


/* ================= SIGNUP ================= */

function signup(){

let contact=document.getElementById("signupContact").value;

if(contact===""){

alert("Please enter Email or Mobile Number");
return;

}

localStorage.setItem("userContact",contact);

alert("Account created successfully");

window.location.href="login.html";

}


/* ================= DRIVER DATABASE ================= */

let drivers=[

{driver:"Sohan",vehicle:"TS09AB8768"},
{driver:"Jannath",vehicle:"AP07GH6699"},
{driver:"Allam",vehicle:"KA05CD6969"},
{driver:"Kiran",vehicle:"TS10EF3456"},
{driver:"Surya",vehicle:"AP11GH5678"},
{driver:"Mahith",vehicle:"TS08JK4567"},
{driver:"Vikram",vehicle:"KA09LM9876"},
{driver:"Roshan",vehicle:"AP05PQ1234"},
{driver:"Rahul",vehicle:"AP05PQ7658"},
{driver:"Arjun",vehicle:"AP05PQ0989"}

];


/* ================= OFFER RIDE ================= */

function offerRide(){

let driver=document.getElementById("driverName").value;
let vehicle=document.getElementById("vehicleNumber").value;
let pickup=document.getElementById("offerPickup").value;
let destination=document.getElementById("offerDestination").value;

if(driver==="" || vehicle==="" || pickup==="" || destination===""){

alert("Please fill all fields");
return;

}

drivers.push({
driver:driver,
vehicle:vehicle
});

alert("Ride offered successfully!");


/* store offered ride */

let newRide={

driver:driver,
vehicle:vehicle,
pickup:pickup,
destination:destination

};

rides.push(newRide);

alert("Ride offered successfully!");

}

/* ================= REQUEST RIDE ================= */

function findRide(){

let pickup=document.getElementById("pickup").value;
let destination=document.getElementById("destination").value;

let result=document.getElementById("result");

if(pickup==="" || destination===""){

result.innerHTML="<div class='rideCard'>⚠ Please enter pickup and destination</div>";
return;

}

/* random driver selection */

let output="<h3>Available Drivers</h3>";

let shuffledDrivers=drivers.sort(()=>0.5-Math.random());

let selectedDrivers=shuffledDrivers.slice(0,3);

selectedDrivers.forEach(function(ride){

output+=`

<div class="rideCard">

<b>Driver Name:</b> ${ride.driver}<br>
<b>Vehicle Number:</b> ${ride.vehicle}<br>
<b>Pickup:</b> ${pickup}<br>
<b>Destination:</b> ${destination}

</div>

`;

});

result.innerHTML=output;

}