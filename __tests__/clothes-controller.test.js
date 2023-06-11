const {
   create,
   index, 
   show,
   destroy,
   update,
   addToCart,
   cartTotal
} = require("../src/clothes-controller");
const cartData = require("../data/sample-cart-data.json");
const clothesData = require("../data/sample-clothes-data.json");

describe('index()', () => {
    test('should show all of the clothesData', () => {
        const actual = index(clothesData);
        const expected = `id Qr23 name Sweater priceInCents 2000 inStock true size M
id We45 name Shirt priceInCents 1500 inStock false size S
id Po98 name Jeans priceInCents 2500 inStock true size L
id P8yU name Pants priceInCents 3000 inStock false size L`;
        expect(actual).toBe(expected);
    });
});

describe('show()', () => {
    test('should show a single item in clothesData', () => {
        const actual = show(clothesData, "Qr23");
        const expected = `id Qr23 name Sweater priceInCents 2000 inStock true size M`;
        expect(actual).toBe(expected);
    });
});

describe('update()', () => {
    test('should update an item in clothesData', () => {
        const actual = update(clothesData, "Qr23", "1000", false, "L");
        const expected = [{"id": "Qr23", "inStock": false, "name": "Sweater", "priceInCents": "1000", "size": "L"}, {"id": "We45", "inStock": false, "name": "Shirt", "priceInCents": "1500", "size": "S"}, {"id": "Po98", "inStock": true, "name": "Jeans", "priceInCents": "2500", "size": "L"}, {"id": "P8yU", "inStock": false, "name": "Pants", "priceInCents": "3000", "size": "L"}];
        expect(actual).toStrictEqual(expected);
    });
});

describe('destroy()', () => {
    test('should remove an item from clothesData', () => {
        const actual = destroy(clothesData, "Qr23");
        const expected = 3;
        expect(actual.length).toBe(expected);
    });
});


describe('create()', () => {
    test('should add another item to the clothesData', () => {
        const actual = create(clothesData, "L");
        const expected = 4;
        expect(actual.length).toBe(expected);
    });
});

describe('cartTotal()', () => {
    test('should return the total price of items in cartData', () => {
        const actual = cartTotal(cartData);
        const expected = 6000;
        expect(actual).toBe(expected);
    });
});

describe('addToCart()', () => {
    test('should add an item to cartData', () => {
        const actual = addToCart(cartData, clothesData, "P8yU");
        const expected = [{"id": "Qr23", "inStock": true, "name": "Sweater", "priceInCents": "2000", "size": "M"}, {"id": "We45", "inStock": false, "name": "Shirt", "priceInCents": "1500", "size": "S"}, {"id": "Po98", "inStock": true, "name": "Jeans", "priceInCents": "2500", "size": "L"}, {"id": "P8yU", "inStock": false, "name": "Pants", "priceInCents": "3000", "size": "L"}];
        expect(actual).toStrictEqual(expected);
    });
});
