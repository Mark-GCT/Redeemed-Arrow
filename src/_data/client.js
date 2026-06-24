module.exports = {
    name: "Redeemed Arrow Behavior Consulting",
    email: "info@redeemedarrow.com",
    phoneForTel: "3096347749",
    phoneFormatted: "(309) 634-7749",
    address: {
        lineOne: "First Address Line",
        lineTwo: "Second Address Line",
        city: "Swansea",
        state: "IL",
        zip: "62226",
        country: "US",
        mapLink: "https://maps.app.goo.gl/eZJeSi1zbSJZzSGz5",
    },
    socials: {
        facebook: "https://www.facebook.com/rachael.specialeelmore",
        mighty: "https://www.mightynetworks.com/redeemed-arrow-behavior-consulting",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.redeemedarrow.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
