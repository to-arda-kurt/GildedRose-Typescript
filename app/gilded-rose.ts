export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    changeDay(day: number): number {
        return day - 1;
    }

    evenFifty(nmbr: number): number {
        let sellIn = nmbr > 50 ? 50 : nmbr;
        return sellIn;
    }

    agedBrie(item: Item): Item {

        item.quality = item.sellIn < 0 ? item.quality + 2 : item.quality + 1
        item.quality = this.evenFifty(item.quality);
        return item;
    }

    backStage(item: Item): Item {

        if (item.sellIn >= 10 ) {
            item.quality = item.quality + 1
        }

        if (item.sellIn >= 5) {
            item.quality = item.quality + 2
        }

        if (item.sellIn >= 0) {
            item.quality = item.quality + 3
        }

        if (item.sellIn < 0) {
            item.quality = 0;
        }

        item.quality = this.evenFifty(item.quality);
        return item;
    }

    sulfuras(item: Item): Item {
        item.quality = 80;
        item.sellIn = 0;
        return item;
    }

    basicItems(item: Item): Item {
        item.quality = item.sellIn < 0 ? item.quality - 2 : item.quality - 1;
        return item;
    }

    isConjured(name: string): boolean {
        return name.startsWith('Conjured' || 'conjured');
    }

    conjured(item: Item): Item {
        item.quality = item.sellIn < 0 ? item.quality - 4 : item.quality - 2;
        return item;

    }

    updateQuality() {
        // for (let i = 0; i < this.items.length; i++)
        this.items = this.items.map(item => {

            item.sellIn = this.changeDay(item.sellIn);

            const isConjured = this.isConjured(item.name) 

            if (isConjured) return this.conjured(item);

            switch (item.name) {

                case 'Aged Brie':
                    return this.agedBrie(item);

                case 'Backstage passes to a TAFKAL80ETC concert':
                    return this.backStage(item);

                case 'Sulfuras, Hand of Ragnaros':
                    return this.sulfuras(item);

                default:
                    return this.basicItems(item);

            }
        })

        return this.items;

    }

}
