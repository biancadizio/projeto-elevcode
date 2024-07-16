import { useState } from "react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("platzi@example.com");
  const [password, setPassword] = useState<string>("platzi123");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://fakeapi.platzi.com/en/gql/auth-jwt/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation {
              login(email: "${email}", password: "${password}") {
                access_token
                refresh_token
              }
            }
          `
        }),
      });

      const data = await response.json();

      if (data.errors) {
        setError('Erro ao fazer login. Verifique suas credenciais.');
      } else {
        const accessToken = data.data.login.access_token;
        const refreshToken = data.data.login.refresh_token;

        // Armazena os tokens em localStorage
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        setError(''); // Limpa qualquer erro anterior
        router.push("/cep"); // Redireciona para a página de CEP após o login
      }

    } catch (error) {
      console.error('Erro:', error);
      setError('Erro ao fazer login. Por favor, tente novamente.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>

        {error && <p className="mb-4 text-red-500">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;















