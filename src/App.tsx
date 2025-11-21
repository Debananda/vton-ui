import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

function App() {
  return (
    <div className="min-h-screen overflow-y-auto overflow-x-hidden bg-gray-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
