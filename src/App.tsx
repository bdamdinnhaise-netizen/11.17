import { Routes, Route } from "react-router";
import Dashboard from "./pages/dashboard";
import Layout from "./components/Layout";
import User from "./pages/User";
import Task from "./pages/Task";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<User />} />
        <Route path="/login" element={<Task />} />
      </Route>
    </Routes>
  );
}
