var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var amplitude = 20; // Amplitude of the cosine wave
var circleRadius = 150; // Radius of the circular axis
var n = 8; // Integer defining the number of cosine wave cycles
var phaseOffset = Math.PI / 2; // Phase offset for the second circular cosine wave
var ballRadius = 5; // Radius of the balls
var ballSpeed = 0.01; // Speed of the balls

// Initial positions of the balls
var ball1Angle = 0;
var ball2Angle = 0;

function render() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the circular axis
    // ctx.beginPath();
    // ctx.arc(canvas.width / 2, canvas.height / 2, circleRadius, 0, Math.PI * 2);
    // ctx.stroke();

    // Draw the first circular cosine wave
    drawCircularCosineWave("#90e0f0", 0);

    // Draw the second circular cosine wave with a phase offset
    drawCircularCosineWave("#5080a0", phaseOffset);

    // Move and draw the balls
    moveAndDrawBall("#00008b", ball1Angle, 0);
    moveAndDrawBall("#000033", ball2Angle, phaseOffset);

    // Update ball angles for next frame
    ball1Angle += ballSpeed;
    ball2Angle += ballSpeed;

    // Request next frame
    requestAnimationFrame(render);
}

function drawCircularCosineWave(color, offset) {
    ctx.fillStyle = color; // Color for the circles
    ctx.strokeStyle = color; // Color for the lines
    ctx.beginPath();
    for (var angle = 0; angle <= Math.PI * 2; angle += 0.01) {
        var r = circleRadius + amplitude * Math.cos(angle * n + offset);
        var x = canvas.width / 2 + r * Math.cos(angle);
        var y = canvas.height / 2 + r * Math.sin(angle);

        // Draw a circle at each point along the circular cosine wave
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2); // Draw circles with 3 times the radius for thicker appearance
        ctx.fill();
    }
}

function moveAndDrawBall(color, angle, offset) {
    var r = circleRadius + amplitude * Math.cos(angle * n + offset);
    var x = canvas.width / 2 + r * Math.cos(angle);
    var y = canvas.height / 2 + r * Math.sin(angle);

    // Draw the ball
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fill();
}

render();