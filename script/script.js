$("#bookClick").click(() => {
    console.log("Clicked")


    ga('send', {
        hitType: 'event',
        eventCategory: 'Videos',
        eventAction: 'play',
        eventLabel: 'Fall Campaign'
    });

    ga('send', {
        hitType: 'event',
        eventCategory: 'Videos',
        eventAction: 'play',
        eventLabel: 'Fall Campaign'
    });

    ga('ecommerce:addTransaction', {
        'id': '1234',                     // Transaction ID. Required.
        'affiliation': 'Acme Clothing',   // Affiliation or store name.
        'revenue': '11.99',               // Grand Total.
        'shipping': '5',                  // Shipping.
        'tax': '1.29'                     // Tax.
    });
    ga('ecommerce:send');
})