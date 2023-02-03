import "./App.css";
// Components
import Header from "./components/Header/Header";
import CardListComponent from "./components/CardListComponent/CardListComponent";

// Map
// useState, useEffect
// Promises (fetch)
// JSX
// Props

const App = () => {
  return (
    <div className="App">
      <Header title="Github App" />
      <CardListComponent />
    </div>
  );
};

export default App;
