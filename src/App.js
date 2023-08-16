import ProductsProvider from "./Context";
import Layout from "./components/Layout";
import { useRoutes } from "react-router-dom";
import { router as routes } from "./routes/index";

function App() {
  const router = useRoutes(routes);
  console.log(process.env.REACT_APP_YOUR_API_KEY);
  return (
    <div className="App">
      <ProductsProvider>{router}</ProductsProvider>
    </div>
  );
}

export default App;
