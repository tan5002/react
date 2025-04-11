import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-danger">❌ Không tìm thấy sản phẩm!</p>;
  }

  const handleBuyNow = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    // 👉 Option: điều hướng sang cart
    // navigate("/cart"); 
    alert("✅ Đã thêm vào giỏ hàng!");
  };

  return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ maxWidth: "400px" }}>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">💵 Giá: ${product.price.toLocaleString()}</p>

          <div className="d-flex gap-2">
            <button className="btn btn-success" onClick={handleBuyNow}>
              🛒 Mua ngay
            </button>

            <button className="btn btn-secondary" onClick={() => navigate("/products")}>
              ⬅️ Quay lại
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
