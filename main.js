

//navigation for mobile 
const navLinks = document.querySelector('.nav-links'); 
const openmenuBtn = document.querySelector('.fa-bars');
const closemenuBtn = document.querySelector('.fa-x'); 

openmenuBtn.onclick = function () {
    navLinks.style.right = "0";
}

closemenuBtn.onclick = function () {
    navLinks.style.right = "-200%";
}



//Form Validation 


//today date 





//last update 

const lastUpdateDate = new Date('2024-07-08'); 
const currentDate = new Date();
const daydiff= currentDate - lastUpdateDate;
const lastupdateago = Math.floor(daydiff / (1000 * 60 * 60 * 24));

document.getElementById('lastupdateago').innerHTML = "<strong>Last update:</strong>" + "July 8, 2024" + "&nbsp;" + lastupdateago; 


//countdown coming soon timer 



countdown(); 

//play video hide/show 

function playVideo() {  
    const video = document.getElementById('video-pop'); 
    if (video.style.display === "none") {
        video.style.display = "block"; 
    } else {
        video.style.display = "none"; 
    }
}

const today = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const formattedDate = `${week[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
document.getElementById("current-time").innerHTML = "<strong>Current Date</strong>:" + formattedDate;


