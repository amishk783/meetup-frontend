import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../Hooks/useInput";
import { host } from "../../constants/constant";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [sendDetail, setSendDetail] = useState(null);
  const [successfull, setSuccessfull] = useState(false);
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

    if (enteredEmailIsValid) {
      setSendDetail(true);
    }
  };

  useEffect(() => {
    if (!sendDetail) {
      return;
    }

    const upload = async () => {
      const url = `${host}/users/password-reset`;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: enteredEmail }),
      });
      if (!response.ok) {
        console.log("error");
      }

      const data = await response.json();
      console.log(data);

      if (data.message) {
          console.log(data.message);
          setSuccessfull(true);
      } else {
      }
    };
    upload().catch((error) => {});
  }, [sendDetail, enteredEmail, navigate]);

  const emailInputClass = emailInputError
    ? "border-red-500 bg-red-100"
    : "border-slate-700 focus:scale-105 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200";

  return (
    <div className="flex m-auto p-20 w-full ">
      <section className="max-container w-full flex flex-grow justify-center pt-16 my-12 pb-40 xl:flex-row">
        <form
          onSubmit={formSubmitHandler}
          className="relative xl:3/5 flex bg-amber-100 rounded-lg flex-col justify-center items-center max-xl:padding-x max-container align-middle mt-12 p-12"
        >
          {!successfull && (
            <>
              <div className="flex flex-col justify-center pt-5">
                <label
                  htmlFor="name"
                  className="pb-5 items-start justify-start"
                >
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
                {emailInputError && (
                  <p className=" mt-2 text-center text-red-400 p-2">
                    Email can not be empty
                  </p>
                )}
              </div>
              <button
                className=" bg-[#dc143c] text-center text-slate-200 rounded-full font-palanquin font-medium text-lg px-12 py-4 mt-6 mx-10"
                type="submit"
              >
                Submit
              </button>
            </>
          )}
          {successfull && (
            <p className="text-green-500 text-xl p-10">
              Check your mail for password reset link
            </p>
          )}
        </form>
      </section>
    </div>
  );
};

export default ResetPassword;
