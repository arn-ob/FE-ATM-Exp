$("#bookClick").click(() => {
    console.log("Clicked")

    ga('ec:addProduct', {               // Provide product details in an productFieldObject.
        'id': 'P12345',                   // Product ID (string).
        'name': 'Android Warhol T-Shirt', // Product name (string).
        'category': 'Apparel',            // Product category (string).
        'brand': 'Google',                // Product brand (string).
        'variant': 'black',               // Product variant (string).
        'price': '29.20',                 // Product price (number).
        'coupon': 'APPARELSALE',          // Product coupon (string).
        'quantity': 1                     // Product quantity (number).
      });
    ga('send', 'pageview');
})