const ACTIONS = {
  ADD_NEW_CART_ITEM: "add-new-cart-item",
  BUY_NOW_HANDLER: "buy-now-handler",
  UPDATE_WISHLIST: "update-wishlist",
  INCREMENT_CART_COUNT: "increment-cart-count",
  DECREMENT_CART_COUNT: "decrement-cart-count",
  REMOVE_FROM_CART: "remove-from-cart",
  REMOVE_FROM_WISHLIST: "remove-from-wishlist",
  SORT: "Sort",
  FILTER: "filter"
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_NEW_CART_ITEM: {
      let flag = false;
      const newCartList = state.cartList.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          flag = true;
          return {
            ...cartItem,
            quantity: cartItem.quantity + action.payload.quantity
          };
        } else {
          return cartItem;
        }
      });

      if (flag) {
        return { ...state, cartList: newCartList };
      } else {
        return {
          ...state,
          cartList: [
            ...state.cartList,
            { ...action.payload.item, quantity: action.payload.quantity }
          ]
        };
      }
    }

    case ACTIONS.BUY_NOW_HANDLER: {
      const findItem = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        return state;
      } else {
        return {
          ...state,
          cartList: [
            ...state.cartList,
            { ...action.payload.item, quantity: action.payload.quantity }
          ]
        };
      }
    }
    case ACTIONS.UPDATE_WISHLIST: {
      let flag = false;
      state.wishList.map((item) => {
        if (item.id === action.payload.id) flag = true;
      });
      if (flag) return state;
      else
        return {
          ...state,
          wishList: [...state.wishList, { ...action.payload.item, quantity: 1 }]
        };
    }
    case ACTIONS.INCREMENT_CART_COUNT: {
      const newCartList = state.cartList.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });
      return { ...state, cartList: newCartList };
    }
    case ACTIONS.DECREMENT_CART_COUNT: {
      const newCartList = state.cartList.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (cartItem.quantity === 0) return cartItem;
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          return cartItem;
        }
      });
      return { ...state, cartList: newCartList };
    }
    case ACTIONS.REMOVE_FROM_CART: {
      const newCartList = state.cartList.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return { ...cartItem, quantity: 0 };
        } else {
          return cartItem;
        }
      });
      return { ...state, cartList: newCartList };
    }
    case ACTIONS.REMOVE_FROM_WISHLIST: {
      const newWishList = state.wishList.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, wishList: newWishList };
    }

    case ACTIONS.SORT: {
      return { ...state, sortBy: action.payload };
    }
    case ACTIONS.FILTER: {
      return {
        ...state,
        filterBy: {
          ...state.filterBy,
          filterNewProducts: !state.filterBy.filterNewProducts
        }
      };
    }
    default: {
      return state;
    }
  }
};
