// pages/index.tsx

import { useState } from "react";
import LoginForm from "../components/Auth/LoginForm"; // Importando o novo componente LoginForm
import { useRouter } from "next/router";

export const getServerSideProps = async () => {
  return { props: {} };
};

const LoginPage = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
