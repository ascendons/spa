import "./App.css";
import ascendons from "./ascendons.jpeg";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={ascendons} className="logo" alt="Vite logo" />
        </a>
      </div>
      <Footer />
    </>
  );
}

export default App;
