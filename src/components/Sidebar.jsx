import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="w-64 min-h-screen bg-white shadow p-5">

      <h2 className="text-2xl font-bold mb-8 text-blue-600">
        TutorHub
      </h2>

    
      <ul className="space-y-4 text-gray-700">

        <li>
          <Link to="/" className="hover:text-blue-500">🏠 Home</Link>
        </li>

        <li>
          <Link to="/dashboard" className="hover:text-blue-500">📊 Dashboard</Link>
        </li>

        <li>
          <Link to="/tutors" className="hover:text-blue-500">👨‍🏫 Tutors</Link>
        </li>

        <li>
          <Link to="/my-sessions" className="hover:text-blue-500">📅 My Sessions</Link>
        </li>

        <li>
          <Link to="/verify" className="hover:text-blue-500">✔️ Verify</Link>
        </li>

        <li>
          <Link to="/blog" className="hover:text-blue-500">📝 Blog</Link>
        </li>

        <li>
          <Link to="/contact" className="hover:text-blue-500">📞 Contact</Link>
        </li>

        <li>
          <Link to="/my-profile" className="hover:text-blue-500">👤 My Profile</Link>
        </li>

      </ul>

      
      <button
        onClick={handleLogout}
        className="mt-10 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>

    </div>
  );
}

export default Sidebar;