import "bootstrap/dist/css/bootstrap.min.css";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

interface ProductCardProps {
  price: number;
  image: string;
  title: string;
  description: string;
  isBestSeller: boolean;
}

export default function ProductCard({ price, image, title, description, isBestSeller }: ProductCardProps) {
  const [count, setCount] = useState(1);
  const [currentImage, setCurrentImage] = useState(image);

  const colorOptions = [
    { color: "bg-success", image: "https://paragon.com.vn/wp-content/uploads/2022/04/Bong-den-led-bulb-9w-E27-PBCB942E27L-1.jpeg" },
    { color: "bg-primary", image: "https://denledgiarehcm.com/wp-content/uploads/2020/10/bong-den-bup-led-trai-chanh-3w.png" },
    { color: "bg-danger", image: "https://catihome.com/wp-content/uploads/2022/10/NV62.jpeg" },
    { color: "bg-warning", image: "https://catihome.com/wp-content/uploads/2021/06/NV30.jpeg" },
  ];

  return (
    <div className="d-flex align-items-center min-vh-100 bg-gradient" style={{ background: "linear-gradient(to bottom right, #cce5ff, #d6c4f3)" }}>
      <div className="card shadow-lg overflow-hidden d-flex flex-row" style={{ maxWidth: "800px", borderRadius: "20px" }}>
        
        {/* Image Section */}
        <div className="col-6 bg-light d-flex justify-content-center align-items-center flex-column p-4">
          <img src={currentImage} alt={title} className="img-fluid" />
          <div className="d-flex align-items-center mt-3">
            <span className="text-muted me-3">Color</span>
            <div className="d-flex gap-2">
              {colorOptions.map(({ color, image }, index) => (
                <span
                  key={index}
                  className={`rounded-circle ${color} d-inline-block`}
                  style={{ width: "20px", height: "20px", cursor: "pointer" }}
                  onClick={() => setCurrentImage(image)}
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="col-6 p-4 d-flex flex-column">
          <div className="text-start">
            <span className="text-success fw-bold">NEW</span>
            {isBestSeller && <span className="ms-3 bg-danger rounded-4 p-2 text-white">Best Seller</span>}
            <h2 className="fw-bold mt-2">{title}</h2>
          </div>

          {/* Quantity & Controls */}
          <div className="d-flex align-items-center justify-content-between mt-3">
            <div className="price">
              <h6 className="text-muted">NIGHT LAMP</h6>
              <p className="text-success h4 fw-semibold">€{(price * count).toFixed(2)}</p>
            </div>
            <div className="quantity">
              <h6 className="text-muted">QUANTITY</h6>
              <div className="d-flex align-items-center border rounded">
                <button className="btn btn-light px-2" onClick={() => setCount((prev) => Math.max(1, prev - 1))}>
                  <FaMinus />
                </button>
                <span className="px-3 fw-semibold">{count}</span>
                <button className="btn btn-light px-2" onClick={() => setCount((prev) => prev + 1)}>
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>

          <p className="text-start mt-3">{description}</p>

          {/* Total Price & Button */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <p className="text-muted fw-semibold h5">Total: €{(price * count).toFixed(2)}</p>
            <button className="btn btn-primary d-flex align-items-center gap-2 px-4 py-2">
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
