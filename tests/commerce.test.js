const {Basket, addToBasket, removeFromBasket, transactionAllowed, payBasket} = require('../src/ecommerce');

test('Développer un test unitaire qui ajoute un produit au panier et vérifie que le montant total est correct. ', () => {
    const basket = new Basket();
    const item = {name: 'Produit A', price: 50};
    addToBasket(basket, item);
    expect(basket.totalPrice).toBe(50);
    }
);