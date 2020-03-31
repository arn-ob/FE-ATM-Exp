$("#bookClick").click(() => {
    console.log("Clicked")
    ga('ec:setAction', 'purchase', {
        id: 'asddsad232323',
        affiliation: 'Google Store - Online',
        revenue: '28.03',
        tax: '2.14',
        shipping: '4.00',
    });
    ga('send', 'pageview');
})