import { Routes, Route } from "react-router-dom";
import { DesignersPage } from "./pages/DesignersPage/DesignersPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { PiarPage } from "./pages/PiarPage/PiarPage";
import { ProgrammersPage } from "./pages/ProgrammersPage/ProgrammersPage";
import { ThreeDDesignersPage } from "./pages/ThreeDDesignersPage/ThreeDDesignersPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/programmers" element={<ProgrammersPage />} />
      <Route path="/designers" element={<DesignersPage />} />
      <Route path="/3ddesigners" element={<ThreeDDesignersPage />} />
      <Route path="/piar" element={<PiarPage />} />
    </Routes>
  );
}

export default App;
