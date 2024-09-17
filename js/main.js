

//navigation for mobile 
const navLinks = document.querySelector('.nav-links'); 
const openmenuBtn = document.querySelector('.fa-bars');
const closemenuBtn = document.querySelector('.fa-x'); 


openmenuBtn.addEventListener('click', function() {
    navLinks.style.right = "0%"; 
});

closemenuBtn.addEventListener('click', function() {
    navLinks.style.right = "-200%";
});



       
    


//Form Validation 
    

function validateForm() {
    const submit = document.getElementById('submit'); 
    const name = document.getElementById('fullname').value; 
    const email = document.getElementById('email').value; 
    const phone = document.getElementById('phone').value; 
    const message = document.getElementById('message').value; 
    
    
      
    if (name == '' || name == null )     { 
        document.getElementById('nameError').style.display = "block"; 
        document.getElementById('fullname').style.border = "5px solid red"; 
    } else {
        document.getElementById('naneError').textContent = "your phone number is valid"; 
        document.getElementById('nameError').style.backgroundColor = "green"; 
        document.getElementById('fullname').style.border = "5px solid darkgreen"; 
    }
    

     if (phone.length < 10 || phone.length < 1) {
        document.getElementById('phoneError').style.display = "block"; 
        document.getElementById('phone').style.border = "5px solid red"; 
    } else {
        document.getElementById('phoneError').textContent = "your phone number is valid"; 
        document.getElementById('phoneError').style.display = "none"; 
        document.getElementById('phone').style.border = "5px solid darkgreen"; 
       }
      
    

    if (email.length < 10  || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').style.display = "block"; 
        document.getElementById('email').style.border = "5px solid red"; 
     } else {
        document.getElementById('emailError').textContent = "your email is valid"; 
        document.getElementById('emailError').style.backgroundColor = "green"; 
        document.getElementById('email').style.border = "5px solid darkgreen"; 
        } 
          
       
        if (message.length <= 100) {
            document.getElementById('messageError').style.display = "block";
            document.getElementById('message').style.border = "5px solid red";
        } else {
            document.getElementById('messageError').textContent = "your message is valid"; 
            document.getElementById('messageError').style.backgroundColor = "green"; 
            document.getElementById('message').style.border = "5px solid darkgreen"; 
        } 
    
    if (name === '' || name === null || phone.length < 10 || phone.length < 1 || email.length < 10 || message.length <= 100) {
        alert('please fill in the form'); 
        return false;
    
    } else {
        alert('please submit form when all completed'); 
        return true; 
    }
    
   

    submit.addEventListener('click', (event) => {

        
        event.preventDefault(); 
        validateForm(); 
  
        
    
});


     
}


  

//today date 

const today = new Date();
const Day = today.getDate();
const weekDay = today.getDay();
const Month = today.getMonth();
const Year = today.getFullYear()+1;
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const todayDate = `${week[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
document.getElementById("current-time").innerHTML = "<strong>Current Date:</strong>" +  "&nbsp;" + todayDate; 

//last update 

const lastUpdateDate = new Date('September 16, 2024'); 
const currentDate = new Date('September 17, 2024');
const daydiff= currentDate - lastUpdateDate;
const lastupdateago = Math.floor(daydiff / (1000 * 60 * 60 * 24));

document.getElementById('lastupdateago').innerHTML = "<strong>Last update:</strong>" + "September 2, 2024" + "&nbsp;" + lastupdateago; 




//play video hide/show 

function playVideo() {  
    const video = document.getElementById('video-pop');

    if (video.style.display === "none") {
        video.style.display = "block"; 
    } else {
        video.style.display = "none"; 
    }
}




