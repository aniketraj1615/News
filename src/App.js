import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";

function App() {
  return (
    <>
      <NavBar />
      <News pageSize={6} country="in" category="sports" />
    </>
  );
}

export default App;
