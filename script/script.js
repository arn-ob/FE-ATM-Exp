$("#bookClick").click(() => {
    // console.log("Clicked")
    // ga('ec:setAction', 'purchase', {
    //     id: 'asddsad232323',
    //     affiliation: 'Google Store - Online',
    //     revenue: '28.03',
    //     tax: '2.14',
    //     shipping: '4.00',
    // });

    let productObj = {
        name: 'asdasd',
        id: 'asdasdsa232131312',
        price: '221',
        brand: '222',
        cat: 'food',
        variant: 'na',
        position: 'blank',
        url: 'www.google.com'
    }


    dataLayer.push({
        'event': 'productClick',
        'ecommerce': {
          'click': {
            'actionField': {'list': 'Search Results'},      // Optional list property.
            'products': [{
              'name': productObj.name,                      // Name or ID is required.
              'id': productObj.id,
              'price': productObj.price,
              'brand': productObj.brand,
              'category': productObj.cat,
              'variant': productObj.variant,
              'position': productObj.position
             }]
           }
         }
      });
})