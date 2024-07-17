// pages/cep.tsx

import { useState, useEffect } from "react";
import CepForm from "../components/Cep/CepForm"; // Importando o novo componente CepForm
import { useRouter } from "next/router";

export const getServerSideProps = (async () => {

  return { props: {  } }
}) 

const CepPage = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<any>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Buscar CEP</h2>
        <CepForm /> {/* Usando o novo componente CepForm */}
      </div>
    </div>
  );
};

export default CepPage;
