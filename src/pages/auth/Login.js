import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginActions } from "../../Store/loginSlice";
import useInput from "../../Hooks/useInput";
import { userActions } from "../../Store/userSlice";
import { host } from "../../constants/constant";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [afterPasswordError, setafterPasswordError] = useState(false);

  const [sendDetail, setSendDetail] = useState(null);
  const {
    value: enteredPassword,
    hasError: passwordInputError,
    isValid: enteredPasswordIsValid,
    valueChangeHandler: passwordChangeHandler,
    isTouchHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim() !== "" && value.length > 5);
  const {
    value: enteredEmail,
    hasError: emailInputError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    isTouchHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setafterPasswordError(false);
    if (enteredEmailIsValid && enteredPasswordIsValid) {
      setSendDetail(true);
    }
  };

  useEffect(() => {
    if (!sendDetail) {
      return;
    }

    const upload = async () => {
      const url = `${host}/users/login`;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enteredEmail, enteredPassword }),
      });
      if (!response.ok) {
        setafterPasswordError(true);
      }

      const data = await response.json();
      console.log(data);
      const user = data.user;
      console.log(user);
      if (data.message === "successfull") {
        console.log(data.message);
        dispatch(loginActions.login(data.token));
        dispatch(userActions.setUser(user));
        navigate("/home");
        setafterPasswordError(true);
      } else {
        setafterPasswordError(true);
      }
    };
    upload().catch((error) => {});
  }, [
    sendDetail,
    enteredEmail,
    enteredPassword,
    setafterPasswordError,
    navigate,
    dispatch,
  ]);
  console.log(afterPasswordError);
  const emailInputClass = emailInputError
    ? "border-red-500 bg-red-100"
    : "border-slate-700 focus:scale-105 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200";
  const passwordInputClass = passwordInputError
    ? "border-red-500 bg-red-100"
    : "border-slate-700 focus:scale-105 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200";

  return (
    <section className="flex m-auto p-20 w-full ">
      <div className="max-container w-full flex flex-grow justify-center pt-16 my-12 pb-20 xl:flex-row ">
        <div className="pb-5">
          {afterPasswordError && (
            <div className="border-2 px-3 mx-8 mb-4 py-2 flex justify-center ring ring-red-200 border-red-300 bg-red-100 rounded-md">
              Wrong Password
            </div>
          )}
          <form
            onSubmit={formSubmitHandler}
            className="relative xl:3/5 flex flex-col bg-amber-100 rounded-lg justify-center items-center max-xl:padding-x max-container align-middle mt-12 p-12"
          >
            <div className="flex flex-col justify-center pt-5">
              <label htmlFor="name" className="pb-5 items-start justify-start">
                Enter your email
              </label>
              <input
                type="name"
                id="name"
                placeholder="john@gmail.com"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                className={`border-solid ${emailInputClass} border-2 rounded-md items-center px-3 md:px-10 py-3`}
              ></input>
            </div>
            {emailInputError && (
              <p className=" mt-2 text-center text-red-400 p-2">
                Name can not be empty
              </p>
            )}
            <div className="flex flex-col justify-center pt-5">
              <label htmlFor="name" className="pb-5 items-start justify-start">
                Enter your password
              </label>
              <input
                type="password"
                id="password"
                value={enteredPassword}
                placeholder="password123"
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                className={`border-solid border-2 ${passwordInputClass} rounded-md items-center px-3 md:px-10 py-3 `}
              ></input>
            </div>
            {passwordInputError && (
              <p className=" mt-2 text-center text-red-400 p-2">
                Password can not be empty
              </p>
            )}
            {afterPasswordError && <p className="">Password is Incorrect</p>}
            <button
              className=" bg-[#dc143c] text-center text-slate-200 rounded-full font-palanquin font-medium text-lg px-12 py-4 mt-6 mx-10"
              type="submit"
            >
              Log In
            </button>
            <div className="flex pt-8 gap-2 text-xl">
              <h1>Forgot your password?</h1>
              <Link className="text-blue-700" to="/forgotpassword">
                Click here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
