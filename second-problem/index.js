const products = [
    {
        name: 'Product 1',
        description: 'Lorem, ipsum dolor sit amet.',
        price: 2000,
        available: true,
        onSale: true,
    },
    {
        name: 'Product 2',
        description: 'Lorem, ipsum dolor sit amet.',
        price: 3000,
        available: false,
        onSale: false,
    },
    {
        name: 'Product 3',
        description: 'Lorem, ipsum dolor sit amet.',
        price: 1500,
        available: true,
        onSale: false,
    },
    {
        name: 'Product 4',
        description: 'Lorem, ipsum dolor sit amet.',
        price: 2500,
        available: false,
        onSale: false,
    }
];

const createArticle = function ({name, description, price}){
const articleEl = document.createElement('article');
articleEl.classList.add = 'product';

const productName = document.createElement('h2');
productName.classList.add = 'product__name';
productName.textContent = name;

const productDescrEl = document.createElement('p');
productDescrEl.classList.add = 'product__descr';
productDescrEl.textContent = description;

const productPrice = document.createElement('p');
productPrice.classList.add = 'product__price';
productPrice.textContent = `The price is ${price} credits`;

articleEl.append(productName, productDescrEl, productPrice);

return articleEl;
}

const elements = products.map(createArticle);

console.log(elements);

const containerEl = document.querySelector('.js-products');
containerEl.append(...elements)

















