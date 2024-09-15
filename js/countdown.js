
//countdown coming soon timer 

function countdown() {
    const countDate = new Date('Sept 20, 2024 00:00:00').getTime(); 
    const today = new Date().getTime(); 
    const diff = countDate - today; 

    const days = Math.floor(diff / (1000 * 60 * 60 * 24)); 
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 *60));
    const seconds = Math.floor((diff % (1000 * 60)) /1000); 

    document.getElementById("day").innerHTML = days; 
    document.getElementById("hour").innerHTML = hours; 
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;  

}; 

setInterval(countdown, 1000); 

