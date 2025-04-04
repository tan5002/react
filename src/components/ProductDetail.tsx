import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state;

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Price: ${product.price}</p>
          <input type="hidden" value={id} />
          <button className="btn btn-primary me-3">Buy Now</button>
          <button className="btn btn-secondary ml-2" onClick={() => navigate("/products")}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
