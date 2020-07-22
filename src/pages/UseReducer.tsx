import React from 'react';
import useCart, { Product } from '../hooks/useCartReducer';

const PRODUCTS: Product[] = [
  { id: 1, name: 'Osmond Armchair', cost: 350 },
  { id: 2, name: 'Emile Sidetable', cost: 150 },
  { id: 3, name: 'Montesque Barstool', cost: 125 },
];

const Shopping = () => {
  // useReducer is in the implementation of this hook!
  const { productsInCart, addProductToCart, clearCart } = useCart();

  const handleClickAddtoCart = (product: Product) => {
    addProductToCart(product);
  };

  return (
    <>
      <h1>Shopping (useReducer)</h1>
      <main>
        <div>
          {PRODUCTS.map((product) => (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
              }}
              key={product.id}
            >
              {product.name}
              <div>
                <button
                  aria-label={`Add ${product.name} to Cart`}
                  onClick={() => handleClickAddtoCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <footer>
          <ul>
            {productsInCart.map((product) => (
              <li key={product.id}>
                {product.name} {product.quantity}
              </li>
            ))}
          </ul>
          {!!productsInCart.length && (
            <button onClick={() => clearCart()}>Clear cart</button>
          )}
        </footer>
      </main>
    </>
  );
};

export default Shopping;
