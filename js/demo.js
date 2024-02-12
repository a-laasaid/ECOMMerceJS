// js for slider

var slider_index = 1;

var image_slider = document.querySelector(".images");
var interval;
var dashed = document.getElementsByClassName("dashed");

//change_slider_function
var change = function () {
  interval = setInterval(function () {
    slider_index++;
    if (slider_index > 3) {
      slider_index = 1;
      var dashed = document.getElementById("3");
      dashed.style.backgroundColor = "gainsboro";
    }
    image_slider.setAttribute("src", `./images/${slider_index}.jpg`);
    var dashhed = document.getElementById("" + slider_index + "");

    dashhed.style.backgroundColor = "gray";

    if (slider_index > 1) {
      var bubble_slider_berfore = document.getElementById("" + slider_index - 1 + "");
      bubble_slider_berfore.style.backgroundColor = "gainsboro";
    }
  }, 1500);
}
change();

///next of slider
function next() {
  slider_index++;
  if (slider_index > 3) {
    slider_index = 1;
    var dashed = document.getElementById("3");
    dashed.style.backgroundColor = "gainsboro";
  }
  image_slider.setAttribute("src", `./images/${slider_index}.jpg`);
  var dashhed = document.getElementById("" + slider_index + "");

  dashhed.style.backgroundColor = "gray";

  if (slider_index > 1) {
    var bubble_slider_berfore = document.getElementById("" + slider_index - 1 + "");
    bubble_slider_berfore.style.backgroundColor = "gainsboro";
  }
}
///previous of  slider
function previous() {
  slider_index--;
  if (slider_index < 1) {
    slider_index = 3;
    var dashed = document.getElementById("1");
    dashed.style.backgroundColor = "gainsboro";
  }
  var x = slider_index + 1;
  image_slider.setAttribute("src", `./images/${slider_index}.jpg`);
  var dashhed = document.getElementById("" + slider_index + "");
  var dashed_after = document.getElementById("" + x + "");

  dashhed.style.backgroundColor = "gray";
  //  dashed_after.style.backgroundColor="gainsboro";

}

// //go to top
let mybutton = document.getElementById("myBtn");


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//click on categories dispaly all

//all
var showAll = document.getElementById("showAll");


var cards = document.getElementsByClassName("cards");
var categories = document.getElementById("cate");
categories.addEventListener('click', function () {
  first_type.style.display = "flex";
  makup.style.display = "flex";
  accessories.style.display = "flex";
  shoes.style.display = "flex";

});

var Clothes = document.getElementById("Clothes");
var accessories = document.getElementById("accessories");
var shoes = document.getElementById("shoes");
var makeup = document.getElementById("makeup");
var makeup = document.getElementsByClassName("third")[0];
var accessories = document.getElementsByClassName("second")[0];
var shoes = document.getElementsByClassName("fourth")[0];
var first_type = document.getElementsByClassName("first")[0];



function filterProducts() {
  const btns = document.querySelectorAll(".buttons button");
  const images = document.querySelectorAll(".div1");
  console.log(btns);
  console.log(images);
  btns.forEach(e=>{

    e.addEventListener('click',()=>{
      const category = e.getAttribute('id');
      console.log(category)
      

      images.forEach(img=>{
        console.log(img.dataset.category);
        console.log(categories === img.dataset.category)
        if( categories.toLowerCase() == img.dataset.category.toLowerCase()){
          console.log(img);
        }else{
          console.log(img);

          // console.log(img.getAttribute('id'))
          // img.style.display="none";
        }
      })
    })
  })
  
};

/////////add to cart

var counter = 0;
function addToCart(event) {
  //get details from product added
  var button = event.target;
  var product = button.parentElement;
  var imageSrc = product.getElementsByClassName('pho')[0].src;
  var product_name = product.getElementsByClassName('product_name')[0].innerText;

  //
  document.getElementById("temoli").style.display = "none";

  ///get data from cart
  var li = document.createElement("li")
  var ol = document.querySelector('.list_of_product')
  var item =
    `
            <button class="btn_remove" onclick="deleteFromCart(this)">Delete</button>
             
             <p class='product_name'>${product_name}</p>
             <img src="${imageSrc}" alt="">`;
  li.innerHTML = item;
  ol.appendChild(li);

  counter++;
  document.getElementById("count").style.display = "inline-block";
  document.getElementById("count").innerHTML = counter;
}

