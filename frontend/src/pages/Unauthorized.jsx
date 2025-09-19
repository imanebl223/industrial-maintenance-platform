import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">🚫 Accès refusé</h1>
        <p className="text-gray-600 mb-6">
          Vous n’avez pas les droits nécessaires pour accéder à cette page.
        </p>
        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Retour à la connexion
        </Link>
      </div>
    </div>
  );
}

export default Unauthorized;
