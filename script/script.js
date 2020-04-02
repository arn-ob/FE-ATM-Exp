$("#bookClick").click(() => {
  //   console.log("Clicked")
  //   ga('send', 'ec:setAction', 'purchase', {
  //     id: 'T12345',
  //     affiliation: 'Google Store - Online',
  //     revenue: '28.03',
  //     tax: '2.14',
  //     shipping: '4.00',
  //     coupon: 'SUMMER2013'
  // });
  // wORKING
  // ga('ec:setAction', 'purchase', {
  //   'id': 'SSS556388AASSTT',
  //   'affiliation': 'Google Store - Online',
  //   'revenue': '50',
  //   'tax': '2.85',
  //   'shipping': '5.34',
  //   'coupon': 'SUMMER2013'    // User added a coupon at checkout.
  // });
  // ga('send', 'event', 'purchase')

  // Worked
  window.dataLayer.push({
    'event': 'purchase',
    'ecommerce': {
      'purchase': {
        'actionField': {
          'id': 'TEST3',                         // Transaction ID. Required for purchases and refunds.
          'affiliation': 'Online Store 2',
          'revenue': '10',                     // Total transaction value (incl. tax and shipping)
          'tax': '4.90',
          'shipping': '5.99',
          'coupon': 'SUMMER_SALE332'
        },

      }
    }
  });

  // ga('ec:ec:addProduct', {
  //   'id': 'TTTRREEW223',
  //   'affiliation': 'Google Store - Online',
  //   'revenue': '37.39',
  //   'tax': '2.85',
  //   'shipping': '5.34',
  //   'coupon': 'SUMMER2013'    // User added a coupon at checkout.
  // });

  // ga('send', 'pageview');   

  // ga('send', 'pageview');
  // ga('send', 'pageview');
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