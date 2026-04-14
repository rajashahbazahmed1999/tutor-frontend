import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "12345") {
      localStorage.setItem("token", "adminToken");
      localStorage.setItem("role", "admin");

      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-600">
      <div className="bg-white w-[420px] p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Login to Account
        </h2>

        <p className="text-gray-500 text-sm text-center mb-6">
          Please enter your email and password to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Email address:</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full mt-1 p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <div className="flex justify-between text-sm text-gray-600">
              <label>Password</label>
              <span className="text-gray-500 cursor-pointer hover:text-blue-500">
                Forget Password?
              </span>
            </div>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" />
            <span>Remember Password</span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
