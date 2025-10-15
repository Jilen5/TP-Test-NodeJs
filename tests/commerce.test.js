const {Basket, addToBasket, removeFromBasket, transactionAllowed, payBasket} = require('../src/ecommerce');
const assert = require('assert');

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

test('On constate qu il est possible de factoriser les tests unitaires précédents. Donner un test unitaire unique qui vérifie successivement : - l ajout d un produit au panier, - puis sa suppression, dans une même fonction.', () => {
    const basket = new Basket();
    const item = {name: 'Produit A', price: 50};
    addToBasket(basket, item);
    expect(basket.totalPrice).toBe(50);
    removeFromBasket(basket, item);
    expect(basket.totalPrice).toBe(0);
    }
);

test('Développer un test unitaire qui teste complètement la fonction transactionAllowed(). Chaque branche de la condition devra être vérifiée', () => {
    const userAccount1 = {balance: 100};
    const userAccount2 = {balance: 30};
    expect(transactionAllowed(userAccount1, 50)).toBe(true);
    expect(transactionAllowed(userAccount2, 50)).toBe(false);
    }
);

test('Écrire un test fonctionnel complet pour vérifier le bon déroulement d un paiement. ', () => {
    const basket = new Basket();
    const item1 = {name: 'Produit A', price: 50};
    const item2 = {name: 'Produit B', price: 30};
    addToBasket(basket, item1);
    addToBasket(basket, item2);
    const userAccount = {balance: 100};
    payBasket(userAccount, basket);
    expect(userAccount.balance).toBe(20);
    }
);

function testAppEcommerce() {
    try {
        let basket = new Basket();
        let item = {name: 'Produit A', price: 50};
        addToBasket(basket, item);
        assert.strictEqual(basket.totalPrice, 50);

        basket = new Basket();
        let item1 = {name: 'Produit A', price: 50};
        let item2 = {name: 'Produit B', price: 30};
        addToBasket(basket, item1);
        addToBasket(basket, item2);
        removeFromBasket(basket, item1);
        assert.strictEqual(basket.totalPrice, 30);

        basket = new Basket();
        item = {name: 'Produit A', price: 50};
        addToBasket(basket, item);
        assert.strictEqual(basket.totalPrice, 50);
        removeFromBasket(basket, item);
        assert.strictEqual(basket.totalPrice, 0);

        const userAccount1 = {balance: 100};
        const userAccount2 = {balance: 30};
        assert.strictEqual(transactionAllowed(userAccount1, 50), true);
        assert.strictEqual(transactionAllowed(userAccount2, 50), false);

        basket = new Basket();
        item1 = {name: 'Produit A', price: 50};
        item2 = {name: 'Produit B', price: 30};
        addToBasket(basket, item1);
        addToBasket(basket, item2);
        const userAccount = {balance: 100};
        payBasket(userAccount, basket);
        assert.strictEqual(userAccount.balance, 20);

        console.log('OK');
        return true;
    } catch (err) {
        console.log('ERREUR');
        return false;
    }
}

module.exports = {testAppEcommerce};



