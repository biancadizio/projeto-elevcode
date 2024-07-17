import { useRouter } from "next/router";
import { useEffect } from "react";
import CepForm from "../components/Cep/CepForm";

export const getServerSideProps = async () => {
  return { props: {} };
};

const CepPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <CepForm />
    </div>
  );
};

export default CepPage;
