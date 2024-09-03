

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

function validateForm() {
    const form = document.getElementById('form'); 
    const name = document.getElementById('fullname').value; 
    const email = document.getElementById('email').value; 
    const phone = document.getElementById('phone').value; 
    const message = document.getElementById('message').value; 

    form.addEventListener('submit', (event) => {
        event.preventDefault();
      

        
    });

  
    if (name === '' || name === null) {
         document.getElementById('nameError').style.display = "block"; 
         document.getElementById('fullname').style.border = "3px solid red"; 
    }  else { 
        document.getElementById('nameError').textContent = "your name is valid"; 
        document.getElementById('nameError').style.backgroundColor = "green"; 
        document.getElementById('fullname').style.border = "3px solid darkgreen"; 
    }

     if (phone.length < 10 ) {
        document.getElementById('phoneError').style.display = "block"; 
        document.getElementById('phone').style.border = "3px solid red"; 
    } else {
        document.getElementById('phoneError').textContent = "your phone number is valid"; 
        document.getElementById('phoneError').style.backgroundColor = "green"; 
        document.getElementById('phone').style.border = "3px solid darkgreen"; 
       }
      
    

    if (email.length <10 ) {
        document.getElementById('emailError').style.display = "block"; 
        document.getElementById('email').style.border = "3px solid red"; 
     } else {
        document.getElementById('emailError').textContent = "your email is valid"; 
        document.getElementById('emailError').style.backgroundColor = "green"; 
        document.getElementById('email').style.border = "3px solid darkgreen"; 
        } 
          
       
    if (message.length <= 100) {
        document.getElementById('messageError').style.display = "block";
        document.getElementById('message').style.border = "3px solid red";
    } else {
        document.getElementById('messageError').textContent = "your message is valid"; 
        document.getElementById('messageError').style.backgroundColor = "green"; 
        document.getElementById('message').style.border = "3px solid darkgreen"; 
    } 
    
    if (name === '' || name === null || phone.length < 10 || email.length < 10 || message.length <= 100) {
      
    
        alert('please fill in the form'); 
        return false;

     
    
    }
    
    

     
}


    
  
   

   
       
    

   
    


   
    

//today date 





//last update 

const lastUpdateDate = new Date('2024-07-08'); 
const currentDate = new Date();
const daydiff= currentDate - lastUpdateDate;
const lastupdateago = Math.floor(daydiff / (1000 * 60 * 60 * 24));

document.getElementById('lastupdateago').innerHTML = "<strong>Last update:</strong>" + "July 8, 2024" + "&nbsp;" + lastupdateago; 




//play video hide/show 

function playVideo() {  
    const video = document.getElementById('video-pop'); 
    if (video.style.display === "none") {
        video.style.display = "block"; 
    } else {
        video.style.display = "none"; 
    }
}




