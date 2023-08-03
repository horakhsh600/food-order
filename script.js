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
const userName = document.getElementById("user-name");
const userNameInputField = document.getElementById("name-inp");
const foodsName = document.getElementById("name-price-order");
const cardNumInp = document.getElementById("card-num-inp");
const cardCvvInp = document.getElementById("cvv-inp");
const foods = [
  {
    id: "Pizza",
    description: "pepperoni, mushroom, mozzarella",
    price: 14,
    delete: "remove",
  },
  {
    id: "Hamburger",
    description: "beef, cheese, lettuce",
    price: 12,
    delete: "remove",
  },
  {
    id: "Beer",
    description: "grain, hops, yeast, water",
    price: 12,
    delete: "remove",
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
  const removeItem = document.createElement("a");
  removeItem.style.textDecoration = "none";
  removeItem.style.color = "gray";
  removeItem.style.fontSize = "13px";
  removeItem.style.cursor = "pointer";
  removeItem.style.marginTop = "-32.5px";
  removeItem.style.marginLeft = "60.5px";
  removeItem.style.display = "block";
  removeItem.textContent = foods[index].delete;

  foodName.textContent = foods[index].id;
  const foodPrice = document.createElement("p");
  foodPrice.textContent = "$" + foods[index].price;
  yourFoodOrderName.appendChild(foodName);
  yourFoodOrderPrice.appendChild(foodPrice);
  yourFoodOrderName.appendChild(removeItem);

  selectedItems.push(foods[index]);

  let totalOrderPrice = 0;
  for (let i = 0; i < selectedItems.length; i++) {
    totalOrderPrice += selectedItems[i].price;
  }

  yourTotalPrice.textContent = "$" + totalOrderPrice;
  removeItem.addEventListener("click", function () {
    selectedItems.splice(index, 1);

    yourFoodOrderName.removeChild(foodName);
    yourFoodOrderPrice.removeChild(foodPrice);
    yourFoodOrderName.removeChild(removeItem);

    let totalOrderPrice = 0;
    for (let i = 0; i < selectedItems.length; i++) {
      totalOrderPrice += selectedItems[i].price;
    }

    yourTotalPrice.textContent = "$" + totalOrderPrice;

    if (selectedItems.length === 0) {
      yourTotalPrice.textContent = "$0";
    }
  });
}

completeOrder.addEventListener("click", function () {
  paymentdetail.style.display = "block";
  document.body.style.justifyItems = "center";
});
payMaony.addEventListener("click", function (event) {
  event.preventDefault();

  const nameInputValue = userNameInputField.value.trim();
  const cardNumInputValue = cardNumInp.value.trim();
  const cvvInputValue = cardCvvInp.value.trim();

  if (nameInputValue === "") {
    userNameInputField.style.border = "2px solid red";
    return;
  }

  if (cardNumInputValue === "") {
    cardNumInp.style.border = "2px solid red";
    return;
  }

  if (cvvInputValue === "") {
    cardCvvInp.style.border = "2px solid red";
    return;
  }

  paymentdetail.style.display = "none";
  yourOrder.style.display = "none";
  orderCompleted.style.display = "block";
  document.body.style.display = null;
  yourFoodOrderName.textContent = null;
  yourFoodOrderPrice.textContent = null;
  selectedItems = "";
  userName.textContent = "Thanks, " + nameInputValue + "! Your order completed";
});
