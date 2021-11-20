siteData = {siteID: 1, name: "Fayette Park", photos: {url: "/images/fayetteParkToday.jpg"}, location: {popUpDescription: "Home to several prominent abolitionists, and site of speeches by Frederick Douglass."}}

// https://www.geeksforgeeks.org/how-to-use-dynamic-variable-names-in-javascript/

createCardVar = (cardData) => {
    let varBase = cardData.name.replace(/ /g,"_");
    console.log(varBase)
    let cardName = eval('let ' + varBase + '_name')
    console.log(cardName)
}

/**
GOAL:
Fayette_Park_siteID = 1 // cardData.siteID
Fayette_Park_name = "Fayette Park" // cardData.name
Fayette_Park_photos_url = "/images/fayetteParkToday.jpg" // cardData.photos[0].url
Fayette_Park_location_popUpDescription = "Home to several prominent abolitionists, and site of speeches by Frederick Douglass." // cardData.location.popUpDescription
 */

createCardVar(siteData)

// https://www.geeksforgeeks.org/how-to-use-dynamic-variable-names-in-javascript/
var k = 'value';
var i = 0;
for(i = 1; i < 5; i++) {
    eval('var ' + k + i + '= ' + i + ';');
}
console.log("value1=" + value1);
console.log("value2=" + value2);
console.log("value3=" + value3);
console.log("value4=" + value4);

/**
var i;
for(i = 1; i < 5; i++) {
    window['value'+i] = + i;
}

console.log("value1=" + value1);
console.log("value2=" + value2); 
console.log("value3=" + value3); 
console.log("value4=" + value4);
 */

// also https://www.codespeedy.com/dynamic-variable-names-in-javascript/