///////// اadd element to cart , increase counter
var addToCartButtons = document.querySelectorAll(".addCatr");
for (var i = 0; i < addToCartButtons.length; i++) {
  var button = addToCartButtons[i]
  button.addEventListener('click', addToCart)
}
///////////showcart and hide
var list_of_product = document.querySelector(".list_of_product");
document.querySelector("#cart_img").addEventListener("mouseenter", function () {

  list_of_product.style.display = "block";
});
list_of_product.addEventListener("mouseenter", function () {
  //
  list_of_product.style.display = "block";
});
list_of_product.addEventListener("mouseleave", function () {
  list_of_product.style.display = "none";
});

document.querySelector("#cart_img").addEventListener("mouseleave", function () {
  list_of_product.style.display = "none";
});

////delete from cart
function deleteFromCart() {
  //get details about product that added
  var remove = event.target;
  remove.parentElement.remove();
  counter--;
  if (counter <= 0) {
    document.getElementById("count").style.display = "none";
    document.getElementById("temoli").style.display = "flex";
  } else {
    document.querySelector("#count").innerHTML = `${counter}`
    document.getElementById("count").style.display = "inline-block";
  }
}
///////// remove element from cart and decrease counter by 1
var deleteproduct = document.querySelectorAll(".btn_remove");
for (var i = 0; i < deleteproduct.length; i++) {
  var btn_remove = deleteproduct[i];
  btn_remove.addEventListener('click', deleteFromCart);
}





/////////////

// addCart to html

var counter = 0;
function addToCart(a)
{
  let countProudctsAdd =0;
  let spanCountCar = document.querySelector('#count');
  console.log(spanCountCar);
  let butsAddCar = document.querySelectorAll('.addCatr');
  console.log(butsAddCar);
  butsAddCar.forEach(e=>{
    e.addEventListener('click',()=>{
      console.log("click")
      countProudctsAdd+=1;
      spanCountCar.innerHTML=countProudctsAdd;
    })
  })
}
function createDiv(product) {

  let div1 = document.createElement('div');
  div1.classList.add('div1');
  div1.setAttribute('data-category',product.category);
  let catContainer = document.createElement('div');
  catContainer.classList.add("cat-container")
  let catImage = document.createElement("div")
  catImage.classList.add("cat-image");

  let image = document.createElement("img");
  image.setAttribute('src', product.image);
  image.setAttribute('id', "productImage");
  image.setAttribute('data-id', product.id);
  image.classList.add('pho');

  catImage.appendChild(image)

  let popup = document.createElement('div');
  popup.classList.add("popup");
  popup.setAttribute('id', 'popupBox');

  let nameProduct = document.createElement('p');
  nameProduct.textContent = product.name;
  popup.appendChild(nameProduct);

  let priceProduct = document.createElement('p');
  priceProduct.innerHTML = `$${product.price}`;
  popup.appendChild(priceProduct);

  let colorProduct = document.createElement('p');
  colorProduct.innerHTML = `$${product.color}`;
  popup.appendChild(colorProduct);

  catImage.appendChild(popup);
  catContainer.appendChild(catImage);

  div1.appendChild(catContainer)
  div1.appendChild(priceProduct)

  let btnAddCart = document.createElement('button')
  btnAddCart.classList.add('addCatr');
  btnAddCart.innerHTML = 'Add To Cart'

  div1.appendChild(btnAddCart);
  return div1;

}
let firstDiv = document.querySelector('.first');

//rednder products
function renderProducts(data) {
  data.forEach(product => {
    let div1 = createDiv(product);
    console.log(div1);
    firstDiv.appendChild(div1);
  })
}
//fetch data
fetch('https://juwayriya.vercel.app/products')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process the JSON data
    console.log(data);
    renderProducts(data);
    showProductDetails()
    filterProducts()
    addToCart()
    // JavaScript to handle popup behavior
var image = document.getElementById('productImage');
var popup = document.getElementById('popupBox');

image.addEventListener('mouseenter', function () {
  popup.style.display = 'block';
});

image.addEventListener('mouseleave', function () {
  popup.style.display = 'none';
});
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


// direct to dtails
function showProductDetails() {
  const list = document.querySelectorAll('.first .div1 .cat-image img');
  console.log(list);
  list.forEach(e => {
    e.addEventListener('click', () => {
      window.location.href = `productDetails.html?id=${e.dataset.id}`;
    });

  })
}


var scrollToTopBtn = document.getElementById("scrollToTopBtn");

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add("showBtn");
  } else {
    scrollToTopBtn.classList.remove("showBtn");
  }
});

scrollToTopBtn.addEventListener("click", scrollToTop);
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}


