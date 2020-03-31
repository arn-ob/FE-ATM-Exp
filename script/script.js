$("#bookClick").click(() => {
    console.log("Clicked")


    ga('send', {
        hitType: 'event',
        eventCategory: 'Videos',
        eventAction: 'play',
        eventLabel: 'Fall Campaign'
    });


})