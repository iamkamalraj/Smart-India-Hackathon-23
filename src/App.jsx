import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  NoPage,
  Info
} from "./components";

const Home = () =>{
  return (<div className="relative z-0 bg-primary">
  <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
    <Navbar />
    <Hero />
  </div>
  <About />
  <Experience />
  {/* <Tech /> */}
  <Works />
  <Feedbacks />
  {/* <StarsCanvas /> */}
  {/* <div className="relative z-0">
    <Contact />
  </div> */}
</div>)
}

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
