// import products from './data/products.js';
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

//  <article class="product">
//     <h2 class="product__name">Name</h2>
//     <p class="product__description">Description</p>
//     <p class="product__price">Price: 500 credits</p>
// </article>  

const articleEl = document.createElement('article');