module.exports = {
    name: "Redeemed Arrow Behavior Consulting",
    email: "info@redeemedarrow.com",
    phoneForTel: "3096347749",
    phoneFormatted: "(309) 634-7749",
    address: {
        lineOne: "First Address Line",
        lineTwo: "Second Address Line",
        city: "Greater St. Louis Metro Area",
        state: "IL",
        zip: "62226",
        country: "US",
        mapLink: "https://maps.app.goo.gl/vcgb2R8kAMidpzQu9",
    },
    socials: {
        facebook: "https://www.facebook.com/profile.php?id=61591234964206",
        circle: "",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.redeemedarrow.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
