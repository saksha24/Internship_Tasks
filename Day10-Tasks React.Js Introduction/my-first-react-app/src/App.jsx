
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const websiteTitle = "ReactSpace";

  return (
    <div className="app">
      <Header
        title={websiteTitle}
        subtitle="Learn. Build. Create."
      />

      <Home
        name="ReactSpace"
        course="React with Vite"
        description="Discover how reusable components make building modern websites easier."
      />

      <Footer
        year={new Date().getFullYear()}
        message="Made with React and curiosity."
      />
    </div>
  );
}

export default App;
