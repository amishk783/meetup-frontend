import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../Hooks/useInput";
import { host } from "../../constants/constant";

const Password = () => {
  const { userId, token } = useParams();
  const navigate = useNavigate();
  const [sendDetail, setSendDetail] = useState(null);
  const [error, setError] = useState(false);
  const [successfull, setSuccessfull] = useState(false);
  const {
    value: enteredPassword,
    hasError: passwordInputError,
    isValid: enteredPasswordIsValid,
    valueChangeHandler: passwordChangeHandler,
    isTouchHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim() !== "" && value.length > 5);

  console.log(enteredPassword);
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredPasswordIsValid) {
      setSendDetail(true);
    }
  };

  useEffect(() => {
    if (!sendDetail) {
      return;
    }
    try {
      console.log(enteredPassword);
      const upload = async () => {
        const url = `${host}/users/password-reset/${userId}/${token}`;

        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: enteredPassword }),
        });
        if (!response.ok) {
          console.log("error");
          setError(true);
        }

        const data = await response.json();
        console.log(data);

        if (response.status === 200) {
          setSuccessfull(true);
        }
      };
      setSendDetail(false);
      upload().catch((error) => {});
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }, [sendDetail, enteredPassword, navigate, userId, token]);

  const passwordInputClass = passwordInputError
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
                  Enter your Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  value={enteredPassword}
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                  className={`border-solid ${passwordInputClass} border-2 rounded-md items-center px-3 md:px-10 py-3`}
                ></input>
                {passwordInputError && (
                  <p className=" mt-2 text-center text-red-400 p-2">
                    Email can not be empty
                  </p>
                )}
              </div>
              <button
                disabled={sendDetail}
                className=" bg-[#dc143c] text-center text-slate-200 rounded-full font-palanquin font-medium text-lg px-12 py-4 mt-6 mx-10"
                type="submit"
              >
                Submit
              </button>
            </>
          )}

          {error && <p className="text-red-500">Something went wrong</p>}
          {successfull && (
            <p className="text-green-500 text-xl p-10">
              Password has been reset successfully
            </p>
          )}
        </form>
      </section>
    </div>
  );
};

export default Password;
