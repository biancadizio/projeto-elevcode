// pages/index.tsx

import { useState } from "react";
import LoginForm from "../components/Auth/LoginForm"; // Importando o novo componente LoginForm
import { useRouter } from "next/router";



const getServerSideProps = (async () => {

  return { props: {  } }
}) 


const LoginPage = () => {
  const router = useRouter();



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <LoginForm /> {/* Usando o novo componente LoginForm */}
      </div>
    </div>
  );
};



export default LoginPage;