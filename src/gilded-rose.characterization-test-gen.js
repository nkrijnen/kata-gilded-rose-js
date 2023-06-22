//
// Run with code in original state:
//
// node src/gilded-rose.characterization-test-gen.js > src/gilded-rose.characterization-test-cases.json
//

import { Item, Shop } from "./gilded-rose.js";

const names = [
    "Aged Brie",
    "Backstage passes to a TAFKAL80ETC concert",
    "Sulfuras, Hand of Ragnaros",
    "Other"
]
const [qualityMin, qualityMax] = [-1, 51];
const [sellInMin, sellInMax] = [-1, 12];

const testCases = [];

names.forEach(name => {
    for (let quality = qualityMin; quality <= qualityMax; quality++) {
        for (let sellIn = sellInMin; sellIn <= sellInMax; sellIn++) {
            const gildedRose = new Shop([new Item(name, sellIn, quality)]);
            const items = gildedRose.updateQuality();
            const expectedSellIn = items[0].sellIn;
            const expectedQuality = items[0].quality;
            testCases.push({ name, sellIn, quality, expectedSellIn, expectedQuality });
        }
    }
});

console.log(JSON.stringify(testCases));
