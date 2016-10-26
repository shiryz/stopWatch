describe("Gilded Rose", function() {
  it("Normal item before sell date", function() {
    gildedRose = new GildedRose("normal", 10, 5);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(4);
  });

  it("Normal item before sell date", function() {
    gildedRose = new GildedRose("normal", 5, 10);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(9);
    expect(gildedRose.sell_in).toBe(4);
  });

  it("Normal item on sell date", function() {
    gildedRose = new GildedRose("normal", 0, 10);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(8);
    expect(gildedRose.sell_in).toBe(-1);
  });

  it("Normal item after sell date", function() {
    gildedRose = new GildedRose("normal", -10, 10);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(8);
    expect(gildedRose.sell_in).toBe(-11);
  });

  it("Normal item of zero quality", function() {
    gildedRose = new GildedRose("normal", 5, 0);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(0);
    expect(gildedRose.sell_in).toBe(4);
  });

  it("Brie item before sell date", function() {
    gildedRose = new GildedRose("Aged Brie", 5, 10);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(11);
    expect(gildedRose.sell_in).toBe(4);
  });

  it("Brie item before sell date with max quality", function() {
    gildedRose = new GildedRose("Aged Brie", 5, 50);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(50);
    expect(gildedRose.sell_in).toBe(4);
  });

  it("Brie item on sell date", function() {
    gildedRose = new GildedRose("Aged Brie", 0, 10);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(12);
    expect(gildedRose.sell_in).toBe(-1);
  });

  it("Brie item on sell date near max quality", function() {
    gildedRose = new GildedRose("Aged Brie", 0, 49);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(50);
    expect(gildedRose.sell_in).toBe(-1);
  });

  it("Brie item on sell date with max quality", function() {
    gildedRose = new GildedRose("Aged Brie", 0, 50);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(50);
    expect(gildedRose.sell_in).toBe(-1);
  });

  it("Brie item after sell date", function() {
    gildedRose = new GildedRose("Aged Brie", -10, 10);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(12);
    expect(gildedRose.sell_in).toBe(-11);
  });

  it("Sulfuras item before sell date", function() {
    gildedRose = new GildedRose("Sulfuras, Hand of Ragnaros", 5, 80);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(80);
    expect(gildedRose.sell_in).toBe(5);
  });

  it("Sulfuras item on sell date", function() {
    gildedRose = new GildedRose("Sulfuras, Hand of Ragnaros", 0, 80);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(80);
    expect(gildedRose.sell_in).toBe(0);
  });

  it("Sulfuras item after sell date", function() {
    gildedRose = new GildedRose("Sulfuras, Hand of Ragnaros", -10, 80);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(80);
    expect(gildedRose.sell_in).toBe(-10);
  });

  it("Backstage pass long before sell date", function() {
    gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", 11, 10);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(11);
    expect(gildedRose.sell_in).toBe(10);
  });

  it("Backstage pass medium close to sell date upper bound", function() {
    gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", 10, 10);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(12);
    expect(gildedRose.sell_in).toBe(9);
  });

  it("Backstage pass medium close to sell date upper bound at max quality", function() {
    gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", 10, 50);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(50);
    expect(gildedRose.sell_in).toBe(9);
  });

  it("Backstage pass medium close to sell date lower bound", function() {
    gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", 6, 10);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(12);
    expect(gildedRose.sell_in).toBe(5);
  });

  it("Backstage pass medium close to sell date lower bound max quality", function() {
    gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", 6, 50);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(50);
    expect(gildedRose.sell_in).toBe(5);
  });

  it("Backstage pass very close to sell date upper bound", function() {
    gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", 5, 10);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(13);
    expect(gildedRose.sell_in).toBe(4);
  });

  it("Backstage pass very close to sell date upper bound at max quality", function() {
    gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", 5, 50);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(50);
    expect(gildedRose.sell_in).toBe(4);
  });

  it("Backstage pass very close to sell date lower bound", function() {
    gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", 1, 10);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(13);
    expect(gildedRose.sell_in).toBe(0);
  });

  it("Backstage pass very close to sell date lower bound at max quality", function() {
    gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", 1, 50);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(50);
    expect(gildedRose.sell_in).toBe(0);
  });

  it("Backstage pass on sell date", function() {
    gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", 0, 10);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(0);
    expect(gildedRose.sell_in).toBe(-1);
  });

  it("Backstage pass after sell date", function() {
    gildedRose = new GildedRose("Backstage passes to a TAFKAL80ETC concert", -10, 10);
    gildedRose.update_quality();
    expect(gildedRose.quality).toBe(0);
    expect(gildedRose.sell_in).toBe(-11);
  });

  // TODO: next test are skipped :( till someone write the functionality

  // it("Conjured item before sell date", function() {
  //   gildedRose = new GildedRose("Conjured Mana Cake", 5, 10);
  //   gildedRose.update_quality();
  //   expect(gildedRose.quality).toBe(8);
  //   expect(gildedRose.sell_in).toBe(4);
  // });
  //
  // it("Conjured item at zero quality", function() {
  //   gildedRose = new GildedRose("Conjured Mana Cake", 5, 0);
  //   gildedRose.update_quality();
  //   expect(gildedRose.quality).toBe(0);
  //   expect(gildedRose.sell_in).toBe(4);
  // });
  //
  // it("Conjured item on sell date", function() {
  //   gildedRose = new GildedRose("Conjured Mana Cake", 0, 10);
  //   gildedRose.update_quality();
  //   expect(gildedRose.quality).toBe(6);
  //   expect(gildedRose.sell_in).toBe(-1);
  // });
  //
  // it("Conjured item on sell date at zero quality", function() {
  //   gildedRose = new GildedRose("Conjured Mana Cake", 0, 0);
  //   gildedRose.update_quality();
  //   expect(gildedRose.quality).toBe(0);
  //   expect(gildedRose.sell_in).toBe(-1);
  // });
  //
  // it("Conjured item after sell date", function() {
  //   gildedRose = new GildedRose("Conjured Mana Cake", -10, 10);
  //   gildedRose.update_quality();
  //   expect(gildedRose.quality).toBe(6);
  //   expect(gildedRose.sell_in).toBe(-11);
  // });
  //
  // it("Conjured item after sell date at zero quality", function() {
  //   gildedRose = new GildedRose("Conjured Mana Cake", -10, 0);
  //   gildedRose.update_quality();
  //   expect(gildedRose.quality).toBe(0);
  //   expect(gildedRose.sell_in).toBe(-11);
  // });
});
