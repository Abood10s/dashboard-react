import ProductsProvider from "./Context";
import { useRoutes } from "react-router-dom";
import { router as routes } from "./routes/index";
import { Suspense } from "react";
import Spinner from "./components/Spinner";

function App() {
  const router = useRoutes(routes);
  console.log(process.env.REACT_APP_YOUR_API_KEY);
  return (
    <div className="App">
      <ProductsProvider>
        <Suspense fallback={<Spinner />}> {router}</Suspense>
      </ProductsProvider>
    </div>
  );
}

export default App;
