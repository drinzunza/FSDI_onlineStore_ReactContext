import { useEffect, useState } from 'react';
import DataService from '../services/dataService';
import './catalog.css';
import Product from './product';

const Catalog = () => {
  let [products, setProducts] = useState([]);

  const fetchCatalog = () => {
    // get products
    let service = new DataService();
    let prods = service.getCatalog();
    setProducts(prods);
  };

  useEffect(() => {
    fetchCatalog();
  }, []);

  return (
    <div className="catalog">
      <h2>Only the best products!</h2>
      <h3>We have # products!</h3>

      <div className="products-container">
        {products.map((prod) => (
          <Product key={prod.id} data={prod}></Product>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
