$("#bookClick").click(() => {
    console.log("Clicked")
    ga('send', 'ec:setAction', 'purchase', {
      id: 'T12345',
      affiliation: 'Google Store - Online',
      revenue: '28.03',
      tax: '2.14',
      shipping: '4.00',
      coupon: 'SUMMER2013'
  });

    // ga('send', 'ec:addProduct', {               // Provide product details in a productFieldObject.
    //   'id': 'P123453',                   // Product ID (string).
    //   'name': 'Android Warhol T-Shirts', // Product name (string).
    //   'category': 'Apparel',            // Product category (string).
    //   'brand': 'Google',                // Product brand (string).
    //   'variant': 'Black',               // Product variant (string).
    //   'position': 1,                    // Product position (number).
    //   'dimension1': 'Member'            // Custom dimension (string).
    // });
    
    // ga('ec:setAction', 'click', {       // click action.
    //   'list': 'Search Results'          // Product list (string).
    // });

})