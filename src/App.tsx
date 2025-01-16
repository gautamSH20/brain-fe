import { Route, BrowserRouter, Routes } from "react-router-dom";
import { SignIn } from "./pages/Sigin";
import { SignUp } from "./pages/SiginUp";
import { DashBoard } from "./pages/DashBoard";
import { Share } from "./pages/Share";
import { Home } from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/:share" element={<Share />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
