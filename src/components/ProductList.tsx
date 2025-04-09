import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const productList = [
        { id: 1, name: 'Product 1', description: 'This is product', price: 1, image: "https://plus.unsplash.com/premium_photo-1681412205359-a803b2649d57?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { id: 2, name: 'Product 2', description: 'This is product', price: 1,image: "https://plus.unsplash.com/premium_photo-1681412205359-a803b2649d57?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { id: 3, name: 'Product 3', description: 'This is product', price: 1, image: "https://plus.unsplash.com/premium_photo-1681412205359-a803b2649d57?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { id: 4, name: 'Product 4', description: 'This is product', price: 1, image: "https://plus.unsplash.com/premium_photo-1681412205359-a803b2649d57?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { id: 5, name: 'Product 5', description: 'This is product', price: 1, image: "https://plus.unsplash.com/premium_photo-1681412205359-a803b2649d57?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { id: 6, name: 'Product 6', description: 'This is product', price: 1, image: "https://plus.unsplash.com/premium_photo-1681412205359-a803b2649d57?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { id: 7, name: 'Product 7', description: 'This is product', price: 1, image: "https://plus.unsplash.com/premium_photo-1681412205359-a803b2649d57?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { id: 8, name: 'Product 8', description: 'This is product', price: 1, image: "https://plus.unsplash.com/premium_photo-1681412205359-a803b2649d57?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { id: 9, name: 'Product 9', description: 'This is product', price: 1, image: "https://plus.unsplash.com/premium_photo-1681412205359-a803b2649d57?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        { id: 10, name: 'Product 10', description: 'This is product', price: 1, image: "https://plus.unsplash.com/premium_photo-1681412205359-a803b2649d57?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    ]
    return (
        <div >
            <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1 gap-3">

            {productList.map((product) => (
              <div className="card" style={{ width: "18rem" }}>
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <Link to={`/products/${product.id}`} state={product} className="btn btn-primary">
                    Detail
                  </Link>
                </div>
              </div>
            ))}
            </div>
        </div>
    );
};

export default ProductList;