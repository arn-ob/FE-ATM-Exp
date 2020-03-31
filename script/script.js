$("#bookClick").click(() => {
    console.log("Clicked")

    ga('test.ecommerce:addTransaction', {
        'id': '12123123434',                     // Transaction ID. Required.
        'affiliation': 'Acmes Clothing',   // Affiliation or store name.
        'revenue': '11.99',               // Grand Total.
        'shipping': '5',                  // Shipping.
        'tax': '1.29'                     // Tax.
    });
    ga('test.ecommerce:send');
})