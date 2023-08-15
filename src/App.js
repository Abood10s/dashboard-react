import ProductsProvider from "./Context";
import Layout from "./components/Layout";
import UploadForm from "./components/UploadForm";
import { DollarSvg } from "./assets/dollar";
import { PeopleSvg } from "./assets/people";
import ProgressSvg from "./assets/progress";
function App() {
  console.log(process.env.REACT_APP_YOUR_API_KEY);
  return (
    <div className="App">
      <ProductsProvider>
        <Layout>
          <DollarSvg />

          <DollarSvg color="rgb(99, 102, 241)" />

          <PeopleSvg />
          <ProgressSvg />
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
