var shakeEvent = new Shake({threshold: 15}); // New shake event with a threshold of 15
var shakeCount = 0; // Keeps track of number of shakes

shakeEvent.start(); // Start listening to device motion

window.addEventListener('shake', function(){
    shakeCount++;
    checkShakes();
}, false);
