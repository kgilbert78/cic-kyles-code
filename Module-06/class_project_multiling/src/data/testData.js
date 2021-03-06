/**
 * This data represents the type/shape of the database
 * objects accessed through the API on the backend. This
 * data should only be used for testing.
 */

const mediaImage = (num) => ({
    src: `https://picsum.photos/seed/${num || Math.floor(Math.random() * 1000)
        }/300`,
    alt: "product image",
})
const media = (a, b, c, d) => [
    mediaImage(a),
    mediaImage(b),
    mediaImage(c),
    mediaImage(d),
]
const description =
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum mauris nec placerat ultrices. Mauris rhoncus eleifend odio quis pharetra. Mauris pharetra metus vel felis vestibulum blandit. Mauris sit amet turpis erat.</p><p>Integer magna justo, fringilla non pulvinar non, euismod non erat. Nam sit amet ligula sit amet lorem pharetra tempus. Duis id commodo lectus. Nulla et dolor dapibus tortor.</p><p>Ut a orci sodales, faucibus purus malesuada, ullamcorper augue. Maecenas condimentum purus pretium libero finibus porttitor.</p>"

const media0 = media(3, 61, 200, 166)
const media1 = media(9, 22, 47, 50)
const media2 = media(16, 103, 173, 130)
const media3 = media(14, 63, 155, 260)
const media4 = media(27, 71, 81, 42)
const media5 = media(33, 70, 88, 183)
const media6 = media(32, 41, 55, 90)
const media7 = media(48, 58, 64, 76)
const media8 = media(102, 116, 127, 276)
const media9 = media(171, 232, 294, 202)
const media10 = media(199, 188, 144, 145)
const media11 = media(179, 148, 223, 236)

export const testData = [
    {
        id: "waterfall-retreat",
        name: "Waterfall Retreat",
        description: "Enjoy a retreat full of waterfalls. " + description,
        price: 1400,
        thumbnail: media0[0],
        media: media0,
        attributes: ["backpacking"],
        rating: 5,
    },
    {
        id: "urban-excursion",
        name: "Urban Excursion",
        description: "Travel through the city center. " + description,
        price: 900,
        thumbnail: media1[0],
        media: media1,
        attributes: ["tour"],
        rating: 4,
    },
    {
        id: "transported-away",
        name: "Transported Away",
        description:
            "Travel across the country by trains, planes, and automobiles. " +
            description,
        price: 600,
        thumbnail: media2[0],
        media: media2,
        attributes: ["tour"],
        rating: 5,
    },
    {
        id: "wooded-relaxation",
        name: "Wooded Relaxation",
        description: "Relax in the forest. " + description,
        price: 750,
        thumbnail: media3[0],
        media: media3,
        attributes: ["backpacking"],
        rating: 3,
    },
    {
        id: "serenity-shores",
        name: "Serenity Shores",
        description: "Beaches, water, and plenty of sunshine. " + description,
        price: 1100,
        thumbnail: media4[0],
        media: media4,
        attributes: ["backpacking"],
        rating: 1,
    },
    {
        id: "cliffside-overlook",
        name: "Cliffside Overlook",
        description:
            "Enjoy scenic views of the vistas and forests below. " + description,
        price: 850,
        thumbnail: media5[0],
        media: media5,
        attributes: ["backpacking"],
        rating: 4,
    },
    {
        id: "architectural-enthusiast",
        name: "Architectural Enthusiast",
        description:
            "Take a tour of exciting architectural wonders. " + description,
        price: 1550,
        thumbnail: media6[0],
        media: media6,
        attributes: ["tour"],
        rating: 4,
    },
    {
        id: "mountain-meditations",
        name: "Mountain Meditations",
        description: "Hike through the mountains and forests. " + description,
        price: 950,
        thumbnail: media7[0],
        media: media7,
        attributes: ["backpacking"],
        rating: 4,
    },
    {
        id: "cafe-hoppers",
        name: "Cafe Hoppers",
        description: "Enjoy coffee and tea from all over. " + description,
        price: 650,
        thumbnail: media8[0],
        media: media8,
        attributes: ["tour"],
        rating: 1,
    },
    {
        id: "hotel-hopscotch",
        name: "Hotel Hopscotch",
        description:
            "Stay the night in luxurious hotels while you travel. " + description,
        price: 2300,
        thumbnail: media9[0],
        media: media9,
        attributes: ["tour"],
        rating: 5,
    },
    {
        id: "drift-away",
        name: "Drift Away",
        description: "Drift away over the waters of the world. " + description,
        price: 1600,
        thumbnail: media10[0],
        media: media10,
        attributes: ["backpacking"],
        rating: 3,
    },
    {
        id: "Trailblazer",
        name: "Trailblazer",
        description:
            "Hike through various wonderlands of scenic beauty. " + description,
        price: 900,
        thumbnail: media11[0],
        media: media11,
        attributes: ["backpacking"],
        rating: 4,
    },
]

