import { useState } from "react";
import { Address } from "./types/address";

const CepForm = () => {
  const [cep, setCep] = useState<string>("");
  const [address, setAddress] = useState<Address | null>(null);
  const [error, setError] = useState<string>("");

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/cep", {
        method: "POST",
        body: JSON.stringify({ cep }),
      });

      const data = await response.json();

      if (response.ok) {
        setAddress(data);
        setError("");
      } else {
        throw new Error(data.message || "Failed to fetch CEP information.");
      }
    } catch (error: any) {
      setError(error.message || "Failed to fetch CEP information.");
      setAddress(null);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Buscar CEP</h2>

        {error && <p className="mb-4 text-red-500">{error}</p>}

        <form onSubmit={handleSearch}>
          <div className="mb-4">
            <input
              id="cep"
              required
              type="text"
              value={cep}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Digite o CEP"
              onChange={(e) => {
                setCep(e.target.value);
                if (error) setError("");
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Buscar
          </button>
        </form>

        {address && (
          <div className="mt-6">
            <p>
              <strong>CEP:</strong> {address.cep}
            </p>
            <div>
              <h3 className="font-bold">Endereço: </h3>
              <p>{address.street}</p>
              <p><strong>Bairro: </strong>{address.neighborhood}</p>
              <p><strong>Cidade: </strong>{address.city} / {address.state}</p>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CepForm;
