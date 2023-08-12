import { useEffect } from "react";
import { createContext, useState } from "react";

export const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const addProduct = (data) => {
    const updatedProducts = [...products, data];
    setProducts(updatedProducts);

    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };
  const addComment = (data) => {
    const { id, comment, commentTime } = data;
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, theComment: comment, commentTime: commentTime };
      }
      return product;
    });

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };
  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };
  const deleteAllProducts = () => {
    localStorage.clear();
    setProducts([]);
  };
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        setProducts,
        deleteAllProducts,
        addComment,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsProvider;