export const testDataFr = [
    {
        id: "waterfall-retreat",
        name: "Un Abri en Cascade",
        description: "Prenez plaisir &agrave; un abri plen de cascades. " + description,
        price: 1400,
        thumbnail: media0[0],
        media: media0,
        attributes: ["backpacking"],
        rating: 5,
    },
    {
        id: "urban-excursion",
        name: "Une Excursion Urbaine",
        description: "Voyagez &agrave; travers le centre de la ville. " + description,
        price: 900,
        thumbnail: media1[0],
        media: media1,
        attributes: ["tour"],
        rating: 4,
    },
    {
        id: "transported-away",
        name: "Transport&eacute; Ailleurs",
        description:
            "Voyagez &agrave; travers le pays en train, en avion, et en voiture. " +
            description,
        price: 600,
        thumbnail: media2[0],
        media: media2,
        attributes: ["tour"],
        rating: 5,
    },
    {
        id: "wooded-relaxation",
        name: "La D&eacute;tente dans le Bois",
        description: "Reposez vous dans la f&ocirc;ret. " + description,
        price: 750,
        thumbnail: media3[0],
        media: media3,
        attributes: ["backpacking"],
        rating: 3,
    },
    {
        id: "serenity-shores",
        name: "C&ocirc;te de Qui&eacute;tude",
        description: "Des plages, de l'eau, et plen de soleil. " + description,
        price: 1100,
        thumbnail: media4[0],
        media: media4,
        attributes: ["backpacking"],
        rating: 1,
    },
    {
        id: "cliffside-overlook",
        name: "Une Vue Depuis la Falaise",
        description:
            "Prenez plaisir aux vues pittoresques des f&ocirc;rets au dessous de la falaise. " + description,
        price: 850,
        thumbnail: media5[0],
        media: media5,
        attributes: ["backpacking"],
        rating: 4,
    },
    {
        id: "architectural-enthusiast",
        name: "Fervent de l'Architecture",
        description:
            "Prenez la tour des merveilles excitantes d'architecture. " + description,
        price: 1550,
        thumbnail: media6[0],
        media: media6,
        attributes: ["tour"],
        rating: 4,
    },
    {
        id: "mountain-meditations",
        name: "Des Meditations dans les Montagnes ",
        description: "Faites de la randonn&eacute;e &agrave; travers les montagnes et les f&ocirc;rets. " + description,
        price: 950,
        thumbnail: media7[0],
        media: media7,
        attributes: ["backpacking"],
        rating: 4,
    },
    {
        id: "cafe-hoppers",
        name: "Caf&eacute; Invit&eacute;s",
        description: "Prenez plaisir au caf&eacute; et au th&eacute; de partout dans le monde. " + description,
        price: 650,
        thumbnail: media8[0],
        media: media8,
        attributes: ["tour"],
        rating: 1,
    },
    {
        id: "hotel-hopscotch",
        name: "La Marelle des H&ocirc;tels",
        description:
            "Restez les nuits dans des h&ocirc;tels de luxe pendent que vous voyagez. " + description,
        price: 2300,
        thumbnail: media9[0],
        media: media9,
        attributes: ["tour"],
        rating: 5,
    },
    {
        id: "drift-away",
        name: "D&eacute;rivez d'Ailleurs",
        description: "D&eacute;rivez sur les eaux du monde. " + description,
        price: 1600,
        thumbnail: media10[0],
        media: media10,
        attributes: ["backpacking"],
        rating: 3,
    },
    {
        id: "Trailblazer",
        name: "Trailblazer",
        description:
            "Faites de la randonn&eacute;e &agrave; travers plusieurs pays des merveilles plen de la beaut&eacute; pittoresque. " + description,
        price: 900,
        thumbnail: media11[0],
        media: media11,
        attributes: ["backpacking"],
        rating: 4,
    },
]

