import React from 'react';
import { CartProvider } from '../context/CartContext';
import { products } from '../data/products';
import ProductItem from '../components/ProductItem';
import Cart from '../components/Cart';



const ProductList = () => {
  return (
    <CartProvider>
        <Cart />
      <div className="container ms-5">
        <h2 className="my-4">🛍️ Sản phẩm</h2>
        <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1 g-2">
          {products.map((product) => (
            <ProductItem key={product.id} id={product.id} name={product.name} price={product.price} image={product.image} />
          ))}
        </div>
      </div>
    </CartProvider>
  );
};

export default ProductList;
