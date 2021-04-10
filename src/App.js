import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Hello name="Robert" address="Budapest"/>
      <Hello name="Csaba" address="Debrecen"/>
      <Hello name="Tamás" address="Pécs"/>
    </div>
  );
}

export default App;
