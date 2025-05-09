import { BrowserRouter, Route, Routes } from "react-router-dom";
import Community from "./components/sections/Community";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Community />}>
          {/* User Layout */}
        </Route>
        <Route>{/* Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
