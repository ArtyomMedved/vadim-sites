document.addEventListener("DOMContentLoaded", function () {
    console.log("Энциклопедия загружена!");
});

function calculateGoldenRatio() {
    const input = document.getElementById("inputNumber").value;
    if (input > 0) {
        const goldenRatio = input * 1.618;
        document.getElementById("goldenRatioResult").innerText = `Результат: ${goldenRatio.toFixed(2)}`;
    } else {
        document.getElementById("goldenRatioResult").innerText = "Введите положительное число!";
    }
}

const canvas = document.getElementById("geometryCanvas");
const ctx = canvas.getContext("2d");

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Рисуем круг
function drawCircle() {
    clearCanvas();
    ctx.beginPath();
    ctx.arc(250, 250, 100, 0, Math.PI * 2);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 3;
    ctx.stroke();
}

// Рисуем квадрат
function drawSquare() {
    clearCanvas();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 3;
    ctx.strokeRect(150, 150, 200, 200);
}

// Рисуем золотой прямоугольник
function drawGoldenRectangle() {
    clearCanvas();
    const width = 300;
    const height = width / 1.618;
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 3;
    ctx.strokeRect(100, 200, width, height);
}

// Рисуем золотую спираль
function drawGoldenSpiral() {
    clearCanvas();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    let x = 250, y = 250;
    let a = 1, b = 1.618;
    ctx.beginPath();
    for (let i = 0; i < 20; i++) {
        let angle = 0.5 * i;
        let dx = a * Math.exp(b * angle) * Math.cos(angle);
        let dy = a * Math.exp(b * angle) * Math.sin(angle);
        ctx.lineTo(x + dx, y + dy);
    }
    ctx.stroke();
}

document.getElementById("golden-section").addEventListener("mouseover", function () {
    document.getElementById("label").textContent = "Золотое сечение: 1.618";
});
document.getElementById("golden-section").addEventListener("mouseout", function () {
    document.getElementById("label").textContent = "Наведи курсор для информации";
});

document.getElementById("silver-section").addEventListener("mouseover", function () {
    document.getElementById("label").textContent = "Серебряное сечение: 2.414";
});
document.getElementById("silver-section").addEventListener("mouseout", function () {
    document.getElementById("label").textContent = "Наведи курсор для информации";
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.8) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});

function calculateLoad() {
    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);
    let load = parseFloat(document.getElementById("load").value);

    if (isNaN(length) || isNaN(width) || isNaN(load)) {
        document.getElementById("loadResult").textContent = "Введите корректные значения!";
        return;
    }

    let totalLoad = length * width * load;
    document.getElementById("loadResult").textContent = `Общая нагрузка: ${totalLoad} кг.`;
}
