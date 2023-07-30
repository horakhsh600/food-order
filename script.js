const openYourOrder1 = document.getElementById("add-btn-part-1");
const openYourOrder2 = document.getElementById("add-btn-part-2");
const openYourOrder3 = document.getElementById("add-btn-part-3");
const yourOrder = document.getElementById("cart");
const yourTotalPrice = document.getElementById("total-price");
let yourFoodOrderName = document.getElementById("food-name-order");
const paymentdetail = document.getElementById("checkbox");
const completeOrder = document.getElementById("complete-order");
const orderCompleted = document.getElementById("ordercompleted");

const payMaony = document.getElementById("paymentmethod");
let yourFoodOrderPrice = document.getElementById("food-price-order");
let food1name = "pizza";
let food1price = 14;
let food2name = "Humburger";
let food2price = 12;
let food3name = "Beer";
let food3price = 12;
let totalprice = 0;
openYourOrder1.addEventListener("click", function () {
  yourOrder.style.display = "block";
  orderCompleted.style.display = "none";
  const pizzaName = document.createElement("p");
  pizzaName.textContent = "Pizza";
  const pizzaPrice = document.createElement("p");
  pizzaPrice.textContent = "$" + 14;
  yourFoodOrderName.appendChild(pizzaName);
  yourFoodOrderPrice.appendChild(pizzaPrice);
});
openYourOrder2.addEventListener("click", function () {
  yourOrder.style.display = "block";
  orderCompleted.style.display = "none";
  const burgerName = document.createElement("p");
  burgerName.textContent = "Humburger";
  const burgerPrice = document.createElement("p");
  burgerPrice.textContent = "$" + 12;
  yourFoodOrderName.appendChild(burgerName);
  yourFoodOrderPrice.appendChild(burgerPrice);
});
openYourOrder3.addEventListener("click", function () {
  yourOrder.style.display = "block";
  orderCompleted.style.display = "none";
  const beerName = document.createElement("p");
  beerName.textContent = "Beer";
  const beerPrice = document.createElement("p");
  beerPrice.textContent = "$" + 12;
  yourFoodOrderName.appendChild(beerName);
  yourFoodOrderPrice.appendChild(beerPrice);
});
completeOrder.addEventListener("click", function () {
  paymentdetail.style.display = "block";
});
payMaony.addEventListener("click", function () {
  paymentdetail.style.display = "none";
  yourOrder.style.display = "none";
  orderCompleted.style.display = "block";
  yourFoodOrderName.textContent = null;
  yourFoodOrderPrice.textContent = null;
});
yourTotalPrice.textContent = "$" + totalprice;