export const testDataDe = [
    {
        id: "waterfall-retreat",
        name: "Eine Wasserfall-Zuflucht",
        description: "Genieszlig;en Sie eine Zuflucht voller Wasserf&auml;lle. " + description,
        price: 1400,
        thumbnail: media0[0],
        media: media0,
        attributes: ["backpacking"],
        rating: 5,
    },
    {
        id: "urban-excursion",
        name: "Ein Ausflug in die Stadt",
        description: "Reisen Sie durch die Innenstadt. " + description,
        price: 900,
        thumbnail: media1[0],
        media: media1,
        attributes: ["tour"],
        rating: 4,
    },
    {
        id: "transported-away",
        name: "Entfernt Transportiert",
        description:
            "Reisen Sie durch das Land mit Zug, Flugzeug, und Auto. " +
            description,
        price: 600,
        thumbnail: media2[0],
        media: media2,
        attributes: ["tour"],
        rating: 5,
    },
    {
        id: "wooded-relaxation",
        name: "Die Erholung in Wald",
        description: "Entspannen Sie sich in Wald. " + description,
        price: 750,
        thumbnail: media3[0],
        media: media3,
        attributes: ["backpacking"],
        rating: 3,
    },
    {
        id: "serenity-shores",
        name: "Die Ruhe an der K&uuml;ste",
        description: "Str&auml;nde, Wasser, und viel Sonnenschein. " + description,
        price: 1100,
        thumbnail: media4[0],
        media: media4,
        attributes: ["backpacking"],
        rating: 1,
    },
    {
        id: "cliffside-overlook",
        name: "Aussicht von die Klippen",
        description:
            "Genieszlig;en Sie die malerische Aussicht auf den Wald unter Ihnen. " + description,
        price: 850,
        thumbnail: media5[0],
        media: media5,
        attributes: ["backpacking"],
        rating: 4,
    },
    {
        id: "architectural-enthusiast",
        name: "Architektur-Enthusiast",
        description:
            "Machen Sie eine Tour durch architektonische Wunder. " + description,
        price: 1550,
        thumbnail: media6[0],
        media: media6,
        attributes: ["tour"],
        rating: 4,
    },
    {
        id: "mountain-meditations",
        name: "Meditation in den Bergen",
        description: "Wandern Sie durch die Berge und W&auml;lder. " + description,
        price: 950,
        thumbnail: media7[0],
        media: media7,
        attributes: ["backpacking"],
        rating: 4,
    },
    {
        id: "cafe-hoppers",
        name: "Der Caf&eacute;-Besucher",
        description: "Genieszlig;en Sie Kaffee und Tee aus &uuml;berall. " + description,
        price: 650,
        thumbnail: media8[0],
        media: media8,
        attributes: ["tour"],
        rating: 1,
    },
    {
        id: "hotel-hopscotch",
        name: "Hotel-Karussell",
        description:
            "&uuml;bernachten Sie w&auml;hrend Ihrer Reise in luxuri&ouml;sen Hotels. " + description,
        price: 2300,
        thumbnail: media9[0],
        media: media9,
        attributes: ["tour"],
        rating: 5,
    },
    {
        id: "drift-away",
        name: "Wegtreiben",
        description: "Lassen Sie sich weg &uuml;ber die Gew&auml;sser der Welt treiben. " + description,
        price: 1600,
        thumbnail: media10[0],
        media: media10,
        attributes: ["backpacking"],
        rating: 3,
    },
    {
        id: "Trailblazer",
        name: "Trailblazer",
        description:
            "Wandern Sie durch die verschiedenen Wunderl&auml;nder der malerische Sch&ouml;nheit. " + description,
        price: 900,
        thumbnail: media11[0],
        media: media11,
        attributes: ["backpacking"],
        rating: 4,
    },
]

