import { useState } from "react";
  export default function ProductCard(props:{
  name: string;
  category: string;
  price: number;
  quantity: number;
  description: string;
  totalPrice: number;
  colors: { color: string; imageUrl: string }[];
  imageUrl: string;
}){
     const {name,
      category,
      price,
      description,
      colors }= props;
      const [quantity, setQuantity] = useState(props.quantity);
    const [totalPrice, setTotalPrice] = useState(price * props.quantity);

  // State quản lý màu sắc và ảnh sản phẩm
  const [selectedColor, setSelectedColor] = useState(colors[0].color);
  const [imageUrl, setImageUrl] = useState(colors[0].imageUrl);

  // Hàm tăng số lượng
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setTotalPrice((quantity + 1) * price);
  };

  // Hàm giảm số lượng
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice((quantity - 1) * price);
    }
  };

  // Hàm chọn màu
  const handleColorClick = (color: string, imageUrl: string) => {
    setSelectedColor(color);
    setImageUrl(imageUrl);
  };

    return(
        <>
      {/* <div className="bg-white shadow-lg d-flex rounded-2xl p-6 max-w-lg mx-auto p-4"> */}
        <div className="container d-flex align-items-start shadow-lg rounded-4 p-4 bg-white " style={{ maxWidth: "700px" }}>

          <div className="col-md-5">
              <img src={imageUrl} alt={name} className="img-fluid rounded-3" style={{ maxWidth: "100%", height: "350px", objectFit: "cover"  }} />
              <div className="d-flex mt-4 ms-5">
                <p className="fw-bold mb-2">COLOR</p>
                <div className="d-flex gap-2 ms-3">
                    {colors.map((colorObj, index) => (
                   <span
                   key={index}
                   className={`rounded-circle border ${selectedColor === colorObj.color ? "border-primary" : ""}`}
                   style={{
                     width: "20px",
                     height: "20px",
                     backgroundColor: colorObj.color,
                     display: "inline-block",
                     cursor: "pointer",
                   }}
                   onClick={() => handleColorClick(colorObj.color, colorObj.imageUrl)}
                 ></span>
                    ))}
                </div>
        </div>
          </div>
          <div className="col-md-7 ps-4 text-start">
              <span className="badge bg-info text-dark fw-semibold">NEW</span>
              <h2 className="mt-2 fw-bold">{name}</h2>
              <p className="text-uppercase text-secondary small">{category}</p>

              <div className="d-flex align-items-center mt-3">
                  <div>
                      <p className="text-success fw-bold fs-5 mb-1">Price:</p>
                      <span className="fw-semibold fs-5">€{price.toFixed(3)}</span>
                  </div>
                  <div className="align-items-center ms-5 ps-4">
                    <span className="text-secondary me-2">Quantity:</span>
                    <div className="d-flex align-items-center gap-1 bg-light rounded-pill px-2 py-0 border">
                        <button className="btn btn-light rounded-circle shadow-sm px-2 py-0" onClick={decreaseQuantity}>−</button>
                        <span className="fw-semibold text-dark small ms-2">{quantity}</span>
                        <button className="btn btn-light rounded-circle shadow-sm px-2 py-0 ms-2" onClick={increaseQuantity}>+</button>
                    </div>
                  </div>
              </div>

              <div className="d-flex gap-4 mt-3">
                  <p className="fw-medium text-primary cursor-pointer">DESCRIPTION</p>
                  <p className="fw-medium text-secondary cursor-pointer">DETAILS</p>
              </div>

              <p className="text-secondary mt-3 small">{description}</p>

              <div className="d-flex align-items-center mt-4">
                  <div>
                      <p className="fw-bold fs-5 mb-1">Total Price:</p>
                      <span className="fw-semibold fs-5">€{totalPrice.toFixed(3)}</span>
                  </div>
                  <button className="btn btn-primary px-4 py-2 ms-5 ps-4">
                      🛒 Add to Cart
                  </button>
              </div>
            </div>
        </div>

    {/* </div> */}

        </>
    );
}