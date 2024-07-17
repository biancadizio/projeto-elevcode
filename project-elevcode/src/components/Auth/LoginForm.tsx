import { useState } from "react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("john@mail.com");
  const [password, setPassword] = useState<string>("changeme");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data) {
        localStorage.setItem("token", data);
        return router.push("/cep");
      }

      throw new Error("Authentication failed. Please check your credentials.");
    } catch (error) {
      setError("Authentication failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-center text-blue-950">
          Login
        </h2>

        {error && <p className="mb-4 text-red-500 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-lg font-semibold text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Insira o email cadastrado"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-lg font-semibold text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-900"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-800 rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
