(function() {

console.log("This works");

//Here's where we get the customer data and order data divs.
let orderData = $('#orderData');
let customerData = $('#customerData');

//Here's where we get the links for each of the order types.
let orderBurger = $('#orderBurger');
let orderPizza = $('#orderPizza');
let orderRibs = $('#orderRibs');
let orderIceCream = $('#orderIceCream');

//Here's where we get the submit button.
let orderButton = $('#orderButton');

//Here's where we get the list where we can show what items customer has added to order.
let orderedItems = $('#orderedItems');


//Here is where we get the fields for subtotal, sales tax, and order total
let subTotalHere = $('#subTotalHere');
let salesTaxHere = $('#salesTaxHere');
let orderTotalHere = $('#orderTotalHere');


//Here are the variables used for the total order amount.
let subTotal = 0;
let orderTotal = 0;



//This funtion unhides the order and customer data divs and makes the order button active.
function unhideOrder() {
  orderButton.removeClass('disabled');
  orderData.removeClass('hide');
  customerData.removeClass('hide');
}

//This function takes the price of the item customer added to their order and updates the subtotal, sales tax, and order total. Then it updates the display of those items on the order page.
function updateTotal(price) {
  subTotal = subTotal + price;
  salesTax = (Math.round((subTotal * 0.0825)*100))/100;
  orderTotal = subTotal + salesTax;
  subTotalHere.text('$' + subTotal.toString());
  salesTaxHere.text('$' + salesTax.toString());
  orderTotalHere.text('$' + orderTotal.toString());
}



orderBurger.click(function () {
  unhideOrder();
  orderedItems.append('<li class="collection-item"><div>Hamburger<span class="secondary-content">$8.99</span></div></li>');
  updateTotal(8.99);
});

orderPizza.click(function () {
  unhideOrder();
  orderedItems.append('<li class="collection-item"><div>Pizza<span class="secondary-content">$11.99</span></div></li>');
  updateTotal(11.99);
});

orderRibs.click(function () {
  unhideOrder();
  orderedItems.append('<li class="collection-item"><div>Ribs<span class="secondary-content">$14.99</span></div></li>');
  updateTotal(14.99);
});

orderIceCream.click(function () {
  unhideOrder();
  orderedItems.append('<li class="collection-item"><div>Ice Cream<span class="secondary-content">$7.99</span></div></li>');
  updateTotal(7.99);
});


orderButton.click(function() {
  if (orderButton.hasClass('disabled')) {
    Materialize.toast('Order is empty.', 4000);
  } else {
    Materialize.toast('Thanks for trying this out. One day this may be an actual business.', 6000);
  }
});


})();
