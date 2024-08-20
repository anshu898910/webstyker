const fs = require("fs");
const login = require("fca-unofficial");

// Simple echo bot. It will repeat everything that you say.
// Will stop when you say '/stop'
login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    var yourID = "100079959253161";
    const stickerIds = [
    "526214684778630",
    "526220108111421",
    "526220308111401",
    "526220484778050",
    "526220691444696",
    "526220814778017",
    "526220978111334",
    "526221104777988",
    "526221318111300",
    "526221564777942",
    "526221711444594",
    "526221971444568",
    "2041011389459668",
    "2041011569459650",
    "2041011726126301",
    "2041011836126290",
    "2041011952792945",
    "2041012109459596",
    "2041012262792914",
    "2041012406126233",
    "2041012539459553",
    "2041012692792871",
    "2041014432792697",
    "2041014739459333",
    "2041015016125972",
    "2041015182792622",
    "2041015329459274",
    "2041015422792598",
    "2041015576125916",
    "2041017422792398",
    "2041020049458802",
    "2041020599458747",
    "2041021119458695",
    "2041021609458646",
    "2041022029458604",
    "2041022286125245"
    ];
    var intervalIndex = 0;

    // Insert your desired sticker IDs here with interval delay
    setInterval(() => {
        api.sendMessage({sticker: stickerIds[intervalIndex]}, yourID);
        intervalIndex = (intervalIndex + 1) % stickerIds.length;
    }, 50000); // 60 seconds delay between stickers
    // Insert your desired sticker ID here
    api.sendMessage({sticker: stickerId}, yourID);
    var time = 50000; // in milliseconds
    setInterval(() => {
    }, time);

    
    
});
