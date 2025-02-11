const roles = ["Software Developer", "IT Trainer", "Data Analyst"];
let index = 0;
let charIndex = 0;
const typingText = document.querySelector(".typing-text");

function typeEffect() {
    if (charIndex < roles[index].length) {
        typingText.textContent += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingText.textContent = roles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % roles.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(typeEffect, 500);
});

document.addEventListener("DOMContentLoaded", () => {
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
    counter.innerText = "0";
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});
});