export const translations = {
    CartPage: {
        yourCart: {en: "Your Cart", fr: "Votre Panier", de: "Ihr Warenkorb"},
        product: {en: "PRODUCT", fr: "PRODUIT", de: "PRODUKT"},
        price: {en: "PRICE", fr: "PRIX", de: "PREIS"},
        quantity: {en: "QUANTITY", fr: "QUANTIT&Eacute;", de: "QUANTIT&Auml;T"},
        total: {en: "TOTAL", fr: "TOTAL", de: "SUMME"},
        remove: {en: "Remove", fr: "Supprimer", de: "L&ouml;schen"},
        subTotal: {en: "Subtotal", fr: "Sous-total", de: "Zwischensumme"},
        taxesShipping: {en: "Taxes and shipping calculated at checkout", fr: "Taxes et livraison calcul&eacute;es &agrave; la caisse", de: "Steuern und Versandkosten werden an der Kasse berechnet"},
        checkout: {en: "Checkout", fr: "Caisse", de: "Kasse"},
    },
    Footer: {
        quickLinks: {en: " Quick Links", fr: " Liens Rapides", de: "Schnelle Links"},
        shippingReturn: {en: "Shipping and Return Policy", fr: "Politique d'exp&eacutedition et de retour", de: "Versand und R&uuml;ckgaberecht"},
        serviceTerms: {en: "Terms of Service", fr: "Conditions d'Utilisation", de: "Nutzungsbedingungen"},
        contact: {en: "Contact", fr: "Contact", de: "Kontakt"},
        signUp: {en: "Sign up for emails to get great deals", fr: "Inscrivez-vous aux e-mails pour obtenir de bonnes affaires", de: "Melden Sie sich f&uuml;r E-Mails an, um tolle Angebote zu erhalten"},
        enterEmail: {en: " Enter your email", fr: "Entrez votre email", de: "Geben sie ihre E-Mail Adresse ein"},
        getDeals: {en: "Get Deals", fr: "Obtenir de bonnes affaires", de: "Angebote erhalten"},
    },
    Header: { 
        home: { en: "Home", fr: "Accueil", de: "Startseite" }, 
        shop: { en: "Shop", fr: "Magasinez", de: "Einkaufen" }, 
        wiki: { en: "Wiki", fr: "Wiki", de: "Wiki" }, 
        for: { en: "for", fr: "pour", de: "f&uuml;r" }, 
        login: { en: "Login", fr: "Se connecter", de: "Anmelden" }, 
        logout: { en: "Logout", fr: "Se d&eacute;connecter", de: "Abmelden" }, 
        loggedOut: { en: "LOGGED OUT", fr: "DECONN&Eacute;CT&Eacute;", de: "ABGEMELDET" }, 
        goDark: { en: "Go Dark", fr: "Mode sombre", de: "Dunkler Modus" }, 
        goLight: { en: "Go Light", fr: "Mode clair", de: "Heller Modus" }
    },
    HomePage: {
        instructions: {en: "Click to test API connection", fr: "Cliquez pour tester la connexion API", de: "Klicken Sie hier, um die API-Verbindung zu testen"}
    },
    ProductDetailPage: {
        addToCart: {en: "Add to cart", fr: "Ajouter au panier", de: "In den Warenkorb"},
        details: {en: "The Details", fr: "Les D&eacute;tails", de: "Die Details"},
        /* NEED TO DEFINE  ${quantity}
        toast: {
            en: `Added ${quantity} item${quantity > 1 ? 's' : ''} from ${item.name} to cart`, 
            // "Added (#) item(s) from (name of package) to cart"
            fr: `${quantity} article${quantity > 1 ? 's' : ''} ${quantity > 1 ? 'ont' : 'a'} &eacute;t&eacute; ajout&eacute; &agrave; votre panier`,
            // = (#) article(s) a(ont) ??t?? ajout?? ?? votre panier
            de: `${quantity} Artikel wurde${quantity > 1 ? 'n' : ''} zu Ihrem Warenkorb hinzugef&uuml;gt`
            // (#) Artikel wurde(wurden) zu Ihrem Warenkorb hinzugef??gt
        }, 
        // TESTED SUCCESSFULLY WITH ALL 3 LANGUAGES BY IMPLEMENTING THIS IN ProductDetailPage.js:
        // const testLogicImport = {en: `Added ${quantity} item${quantity > 1 ? 's' : ''} from ${item.name} to cart`}
        // showToast(<RichText text={testLogicImport.en} />)
        */
    }, 
    ProductQuantity: {
        quantity: {en: "Quantity", fr: "Quantit&eacute;", de: "Quantit&auml;t"}
    },
    SearchPage: {
        filterOptions_label: {en: " Filter by: ", fr: "Filtrez par: ", de: "Filtern nach: "},
        filterOptions_filters: {en: "Filters", fr: "Filtres", de: "Filter"},
        filterOptions_tour: {en: "Tour", fr: "Tour", de: "Tour"},
        filterOptions_backpacking: {en: "Backpacking", fr: "De la randonn&eacute;e", de: "Rucksacktour"},
        sortOptions_label: {en: "Sort by: ", fr: "Triez Par: ", de: "Sortieren nach: "},
        sortOptions_bestselling: {en: "Bestselling", fr: "Meilleures ventes", de: "Meistverkauft"},
        sortOptions_ascending: {en: "Price Ascending", fr: "Prix ascendant", de: "Preis aufsteigend"},
        sortOptions_descending: {en: "Price Descending", fr: "Prix descendant", de: "Preis absteigend"},
        products: {en: "Products", fr: "Produits", de: "Produkte"}
    }
}