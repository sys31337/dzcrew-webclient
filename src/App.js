import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Error from "./pages/error";
import Ticket from "./pages/ticket";
import ViewTicket from "./pages/viewticket";
import Dashboard from "./pages/dashboard";
import Rules from "./pages/rules";
import Guides from "./pages/guides";
import Form from "./pages/form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/form" element={<Form />} />
          <Route path="/viewticket/:id" element={<ViewTicket />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </header>
    </div>
  );
}
export default App;
