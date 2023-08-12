import ProductsProvider from "./Context";
import UploadForm from "./components/UploadForm";

function App() {
  console.log(process.env.REACT_APP_YOUR_API_KEY);
  return (
    <div className="App">
      <ProductsProvider>
        <UploadForm />
      </ProductsProvider>
    </div>
  );
}

export default App;
