import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('Aged Brie actually increases in Quality the older it gets', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 5, 10)]);

        const exptectedResult = [
            new Item('Aged Brie', 4, 11)
        ]

        const item = gildedRose.updateQuality();
        expect(item).to.deep.equal(exptectedResult);
    });

    it('Aged Brie actually increases in Quality the older it gets max 50', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 5, 50)]);

        const exptectedResult = [
            new Item('Aged Brie', 4, 50)
        ]

        const item = gildedRose.updateQuality();
        expect(item).to.deep.equal(exptectedResult);
    });

    it('Aged Brie actually increases in Quality the older it gets. After by date, double it', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 20)]);

        const exptectedResult = [
            new Item('Aged Brie', -1, 22)
        ]

        const item = gildedRose.updateQuality();
        expect(item).to.deep.equal(exptectedResult);
    });

    it('Sulfuras, being a legendary item, never has to be sold or decreases in Quality', function () {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);

        const exptectedResult = [
            new Item('Sulfuras, Hand of Ragnaros', 0, 80)
        ]

        const item = gildedRose.updateQuality();
        expect(item).to.deep.equal(exptectedResult);
    });

    it('Backstage passes, increases in Quality as its SellIn value approaches; Quality increases by 2 when there are 10 days or less', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 9, 10)]);

        const exptectedResult = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 8, 12)
        ]

        const item = gildedRose.updateQuality();
        expect(item).to.deep.equal(exptectedResult);
    });
    
    it('Backstage passes, increases in Quality as its SellIn value approaches; Quality increases by 3 when there are 5 days o less but Quality drops to 0 after the concert', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)]);

        const exptectedResult = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 4, 13)
        ]

        const item = gildedRose.updateQuality();
        expect(item).to.deep.equal(exptectedResult);
    });

    it('Backstage passes, increases in Quality as its SellIn value approaches; Quality increases by 1 when there are more then 10 days', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 20, 10)]);

        const exptectedResult = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 19, 11)
        ]

        const item = gildedRose.updateQuality();
        expect(item).to.deep.equal(exptectedResult);
    });

    it('Sword, At the end of each day our system lowers both values for every item', function () {
        const gildedRose = new GildedRose([new Item('Sword', 20, 10)]);

        const exptectedResult = [
            new Item('Sword', 19, 9)
        ]

        const item = gildedRose.updateQuality();
        expect(item).to.deep.equal(exptectedResult);
    });

    it('Sword, At the end of each day our system lowers both values for every item after by date', function () {
        const gildedRose = new GildedRose([new Item('Sword', 0, 49)]);

        const exptectedResult = [
            new Item('Sword', -1, 47)
        ]

        const item = gildedRose.updateQuality();
        expect(item).to.deep.equal(exptectedResult);
    });

    it('Golden Master Test', function () {
        const gildedRose = new GildedRose([
            new Item('Aged Brie', 5, 10), 
            new Item('Aged Brie', 4, 11),
            new Item('Aged Brie', 3, 12),
            new Item('Aged Brie', 1, 13),
            new Item('Aged Brie', 4, 47),
            new Item('Aged Brie', 3, 48),
            new Item('Aged Brie', 2, 49),
            new Item('Aged Brie', 1, 50),
            new Item('Aged Brie', 0, 50),
            new Item('Aged Brie', -1, 50),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
            new Item('Backstage passes to a TAFKAL80ETC concert', 6, 10),
            new Item('Backstage passes to a TAFKAL80ETC concert', 20, 10),
            new Item('Backstage passes to a TAFKAL80ETC concert', 2, 48),
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', -1, 50),
            new Item('Sword', 20,49),
            new Item('Shield', 5, 50),
            new Item('Life Potion', 2, 49),
            new Item('Scroll of Identify', 1, 20),
            new Item('Key', -1, 20),

        ]);

        const goldenRecord = [
            new Item('Aged Brie', 4, 11), 
            new Item('Aged Brie', 3, 12),
            new Item('Aged Brie', 2, 13),
            new Item('Aged Brie', 0, 14),
            new Item('Aged Brie', 3, 48),
            new Item('Aged Brie', 2, 49),
            new Item('Aged Brie', 1, 50),
            new Item('Aged Brie', 0, 50),
            new Item('Aged Brie', -1, 50),
            new Item('Aged Brie', -2, 50),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 12),
            new Item('Backstage passes to a TAFKAL80ETC concert', 19, 11),
            new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', -2, 0),
            new Item('Sword', 19,48),
            new Item('Shield', 4, 49),
            new Item('Life Potion', 1, 48),
            new Item('Scroll of Identify', 0, 19),
            new Item('Key', -2, 18),
            ]

        // Result Act
        const items = gildedRose.updateQuality();

        // Assert
        expect(items).to.deep.equal(goldenRecord);
        
    });
});
