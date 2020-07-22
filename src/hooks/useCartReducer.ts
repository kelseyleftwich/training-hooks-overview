import { useReducer } from "react";

export type Product = {
  id: number;
  name: string;
  cost: number;
};

type InvoiceLineItem = Product & { quantity: number };

type State = { lineItems: InvoiceLineItem[] };

type Action =
  | {
      type: "add";
      product: Product;
    }
  | { type: "clear" };

const initialState: State = {
  lineItems: []
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":
      if (!action.product) {
        throw new Error("Product required");
      }

      // find existing item's index (if it exists)
      const existingLineItemIndex = state.lineItems.findIndex(
        lineItem => lineItem.id === action.product.id
      );

      if (existingLineItemIndex > -1) {
        // get the item
        const existingItem = state.lineItems[existingLineItemIndex];

        // increment quantity
        const updatedItem: InvoiceLineItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1
        };

        // clone
        const updatedLineItems = Object.assign([], state.lineItems);

        // replace item "in place" using splice
        updatedLineItems.splice(existingLineItemIndex, 1, updatedItem);

        // return updated state
        return { lineItems: updatedLineItems };
      }

      // create a line item because this product isn't already in state
      const newLineItem: InvoiceLineItem = {
        ...action.product,
        quantity: 1
      };

      // return updated state
      return { lineItems: [...state.lineItems, newLineItem] };
    case "clear":
      return { lineItems: [] };
    default:
      throw new Error();
  }
}

const useCartReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addProductToCart = (product: Product) => {
    dispatch({ type: "add", product });
  };

  const clearCart = () => dispatch({ type: "clear" });

  return { productsInCart: state.lineItems, addProductToCart, clearCart };
};

export default useCartReducer;
