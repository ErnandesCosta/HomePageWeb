import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-[#151515] text-white flex items-start">
      <div className="w-full flex flex-col items-center">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
