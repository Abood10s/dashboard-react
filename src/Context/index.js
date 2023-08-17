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
    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
    const updatedProducts = existingProducts.filter((item) => item.id !== id);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };
  const deleteAllProducts = () => {
    localStorage.clear();
    setProducts([]);
  };
  const editProduct = ({ data }) => {
    const { id } = data;
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
        editProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsProvider;
