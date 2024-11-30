// Countdown Timer that starts from tomorrow at 12 AM
function updateCountdown() {
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1); // Set to tomorrow
    tomorrow.setHours(0, 0, 0, 0); // Set time to 12 AM

    const timeRemaining = tomorrow - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeRemaining <= 0) {
        document.getElementById("countdown").innerHTML = "It's time! 🎉";
    }
}

setInterval(updateCountdown, 1000);

// Falling Hearts Animation (Smoother and Slightly Smaller)
const canvas = document.getElementById('heartsCanvas');
const ctx = canvas.getContext('2d');
const hearts = ['❤️', '🩵', '🤍', '💖', '🩷', '💛'];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const heartArray = []; // Array to store hearts

// Create heart objects
function createHeart() {
    const heart = {
        x: Math.random() * canvas.width,  // Random position
        y: -30,  // Start above the screen
        size: Math.random() * 20 + 20,  // Smaller random size between 20px and 40px
        speed: Math.random() * 1 + 1,  // Slightly slower fall speed
        heartSymbol: hearts[Math.floor(Math.random() * hearts.length)],  // Random heart symbol
    };
    heartArray.push(heart); // Add the new heart to the array
}

// Draw falling hearts on canvas
function drawHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear canvas every frame

    heartArray.forEach((heart, index) => {
        ctx.font = `${heart.size}px sans-serif`;
        ctx.fillText(heart.heartSymbol, heart.x, heart.y);
        heart.y += heart.speed;  // Move heart down

        // If heart goes off the bottom, remove it and create a new one
        if (heart.y > canvas.height) {
            heartArray.splice(index, 1);
            createHeart(); // Add new heart to fall
        }
    });
}

// Create initial hearts to start the animation
for (let i = 0; i < 30; i++) {  // Start with 30 hearts for smoother fall
    createHeart();
}

// Update falling hearts every 50ms
setInterval(drawHearts, 50);

// Cake Click Functionality
function showCake() {
    document.getElementById("cake-question").style.display = "block";
}

function showTreatQuestion() {
    document.getElementById("treat-question").style.display = "block";
}