import { describe, expect, it } from 'vitest'
import { Item, Shop } from "./gilded-rose";
import testCases from "./gilded-rose.characterization-test-cases.json";

describe("Gilded Rose", () => {
  describe("should match previously captured characterization", () => {
    for (const testCase of testCases) {
      it(JSON.stringify(testCase), () => {
        const gildedRose = new Shop([new Item(testCase.name, testCase.sellIn, testCase.quality)]);
        const items = gildedRose.updateQuality();

        expect(items[0].sellIn).toEqual(testCase.expectedSellIn);
        expect(items[0].quality).toEqual(testCase.expectedQuality);
      });
    }
  });
});
