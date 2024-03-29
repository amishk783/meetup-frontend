import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useInput from "../../Hooks/useInput";
import { loginActions } from "../../Store/loginSlice";
import { useState } from "react";
import { userActions } from "../../Store/userSlice";
import { host } from "../../constants/constant";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userExistError, setuserExistError] = useState(false);
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    isTouchHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    isTouchHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputError,
    valueChangeHandler: passwordChangeHandler,
    isTouchHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim() !== "" && value.length > 6);

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (
      !(enteredEmailIsValid && enteredNameIsValid && enteredPasswordIsValid)
    ) {
      throw new Error("Invalid input");
    }

    const url = `${host}/users/add-user`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enteredEmail, enteredName, enteredPassword }),
    });
    const data = await response.json();

    const user = data.user;
    console.log(data);
    if (response.ok) {
      dispatch(loginActions.login(data.token)); //settoken
      dispatch(userActions.setUser(user)); //setuser
      navigate("/home");
    }
    if (response.status === 409) {
      setuserExistError(true);
    }

    resetName();
    resetEmail();
    resetPassword();
  };

  const nameInputClass = nameInputError
    ? "border-red-500 bg-red-100"
    : "border-slate-700 focus:scale-105 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200";
  const emailInputClass = emailInputError
    ? "border-red-500 bg-red-100"
    : "border-slate-700 focus:scale-105 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200";
  const passwordInputClass = passwordInputError
    ? "border-red-500 bg-red-100"
    : "border-slate-700 focus:scale-105 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200";

  return (
    <div className="flex m-auto p-20 w-full">
      <section className="w-full flex xl:flex-row flex-col justify-center gap-10 max-container pt-16 pb-20 bg-white">
        <form
          onSubmit={formSubmitHandler}
          className=" relative xl:3/5 flex flex-col bg-amber-100 rounded-lg justify-center items-center max-xl:padding-x max-container align-middle mt-12 p-12 "
        >
          {userExistError && (
            <div className="border-2 px-3 mx-8 mb-4 py-2 flex justify-center ring ring-red-200 border-red-300 bg-red-100 rounded-md">
              User already exits
            </div>
          )}
          <div className="flex flex-col justify-center pt-5 ">
            <label htmlFor="name" className="pb-5 items-start justify-start ">
              Enter your Name
            </label>
            <input
              className={`border-solid ${nameInputClass} border-2 rounded-md items-center  px-3 md:px-10 py-3 `}
              type="name"
              id="name"
              name="name"
              placeholder="John Smith"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
          </div>
          {nameInputError && (
            <p className=" mt-2 text-center text-red-400 pb-2">
              Name can not be empty
            </p>
          )}

          <div className="flex flex-col justify-center pt-5">
            <label htmlFor="email" className="pb-5 items-start justify-start">
              Enter your Email
            </label>
            <input
              className={`border-solid ${emailInputClass} border-2 rounded-md items-center  px-3 md:px-10 py-3`}
              type="email"
              id="email"
              name="email"
              placeholder="John@gmail.com"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailInputError && (
              <p className=" text-center text-red-400 pb-2 mt-2">
                Email can not be empty
              </p>
            )}
          </div>
          <div className="flex flex-col justify-center pt-5">
            <label
              htmlFor="password"
              className="pb-5 items-start justify-start"
            >
              Enter your Password
            </label>
            <input
              className={`border-solid ${passwordInputClass} border-2 rounded-md items-center px-3 md:px-10 py-3`}
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordInputError && (
              <p className=" text-center text-red-400 pb-2 mt-2">
                Password can not be empty
              </p>
            )}
          </div>

          <button
            className=" bg-[#dc143c] text-center text-slate-200 rounded-full font-palanquin font-medium text-lg px-6 py-4 mt-8"
            type="submit"
          >
            Sign up
          </button>
          <div className="flex pt-4 text-lg gap-2"><h1>Already have an account? </h1>
          <Link to="/login" className="text-blue-600">Login</Link></div>
        </form>
      </section>
    </div>
  );
};
export default Signup;
