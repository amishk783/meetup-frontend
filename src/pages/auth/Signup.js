import { Fragment } from "react";
import Header from "../../components/common/Header/Header"
import Footer from "../../components/common/Footer/Footer";
import SignUpForm from "../../components/common/forms/SignUpForm"

const Signup = () => {
  return (
    <Fragment>
      <Header />
      <SignUpForm />
      <Footer/>
    </Fragment>
  );
};
export default Signup;
