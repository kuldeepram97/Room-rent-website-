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
function addRoom() {

let owner = document.getElementById("owner").value;
let location = document.getElementById("location").value;
let price = document.getElementById("price").value;
let phone = document.getElementById("phone").value;

if(owner=="" || location=="" || price=="" || phone==""){
    alert("Please fill all fields");
    return;
}

let room = document.createElement("div");
room.className = "room";

room.innerHTML = `
<h3>${location}</h3>

<p><b>Owner:</b> ${owner}</p>

<p><b>Rent:</b> ₹${price}/Month</p>

<a class="whatsapp" href="https://wa.me/91${phone}" target="_blank">
📱 WhatsApp Owner
</a>

<br><br>

<button onclick="editRoom(this)">✏ Edit</button>
<button onclick="deleteRoom(this)">🗑 Delete</button>
`;

document.getElementById("rooms").appendChild(room);

// Clear fields
document.getElementById("owner").value="";
document.getElementById("location").value="";
document.getElementById("price").value="";
document.getElementById("phone").value="";
}

function deleteRoom(btn){
    if(confirm("Delete this room?")){
        btn.parentElement.remove();
    }
}

function editRoom(btn){

let room = btn.parentElement;

document.getElementById("owner").value =
room.querySelectorAll("p")[0].innerText.replace("Owner: ","");

document.getElementById("price").value =
room.querySelectorAll("p")[1].innerText.replace("Rent: ₹","").replace("/Month","");

document.getElementById("location").value =
room.querySelector("h3").innerText;

room.remove();
}
