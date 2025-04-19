// assets/js/main.js
document.addEventListener("DOMContentLoaded", function () {
    // Load reusable components (only works with backend or local server)
    fetch("includes/header.html").then(res => res.text()).then(data => {
      document.getElementById("header-placeholder").innerHTML = data;
    });
  
    fetch("includes/footer.html").then(res => res.text()).then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
  
    // Example dynamic product rendering (will later come from backend)
    const productGrid = document.getElementById("product-grid");
    const products = [
      {
        name: "Black Relaxed Fit Essential",
        price: "₹799",
        img: "assets/images/product1.jpg"
      },
      {
        name: "Saint Tropez Tee",
        price: "₹799",
        img: "assets/images/product2.jpg"
      }
    ];
  
    products.forEach(product => {
      const card = `
        <div class="col-md-3 mb-4">
          <div class="card h-100">
            <img src="${product.img}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.price}</p>
              <a href="product.html" class="btn btn-outline-success w-100">View</a>
            </div>
          </div>
        </div>
      `;
      productGrid.innerHTML += card;
    });
  });
  
  // ----------------------------------
let cardIndex = 0;
const cardSlides = document.getElementById('cardSlides');
const totalCards = document.querySelectorAll('.card-slide').length;

function nextCard() {
  cardIndex = (cardIndex + 1) % totalCards;  // Move to next slide
  cardSlides.style.transform = `translateX(-${cardIndex * 100}vw)`;  // Slide left
}

function prevCard() {
  cardIndex = (cardIndex - 1 + totalCards) % totalCards;  // Move to previous slide
  cardSlides.style.transform = `translateX(-${cardIndex * 100}vw)`;  // Slide right
}

