import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import GradeTableContainer from "./components/GradeTable/GradeTableContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      <Navbar />
      <Banner />
      <GradeTableContainer />
      <Footer />
    </div>
  );
}

export default App;
