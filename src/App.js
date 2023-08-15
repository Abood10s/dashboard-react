import ProductsProvider from "./Context";
import Layout from "./components/Layout";
import UploadForm from "./components/UploadForm";

function App() {
  console.log(process.env.REACT_APP_YOUR_API_KEY);
  return (
    <div className="App">
      <ProductsProvider>
        <Layout>
          <UploadForm />
          <UploadForm />
          <UploadForm />
          <UploadForm />
        </Layout>
      </ProductsProvider>
    </div>
  );
}

export default App;
