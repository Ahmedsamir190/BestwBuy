const { createSlice } = require("@reduxjs/toolkit");

// const initialState = {
//     :localStorage.getItem("cartSlice")
//     ? JSON.parse(localStorage.getItem("cartSlice"))
//     : [],
//   cartTotalAmount: 0,
//   cartTotalQuantity: 0,
// };

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addtocart: (state, action) => {
      const productscart = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productscart >= 0) {
        state[productscart].quantity += 1;
      } else {
        const clone = { ...action.payload, quantity: 1 };
        state.push(clone);
      }
    },

    Deleted: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    Clear: (state, action) => {
      state = [];
    },
    Increment: (state, action) => {
      const itemincrement = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (itemincrement >= 0) {
        state[itemincrement].quantity += 1;
      }
    },
    Decrement: (state, action) => {
      const itemdecrement = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state[itemdecrement].quantity > 1) {
        state[itemdecrement].quantity -= 1;
      }
    },

    // GetTotalPrice: (state, action) => {
    //   state.reduce((acc, product) => {
    //     acc += product.price * product.quantity;
    //     return acc;
    //   }, 0);
    // },

    // GetTotalQuantity: (state, action) => {
    //   const totalquantity = state.reduce((cartquantity, cartitem) => {
    //     return cartquantity + cartitem.quantity;
    //   }, 0);
    //   state.cartTotalQuantity = totalquantity;
    // },
  },
});

export const {
  addtocart,
  Deleted,
  Clear,
  Increment,
  Decrement,
  // GetTotalPrice,
  // GetTotalQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
