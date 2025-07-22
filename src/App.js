import About from "./components/About/about";
import Certificates from "./components/Certificates/certificates";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar";
import Portfolio from "./components/Portfolio/portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
