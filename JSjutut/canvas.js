const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.font = "30px Arial";
// ctx.fillText("долбоёб", 80, 50, 300, 100);

// // kolmio
// ctx.beginPath();
// ctx.moveTo(225, 0);
// ctx.lineTo(275, 0);
// ctx.lineTo(250, 50);
// ctx.lineTo(225, 0);
// ctx.stroke();
// ctx.closePath();
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.closePath();

// // ympyrä
// ctx.beginPath();
// ctx.arc(250, 75, 10, 0, Math.PI * 2);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.stroke();
// ctx.closePath();

// // hymiö
// ctx.beginPath();
// ctx.arc(150, 125, 50, 0, Math.PI * 2);
// ctx.stroke();
// ctx.fillStyle = "yellow";
// ctx.fill();
// ctx.stroke();
// ctx.closePath();

// suu
// ctx.beginPath();
// ctx.arc(0, 125, 25, 0, Math.PI, false);
// ctx.stroke();
// ctx.closePath();

// // vasen silmä
// ctx.beginPath();
// ctx.arc(130, 105, 10, 0, Math.PI * 2);
// ctx.stroke();
// ctx.fillStyle = "black";
// ctx.fill();
// ctx.closePath();

// // oikea silmä
// ctx.beginPath();
// ctx.arc(170, 105, 10, 0, Math.PI * 2);
// ctx.stroke();
// ctx.fillStyle = "black";
// ctx.fill();
// ctx.closePath();

// //suun puolet yhdistävä viiva
// ctx.beginPath();
// ctx.moveTo(125, 125);
// ctx.lineTo(175, 125);
// ctx.stroke();
// ctx.closePath();

var x = 960;
var y = 540;
var dx = 4;
var dy = 4;
var height = 30;
var text = "DVD";
var num = 1;
        
        function getRandomColor() {
            var letter = "0123456789ABCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
                color += letter[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        
        function animate() {
            var metrics = ctx.measureText(text);
            var width = metrics.width;
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "bold 125px Helvetica";
            ctx.fillText(text, x, y);
            
            ctx.fill();
            if (x + width > canvas.width||x <= 0) {
                dx *= -1;
                ctx.fillStyle = getRandomColor();
        
            }
            if (y > canvas.height|| y <= height) {
                dy *= -1;
                ctx.fillStyle = getRandomColor();
            }
        
            x += dx;
            y += dy;
        }
        animate();