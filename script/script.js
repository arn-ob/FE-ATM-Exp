$("#bookClick").click(() => {
    console.log("Clicked")

    ga('test.ecommerce:addItem', {
        'id': '12asd2234',
        'name': 'Test Test',
        'sku': 'DD2344224',
        'category': 'Party Tosys',
        'price': '223',
        'quantity': '1',
        'currency': 'BDT' // local currency code.
    });
    ga('test.ecommerce:send');

    ga('test.ecommerce:addTransaction', {
        'id': '33345',                     // Transaction ID. Required.
        'affiliation': 'Acmes Clothing',   // Affiliation or store name.
        'revenue': '11.99',               // Grand Total.
        'shipping': '5',                  // Shipping.
        'tax': '1.29'                     // Tax.
    });
    ga('test.ecommerce:send');
})