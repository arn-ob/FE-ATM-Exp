$("#bookClick").click(() => {
    console.log("Clicked")
    ga('ec:setAction', 'purchase', {
        id: 'T12345',
        affiliation: 'Google Store - Online',
        revenue: '28.03',
        tax: '2.14',
        shipping: '4.00',
        coupon: 'SUMMER2013'
    });
    ga('send', 'pageview');
})