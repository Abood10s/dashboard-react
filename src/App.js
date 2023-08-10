function App() {
  console.log(process.env.REACT_APP_YOUR_API_KEY);
  return <div className="App">test :{process.env.REACT_APP_YOUR_API_KEY}</div>;
}

export default App;
