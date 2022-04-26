import logo from "./logo.svg";
import "./App.scss";
import Menu from "./components/menu/Menu";
import Container from "components/container/Container";

function App() {
  return (
    <div className="App">
      <Menu />
      <Container />
    </div>
  );
}

export default App;
