import Dashboard from "../pages/Dashboard";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    );
  };
  
  export default Router;
  