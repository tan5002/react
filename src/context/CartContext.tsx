import React, { createContext, useReducer, useContext, ReactNode } from 'react';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
  };

type CartItem = Product & { quantity: number };

type State = {
  cart: CartItem[];
};

type Action =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'CLEAR_CART' }
  | { type: 'INCREASE_QUANTITY'; payload: number }
  | { type: 'DECREASE_QUANTITY'; payload: number };

const initialState: State = { cart: [] };

const CartContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.cart.find(item => item.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
      case 'INCREASE_QUANTITY':
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      case 'DECREASE_QUANTITY':
        return {
          ...state,
          cart: state.cart
            .map(item =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter(item => item.quantity > 0), // Xoá nếu về 0
        };
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
