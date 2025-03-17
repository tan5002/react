import "bootstrap/dist/css/bootstrap.min.css";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";

export default function ProductCard(props:  {
    price: number;
    image: string;
    title: string;
    description: string;
    quantity: number;
    totalPrice: number;
}) {
  const { price, image, title,description, quantity, totalPrice } = props;

  return (
    <div className="d-flex align-items-center min-vh-100 bg-gradient" style={{ background: "linear-gradient(to bottom right, #cce5ff, #d6c4f3)" }}>
      <div className="card shadow-lg overflow-hidden d-flex flex-row" style={{ maxWidth: "800px", borderRadius: "20px" }}>
        {/* Image Section */}
        <div className="col-6 bg-light d-flex justify-content-center align-items-center flex-column p-4">
          <img src={image} alt={title} className="img-fluid" />
          <div className="d-flex align-items-center mt-3">
            <span className="text-muted me-3">Color</span>
            <div className="d-flex gap-2">
              <span className="rounded-circle bg-success d-inline-block" style={{ width: "20px", height: "20px" }}></span>
              <span className="rounded-circle bg-primary d-inline-block" style={{ width: "20px", height: "20px" }}></span>
              <span className="rounded-circle bg-danger d-inline-block" style={{ width: "20px", height: "20px" }}></span>
              <span className="rounded-circle bg-warning d-inline-block" style={{ width: "20px", height: "20px" }}></span>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="col-6 p-4 d-flex flex-column">
          <div className="text-start">
            <span className="text-success fw-bold">NEW</span>
            <h2 className="fw-bold mt-2">{title}</h2>
          </div>
          
          {/* Quantity & Controls */}
          <div className="d-flex align-items-center justify-content-between mt-3">
            <div className="price">
                <h6 className="text-muted">NIGHT LAMP</h6>
                <p className="text-success h4 fw-semibold">€{price.toFixed(2)}</p>
            </div>
            <div className="quantity">
                <h6 className="text-muted ">QUANTITY</h6>
                <div className="d-flex align-items-center border rounded">
                    <button className="btn btn-light px-2" >
                    <FaMinus />
                    </button>
                    <span className="px-3 fw-semibold">{quantity}</span>
                    <button className="btn btn-light px-2">
                    <FaPlus />
                    </button>
                </div>
            </div>
            
          </div>
          <p className="text-start mt-3">{description}</p>
          
          {/* Colors */}
          
          {/* Total Price & Button */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <p className="text-muted fw-semibold h5">Total: €{totalPrice}</p>
            <button className="btn btn-primary d-flex align-items-center gap-2 px-4 py-2">
               <FaShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}