import { Route, BrowserRouter, Routes } from "react-router-dom";
import { SignIn } from "./pages/Sigin";
import { SignUp } from "./pages/SiginUp";
import { DashBoard } from "./pages/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
