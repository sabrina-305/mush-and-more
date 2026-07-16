// Mush & More - Basic Shopping Cart

let cartCount = 0;

// Create notification element
const notification = document.createElement("div");
notification.style.position = "fixed";
notification.style.top = "20px";
notification.style.right = "20px";
notification.style.background = "#2f6b3d";
notification.style.color = "white";
notification.style.padding = "12px 20px";
notification.style.borderRadius = "10px";
notification.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
notification.style.display = "none";
notification.style.zIndex = "9999";
document.body.appendChild(notification);

// Find cart icon
const cart = document.querySelector(".cart");

// Add count badge
const badge = document.createElement("span");
badge.style.background = "red";
badge.style.color = "white";
badge.style.borderRadius = "50%";
badge.style.padding = "3px 8px";
badge.style.fontSize = "12px";
badge.style.marginLeft = "6px";
badge.innerText = "0";
cart.appendChild(badge);

// Add button events
document.querySelectorAll(".card button").forEach(button => {
    button.addEventListener("click", function () {

        cartCount++;
        badge.innerText = cartCount;

        notification.innerHTML = "🍄 Product added to cart!";
        notification.style.display = "block";

        setTimeout(() => {
            notification.style.display = "none";
        }, 2000);

    });
});

// Scroll animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

});

document.querySelectorAll(".card,.features div,.recipe-list div").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.8s";

    observer.observe(el);

});

// Contact form

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you for contacting Mush & More! We'll get back to you soon.");

    form.reset();

});
