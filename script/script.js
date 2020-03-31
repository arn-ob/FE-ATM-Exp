$("#bookClick").click(() => {
    // console.log("Clicked")
    // ga('ec:setAction', 'purchase', {
    //     id: 'asddsad232323',
    //     affiliation: 'Google Store - Online',
    //     revenue: '28.03',
    //     tax: '2.14',
    //     shipping: '4.00',
    // });
    ga('ec:addProduct', {
        'id': 'P12345',
        'name': 'Android Warhol T-Shirt',
        'category': 'Apparel',
        'brand': 'Google',
        'variant': 'black',
        'position': 1
      });
      ga('ec:setAction', 'click', {list: 'Search Results'});
    ga('send', 'pageview');
})