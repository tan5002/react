import React from "react";
import { useNavigate, useParams } from "react-router-dom";

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
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productList.find((e) => e.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Price: ${product.price}</p>
        <input type="hidden" value={id} />
        <button className="btn btn-primary me-3">Buy Now</button>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/products")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
