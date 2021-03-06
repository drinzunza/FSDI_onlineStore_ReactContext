let catalog = [
  {
    id: 1,
    price: 12.32,
    stock: 13,
    title: 'Cabbage',
    image: 'img-1.jpg',
    discount: 5,
    category: 'Vegetable',
  },
  {
    id: 2,
    price: 22.71,
    stock: 21,
    title: 'Strawberry',
    image: 'product-6.jpg',
    discount: 10,
    category: 'Fruit',
  },
  {
    id: 3,
    price: 32.0,
    stock: 20,
    title: 'Bell pepper',
    image: 'img-14.jpg',
    discount: 0,
    category: 'Vegetable',
  },
  {
    id: 4,
    price: 6.99,
    stock: 10,
    title: 'Carrot',
    image: 'img-4.jpg',
    discount: 0,
    category: 'Vegetable',
  },
  {
    id: 5,
    price: 16.39,
    stock: 34,
    title: 'Banana',
    image: 'img-5.jpg',
    discount: 4,
    category: 'Fruit',
  },
  {
    id: 6,
    price: 14.0,
    stock: 14,
    title: 'Orange',
    image: 'product-10.jpg',
    discount: 0,
    category: 'Fruit',
  },
  {
    id: 7,
    price: 12.0,
    stock: 11,
    title: 'Egg',
    image: 'img-15.jpg',
    discount: 12,
    minimum: 6,
    category: 'Dairy & Eggs',
  },
  {
    id: 8,
    price: 19.1,
    stock: 11,
    title: 'Orange Juice',
    image: 'product-15.jpg',
    discount: 12,
    category: 'Beverages',
  },
];

class DataService {
  getCatalog() {
    // TODO: call the sever and get the data
    return catalog;
  }
}

export default DataService;
