"use strict";


window.addEventListener("load",function () {
    calcCart();
    var cart = document.forms.cart;
    cart.elements.modelQty.onchange = calcCart;
    cart.elements.modelQty2.onchange = calcCart;

    var shippingOptions = document.querySelectorAll('input[name="shipping"]');
    for (var i = 0;i <= shippingOptions.length; i++) {
        shippingOptions[i].onclick = calcCart;
    }

});



function calcCart() {
    var cart = document.forms.cart;
    var machineCost = cart.elements.modelCost.value;
    var qIndex = cart.elements.modelQty.selectedIndex;
    var qty = cart.elements.modelQty[qIndex].value;


var machineCost2 = cart.elements.modelCost2.value;
var qIndex2 = cart.elements.modelQty2.selectedIndex;
var qty2 = cart.elements.modelQty2[qIndex2].value;



    var orderCost = machineCost * qty;
    cart.elements.orderCost.value = formatUSCurrency(orderCost);


    var orderCost2 = machineCost2 * qty2;
cart.elements.orderCost2.value = formatUSCurrency(orderCost2);



    var shipCost = document.querySelector('input[name="shipping"]:checked').value*qty;
   var shipCost2 = document.querySelector('input[name="shipping"]:checked').value*qty2;
    var finalship = shipCost + shipCost2;
    cart.elements.shippingCost.value = formatNumber(finalship);

    cart.elements.subTotal.value = formatNumber(orderCost+shipCost+orderCost2, 2);


   var salesTax = 0.08 * (orderCost + shipCost + orderCost2);
var salesTaxAmount = 0.08 * (orderCost + shipCost + orderCost2);
  cart.elements.salesTax.value = formatNumber(salesTaxAmount, 2);




    cart.elements.cartTotal.value = formatUSCurrency(orderCost+shipCost+salesTax+orderCost2);

}


function formatNumber(val, decimals) {
    return val.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

function formatUSCurrency(val) {
    return val.toLocaleString('en-US', { style: "currency", currency: "USD" });
}