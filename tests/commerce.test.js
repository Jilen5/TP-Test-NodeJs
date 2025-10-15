const {Basket, addToBasket, removeFromBasket, transactionAllowed, payBasket} = require('../src/ecommerce');

test('Développer un test unitaire qui ajoute un produit au panier et vérifie que le montant total est correct. ', () => {
    const basket = new Basket();
    const item = {name: 'Produit A', price: 50};
    addToBasket(basket, item);
    expect(basket.totalPrice).toBe(50);
    }
);

test('Développer un test unitaire qui supprime un produit du panier et vérifie que le montant total est correct', () => {
    const basket = new Basket();
    const item1 = {name: 'Produit A', price: 50};
    const item2 = {name: 'Produit B', price: 30};
    addToBasket(basket, item1);
    addToBasket(basket, item2);
    removeFromBasket(basket, item1);
    expect(basket.totalPrice).toBe(30);
    }
);
