function addRoom(){

let owner=document.getElementById("owner").value;
let location=document.getElementById("location").value;
let price=document.getElementById("price").value;
let phone=document.getElementById("phone").value;

if(owner=="" || location=="" || price=="" || phone==""){
alert("Please fill all fields");
return;
}

let room=document.createElement("div");

room.className="room";

room.innerHTML=`
<h3>${location}</h3>

<p><b>Owner:</b> ${owner}</p>

<p><b>Rent:</b> ₹${price}/Month</p>

<a class="whatsapp" href="https://wa.me/91${phone}" target="_blank">
WhatsApp Owner
</a>
`;

document.getElementById("rooms").appendChild(room);

document.getElementById("owner").value="";
document.getElementById("location").value="";
document.getElementById("price").value="";
document.getElementById("phone").value="";
}
