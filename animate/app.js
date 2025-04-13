const canvas = document.getElementById('petriDish');
const ctx = canvas.getContext('2d');
const storyText = document.getElementById('storyText');

const WIDTH = canvas.width;
const HEIGHT = canvas.height;
let bacteriaCount = 100; // Start with 100 bacteria
let hour = 0;
let target = 1000000; // Target 1,000,000 bacteria
const doublingRate = 2; // Doubles every hour

// Petri dish properties
const centerX = WIDTH / 2;
const centerY = HEIGHT / 2;
const radius = 200;

// Animation variables
let animationFrameId;
let isAnimating = true;

function drawPetriDish() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT); // Clear canvas

    // Draw petri dish (circle)
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw bacteria (dots)
    const angleStep = (Math.PI * 2) / bacteriaCount;
    for (let i = 0; i < bacteriaCount; i++) {
        const angle = i * angleStep;
        const x = centerX + (radius * 0.8) * Math.cos(angle);
        const y = centerY + (radius * 0.8) * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'green';
        ctx.fill();
    }

    // Draw clock
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`Time: ${hour} hours`, 20, 50);

    // Draw counter
    ctx.fillText(`Bacteria: ${bacteriaCount}`, 20, 80);
}

function updateStory(text) {
    storyText.innerHTML = text;
}

function animate() {
    if (!isAnimating) return;

    drawPetriDish();

    // Storytelling
    if (hour === 0) {
        updateStory("Imagine you're a scientist with a petri dish of 100 bacteria. These little guys double every hour, and you need 1,000,000 for a big experiment. Watch them grow!");
    } else if (hour === 1) {
        updateStory("After 1 hour, the bacteria double to 200! They're spreading fast.");
    } else if (hour === 5) {
        updateStory("At 5 hours, you have 3,200 bacteria. Exponential growth is kicking in!");
    } else if (hour === 10) {
        updateStory("By 10 hours, it's 102,400 bacteria. Getting closer to your goal!");
    } else if (bacteriaCount >= target) {
        updateStory(`At ~13.29 hours, you hit 1,000,000 bacteria! Logarithms helped predict this moment exactly.`);
        isAnimating = false; // Stop animation when target is reached
        return;
    }

    // Double bacteria every hour
    if (hour < 14) { // Limit to avoid overflow or performance issues
        bacteriaCount *= doublingRate;
        hour += 0.29; // Simulate continuous growth to hit 13.29 hours
    }

    animationFrameId = requestAnimationFrame(animate);
}

// Start animation
animate();

// Optional: Stop animation button (for interactivity)
document.addEventListener('keydown', (e) => {
    if (e.key === ' ') { // Spacebar to pause/resume
        isAnimating = !isAnimating;
        if (isAnimating) animate();
    }
});