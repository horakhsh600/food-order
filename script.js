const openYourOrder1 = document.getElementById("add-btn-part-1");
const openYourOrder2 = document.getElementById("add-btn-part-2");
const openYourOrder3 = document.getElementById("add-btn-part-3");
const yourOrder = document.getElementById("cart");
const yourTotalPrice = document.getElementById("total-price");
const yourFoodOrderName = document.getElementById("food-name-order");
const paymentdetail = document.getElementById("checkbox");
const completeOrder = document.getElementById("complete-order");
const orderCompleted = document.getElementById("ordercompleted");
const payMaony = document.getElementById("paymentmethod");
const yourFoodOrderPrice = document.getElementById("food-price-order");

const foods = [
  {
    id: "Pizza",
    description: "pepperoni, mushroom, mozzarella",
    price: 14,
  },
  {
    id: "Hamburger",
    description: "beef, cheese, lettuce",
    price: 12,
  },
  {
    id: "Beer",
    description: "grain, hops, yeast, water",
    price: 12,
  },
];

let selectedItems = [];

openYourOrder1.addEventListener("click", function () {
  displayFoodItem(0);
});

openYourOrder2.addEventListener("click", function () {
  displayFoodItem(1);
});

openYourOrder3.addEventListener("click", function () {
  displayFoodItem(2);
});

function displayFoodItem(index) {
  yourOrder.style.display = "block";
  orderCompleted.style.display = "none";
  const foodName = document.createElement("p");
  foodName.textContent = foods[index].id;
  const foodPrice = document.createElement("p");
  foodPrice.textContent = "$" + foods[index].price;
  yourFoodOrderName.appendChild(foodName);
  yourFoodOrderPrice.appendChild(foodPrice);

  selectedItems.push(foods[index]); // Add the selected item to the array of selected items

  let totalOrderPrice = 0;
  for (let i = 0; i < selectedItems.length; i++) {
    totalOrderPrice += selectedItems[i].price;
  }

  yourTotalPrice.textContent = "$" + totalOrderPrice;
}

completeOrder.addEventListener("click", function () {
  paymentdetail.style.display = "block";
});

payMaony.addEventListener("click", function () {
  paymentdetail.style.display = "none";
  yourOrder.style.display = "none";
  orderCompleted.style.display = "block";
  yourFoodOrderName.textContent = null;
  yourFoodOrderPrice.textContent = null;
  selectedItems = []; // Clear the selected items array when completing the order
});
