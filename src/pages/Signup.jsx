import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, username, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-600">

      <div className="bg-white w-[420px] p-8 rounded-2xl shadow-xl">

        <h2 className="text-2xl font-semibold text-center mb-2">
          Create an Account
        </h2>

        <p className="text-gray-500 text-sm text-center mb-6">
          Create a account to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

       
          <div>
            <label className="text-sm text-gray-600">Email address:</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full mt-1 p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          
          <div>
            <label className="text-sm text-gray-600">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full mt-1 p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>

          
          <div>
            <div className="flex justify-between text-sm text-gray-600">
              <label>Password</label>
              <span className="text-gray-400">Forget Password?</span>
            </div>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

        
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox"/>
            <span>I accept terms and conditions</span>
          </div>

         
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>

      </div>
    </div>
  );
}

export default Signup;