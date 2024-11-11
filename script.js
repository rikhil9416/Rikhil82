// Countdown and Redirect Logic
let countdown = 10;
const countdownElement = document.getElementById("countdown");
const joinNowButton = document.querySelector(".join-now");
const subscribeNowButton = document.querySelector(".subscribe-now");
const bannerImages = document.querySelectorAll(".banner-image");

let currentBannerIndex = 0;
const colors = ["#28a745", "#007bff", "#ffc107", "#dc3545", "#17a2b8"];
let colorIndex = 0;

// Countdown timer
const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;

    // Change button colors every second
    joinNowButton.style.backgroundColor = colors[colorIndex];
    subscribeNowButton.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;

    if (countdown === 0) {
        clearInterval(countdownInterval);
        window.location.href = "https://t.me/+HMJ_YfX17EFmMGI1";
    }
}, 1000);

// Carousel image rotation every 3 seconds
const bannerInterval = setInterval(() => {
    bannerImages[currentBannerIndex].classList.remove("active");
    currentBannerIndex = (currentBannerIndex + 1) % bannerImages.length;
    bannerImages[currentBannerIndex].classList.add("active");
}, 3000);
