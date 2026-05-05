import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password
      });

      // 🔐 save token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      alert("Login successful");

      navigate("/dashboard");

    } catch (err) {
      alert(err.response?.data?.msg || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-600">
      <div className="bg-white w-[420px] p-8 rounded-2xl shadow-xl">

        <h2 className="text-2xl font-semibold text-center mb-2">
          Login to Account
        </h2>

        <p className="text-gray-500 text-sm text-center mb-6">
          Enter your credentials
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="text-sm text-gray-600">Email address:</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full mt-1 p-3 border rounded-lg bg-gray-100"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 p-3 border rounded-lg bg-gray-100"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;