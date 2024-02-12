

const mainImage = document.querySelector('img.slide');
const leftSideOptionImage = document.querySelector('div.option');
const nameOfProduct = document.querySelector(".right >h3");
const rightDiv = document.querySelector(".right");
const priceOfProduct = document.querySelector(".right> h4");
const productDetails = document.querySelector(".right >p");
const quantatiyLabel = document.querySelector(".add > label");
const buttonAddToCart = document.querySelector("button");
function getIdProduct() {
  let id = parseInt(window.location.href.slice(window.location.href.indexOf("=") + 1));

  fetch(`https://juwayriya.vercel.app/products/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Process the JSON data
      console.log(data);
      createHtmDetailsProducts(data)
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
getIdProduct();

function createHtmDetailsProducts(product) {
  mainImage.setAttribute('src', product.image);
  nameOfProduct.innerHTML = product.name;
  priceOfProduct.appendChild(document.createTextNode(product.price));
  productDetails.innerHTML = product.description;
  rightDiv.setAttribute('id',product.id)
}

document.querySelectorAll('.minus').forEach(function(minusButton) {
  minusButton.addEventListener('click', function() {
      var productId = minusButton.getAttribute('data-product-id');
      var quantityLabel = document.querySelector('label[data-product-id="' + productId + '"]');
      var quantity = parseInt(quantityLabel.textContent);
      if (quantity > 0) {
          quantity--;
          quantityLabel.textContent = quantity;
      }
  });
});

document.querySelectorAll('.plus').forEach(function(plusButton) {
  plusButton.addEventListener('click', function() {
      var productId = plusButton.getAttribute('data-product-id');
      var quantityLabel = document.querySelector('label[data-product-id="' + productId + '"]');
      var quantity = parseInt(quantityLabel.textContent);
      quantity++;
      quantityLabel.textContent = quantity;
  });
});