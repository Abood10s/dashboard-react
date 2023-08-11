import UploadForm from "./components/UploadForm";

function App() {
  console.log(process.env.REACT_APP_YOUR_API_KEY);
  return (
    <div className="App">
      <UploadForm />
    </div>
  );
}

export default App;
