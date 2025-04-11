import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { state, dispatch } = useCart();
  const total = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Button mở modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#cartModal"
      >
        🛒 Xem giỏ hàng ({state.cart.length})
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="cartModal"
        tabIndex={-1}
        aria-labelledby="cartModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="cartModalLabel">
                🛒 Giỏ hàng của bạn
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Đóng"
              ></button>
            </div>
            <div className="modal-body">
              {state.cart.length === 0 ? (
                <p>Giỏ hàng trống</p>
              ) : (
                <ul className="list-group">
                  {state.cart.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div className="flex-grow-1">
                        <img src={item.image} alt="" className="image-cart" />
                        <strong>{item.name}</strong> <br />
                        <small>Giá:$ {item.price.toLocaleString()}</small>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() =>
                            dispatch({
                              type: "DECREASE_QUANTITY",
                              payload: item.id,
                            })
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() =>
                            dispatch({
                              type: "INCREASE_QUANTITY",
                              payload: item.id,
                            })
                          }
                        >
                          +
                        </button>
                      </div>
                      <div>
                        $ {(item.price * item.quantity).toLocaleString()}
                        <button
                          className="btn btn-sm btn-danger ms-3"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: item.id,
                            })
                          }
                        >
                          X
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {state.cart.length > 0 && (
                <div className="mt-3">
                  <p>
                    Tổng cộng: $<strong>{total.toLocaleString()}</strong>
                  </p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-warning"
                onClick={() => dispatch({ type: "CLEAR_CART" })}
              >
                Xoá tất cả
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
