import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt with", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-xl p-8 rounded-lg w-96">
        <h2 className="text-2xl font-semibold text-white text-center">Welcome Back</h2>
        <form onSubmit={handleLogin} className="mt-6">
          <div className="mb-4">
            <label className="block text-white mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="text-white text-sm text-center mt-4">
         <a href="#" className="underline">forgotpassword ?</a>
        </p>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition-all"
          >
            Login
          </button>
        </form>
        <p className="text-white text-sm text-center mt-4">
          Don't have an account? <a href="#" className="underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
