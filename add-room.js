alert("JS Connected");
console.log("add-room.js loaded");
import { storage, db } from "./firebase.js";

import { 
ref, 
uploadBytes, 
getDownloadURL 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

import { 
collection, 
addDoc 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


document.getElementById("roomForm").addEventListener("submit", async (e)=>{

e.preventDefault();

let title = document.getElementById("title").value;
let location = document.getElementById("location").value;
let rent = document.getElementById("rent").value;
let description = document.getElementById("description").value;
let image = document.getElementById("image").files[0];


let imageRef = ref(storage, "rooms/" + image.name);

await uploadBytes(imageRef, image);

let imageUrl = await getDownloadURL(imageRef);


await addDoc(collection(db,"rooms"),{
title,
location,
rent,
description,
imageUrl
});


alert("Room Added Successfully");

document.getElementById("roomForm").reset();

});
