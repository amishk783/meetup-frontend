import { Fragment } from "react";

import LoginForm from "../../components/common/forms/LoginForm";
import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";

const Login = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <LoginForm />
      <Footer/>
    </div>
  );
};

export default Login;
