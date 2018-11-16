const cart = require('./cart');
const cars = require('./data/cars');

describe('Cart Properties', () => {
	test('expect cart is an empty array', () => {
		expect(Array.isArray(cart.cart)).toEqual(true);
		expect(cart.cart.length).toEqual(0);
	});
	test('Total should default to 0', () => {
		expect(cart.total).toEqual(0);
	});
});

describe('Cart Methods', () => {
	afterEach(() => {
		cart.cart = [];
		cart.total = 0;
	});

	test('addToCart() should increase the cart length by 1', () => {
		cart.addToCart(cars[0]);
		cart.addToCart(cars[1]);
		expect(cart.cart.length).toEqual(2);
		// expect(cart.cart[0]).toEqual(cars[0]);
		// expect(cart.cart[1]).toEqual(cars[1]);
	});
	test('cart at index of length-1 should be new car', () => {
		cart.addToCart(cars[0]);
		cart.addToCart(cars[1]);
		// expect(cart.cart.length).toEqual(2);
		expect(cart.cart[0]).toEqual(cars[0]);
		expect(cart.cart[1]).toEqual(cars[1]);
	});
	test('after addToCart() total should be increased by cars price', () => {
		cart.addToCart(cars[0]);
		cart.addToCart(cars[1]);
		expect(cart.total).toEqual(cars[0]['price'] + cars[1]['price']);
	});
	test('removeFromCart() should decrease length by one', () => {
		cart.addToCart(cars[0]);
		cart.addToCart(cars[1]);
		cart.addToCart(cars[2]);
		cart.removeFromCart(1);

		expect(cart.cart.length).toEqual(2);
		expect(cart.cart[1]).toEqual(cars[2]);
	});
	test("removeFromCard() decreases price by removed item's price", () => {
		cart.addToCart(cars[0]);
		cart.addToCart(cars[1]);
		cart.addToCart(cars[2]);
		cart.removeFromCart(1);

		expect(cart.total).toEqual(cars[0]['price'] + cars[2]['price']);
	});
	test('checkout() should reset cart and total', () => {
		cart.addToCart(cars[0]);
		cart.addToCart(cars[1]);
		cart.addToCart(cars[2]);
		cart.checkout();
		expect(cart.total).toEqual(0);
		expect(cart.cart.length).toEqual(0);
	});
});
