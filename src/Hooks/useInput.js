import { useReducer,useEffect } from "react";

const useInput = (validateValue, initalValue = "") => {
  const inputStateReducer = (state, action) => {
    if (action.type === "INPUT") {
      return {...state, value: action.value };
    }
    if (action.type === "BLUR") {
      return { ...state, isTouched: true };
    }
    if (action.type === "RESET") {
      return { isTouched: false, value: initalValue };
    }
    return state;
  };
  const [{value,isTouched}, disptach] = useReducer(inputStateReducer, {
    value: initalValue,
    isTouched: false,
  });
  

  const valueIsValid = validateValue(value);
  const hasError = !valueIsValid && isTouched;
  const valueChangeHandler = (event) => {
    disptach({ type: "INPUT", value: event.target.value });
  };
  const isTouchHandler = (event) => {
    disptach({ type: "BLUR" });
  };
  const reset = () => {
    disptach({ type: "RESET" });
  };
  useEffect(() => {
    reset();
  }, [initalValue]);

  return {
    value: value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    isTouchHandler,
    reset,
  };
};
export default useInput;
