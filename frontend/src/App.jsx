// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import ProtectedRoute from "./components/ProtectedRoute";

// Admin pages
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminMachines from "./pages/AdminMachines";
import AdminInterventions from "./pages/AdminInterventions";

// Technicien pages
import TechnicienDashboard from "./pages/TechnicienDashboard";
import TechnicienIntervention from "./pages/TechnicienIntervention";
import TechnicienPrediction from "./pages/TechnicienPrediction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Admin */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute role="admin">
              <AdminUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/machines"
          element={
            <ProtectedRoute role="admin">
              <AdminMachines />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/interventions"
          element={
            <ProtectedRoute role="admin">
              <AdminInterventions />
            </ProtectedRoute>
          }
        />

        {/* Technicien */}
        <Route
          path="/technicien/dashboard"
          element={
            <ProtectedRoute role="technicien">
              <TechnicienDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/technicien/interventions"
          element={
            <ProtectedRoute role="technicien">
              <TechnicienIntervention />
            </ProtectedRoute>
          }
        />
        <Route
          path="/technicien/prediction"
          element={
            <ProtectedRoute role="technicien">
              <TechnicienPrediction />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
