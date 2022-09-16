import "./App.css";
import Articles from "./components/Blog/Articles";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
