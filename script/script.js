$("#bookClick").click(() => {
    console.log("Clicked")

    ga('test.ecommerce:addItem', {
        'id': '1234',                     // Transaction ID. Required.
        'name': 'Fluffy Pink Bunnies',    // Product name. Required.
        'sku': 'DD23444',                 // SKU/code.
        'category': 'Party Toys',         // Category or variation.
        'price': '11.99',                 // Unit price.
        'quantity': '1'                   // Quantity.
      });

    ga('test.ecommerce:addTransaction', {
        'id': '12123123434',                     // Transaction ID. Required.
        'affiliation': 'Acmes Clothing',   // Affiliation or store name.
        'revenue': '11.99',               // Grand Total.
        'shipping': '5',                  // Shipping.
        'tax': '1.29'                     // Tax.
    });
    ga('test.ecommerce:send');
})