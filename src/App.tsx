import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import Form from "./components/Form";
import Home from "./components/Home";
import Skilss from "./components/Skilss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Download from "./components/Download";

function App() {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen  ">
      <Router>
        <Home />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/skills" element={<Skilss />} />
          <Route path="/education" element={<EducationForm />} />
          <Route path="/experience" element={<ExperienceForm />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
