import LoginForm from "../components/Auth/LoginForm";

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
