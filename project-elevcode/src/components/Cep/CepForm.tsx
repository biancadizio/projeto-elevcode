// components/Cep/CepForm.tsx

import { useState } from "react";
import { fetchCepInfo } from "../../api/cep";

interface Address {
  // Defina a estrutura de dados esperada para o endereço
  // Exemplo: rua, bairro, cidade, estado, etc.
}

const CepForm = () => {
  const [cep, setCep] = useState<string>(""); // Tipagem explícita
  const [address, setAddress] = useState<Address | null>(null); // Tipagem explícita para 'address'
  const [error, setError] = useState<string>(""); // Tipagem explícita

  const handleSearch = async () => {
    try {
      const data = await fetchCepInfo(cep);
      setAddress(data);
      setError("");
    } catch (error: any) {
      setError(error.message || "Failed to fetch CEP information."); // Tratamento condicional para definir o erro
      setAddress(null);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Formulário de busca de CEP aqui */}
    </div>
  );
};

export default CepForm;
