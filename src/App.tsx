import { BrowserRouter, Route, Routes } from "react-router-dom";
import MaskLayout from "./layouts/MaskLayout";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import Archive from "./pages/Archive";
import SplashScreen from "./components/splash";

function App() {
  return (
    <>
      <SplashScreen />
      <BrowserRouter>
        <Routes>
          <Route element={<MaskLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
