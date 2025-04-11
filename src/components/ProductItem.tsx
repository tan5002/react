import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductItem = ({ id, name, price, image }: ProductProps) => {
  const { dispatch } = useCart();
  const navigate = useNavigate(); // <-- dùng để chuyển trang

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Giá: ${price}</p>
        
        <button
          className="btn btn-success me-2"
          onClick={() =>
            dispatch({ type: "ADD_TO_CART", payload: { id, name, price, image } })
          }
        >
          Thêm vào giỏ
        </button>

        <button
          className="btn btn-primary"
          onClick={() => navigate(`/products/${id}`)} // <-- chuyển đến trang chi tiết
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
