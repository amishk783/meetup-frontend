
import { FormLabel,TextField } from "@mui/material";

import { useState, useMemo, useEffect } from "react";
import useInput from "../../Hooks/useInput";
import moment from "moment";

import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";

import FeedBackToast from "../common/Functionality/FeedBackToast";

const MeetUpForm = ({ url, isEdit = false, meetup, handleLoadingChange }) => {
  const [currentMeetup, setCurrentMeetup] = useState(meetup);

  const [formError, setFormError] = useState(true);
  const [eventImage, setEventImage] = useState(null);
  const token = localStorage.getItem("token");
  const [shouldUpload, setShouldUpload] = useState(null); // to decide if upload should be done or not
  const [date, setDate] = useState(null);
  const navigate = useNavigate();
  const [meetupError, setMeetupError] = useState(true);
  const [createdSuccessfully, setCreatedSuccessfully] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    isTouchHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(
    (value) => value.trim() !== "",
    isEdit ? currentMeetup.name : " "
  );
  const {
    value: enteredAddress,
    isValid: enteredAddressIsValid,
    hasError: addressInputError,
    valueChangeHandler: addressChangeHandler,
    isTouchHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput(
    (value) => value.trim() !== "",
    isEdit ? currentMeetup.address : " "
  );

  const {
    value: enteredDescription,
    isValid: enteredDescriptionIsValid,
    hasError: discriptionInputError,
    valueChangeHandler: descriptionChangeHandler,
    isTouchHandler: descriptionBlurHandler,
    reset: resetDescription,
  } = useInput(
    (value) => value.trim() !== "",
    isEdit ? currentMeetup.description : " "
  );

  useEffect(() => {
    setCurrentMeetup(meetup);
  }, [meetup]);

  const sumbitHandler = (event) => {
    event.preventDefault();

    if (
      enteredDescriptionIsValid &&
      enteredAddressIsValid &&
      enteredNameIsValid
    ) {
      setShouldUpload(true);
    }
  };

  const formattedDate = moment(date).format("DD-MM-YYYY");

  console.log(formattedDate)
  const formData = useMemo(() => {
    const data = new FormData();
    data.append("enteredAddress", enteredAddress);
    data.append("enteredName", enteredName);
    data.append("enteredDescription", enteredDescription);
    data.append("image", eventImage);
    data.append("date", formattedDate);
    return data;
  }, [
    enteredAddress,
    enteredName,
    enteredDescription,
    eventImage,
    formattedDate,
  ]);
  useEffect(() => {
    if (!shouldUpload) return;

    const uploadData = async () => {
      try {
        setIsLoading(true);
        handleLoadingChange(true);

        const method = isEdit ? "PUT" : "POST";
        const response = await fetch(isEdit ? `${url}/${meetup.id}` : url, {
          method,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        if (!response.ok) {
          console.log("Error:", response.status);
          setFormError(true);
        }

        const data = await response.json();
        console.log(data.message);
        if (data.message === "Meetup created successfully") {
          setCreatedSuccessfully(true);

          const timeoutId = setTimeout(() => {
            setCreatedSuccessfully(false);
            navigate("/home");
          }, 3000);
          navigate("/home");
          return () => {
            handleLoadingChange(false);
            setIsLoading(false);

            clearTimeout(timeoutId);
          };
        }
      } catch (error) {
        console.log("Error file loading", error);
        setMeetupError(true);
      } finally {
      }
    };
    uploadData();
    setShouldUpload(false);
  }, [
    shouldUpload,
    formData,
    token,
    navigate,
    url,
    isEdit,
    meetup,
    handleLoadingChange,
    setIsLoading,
    isLoading,
  ]);

  return (
    <div className="relative xl:3/5 flex flex-col justify-center max-xl:padding-x align-middle gap-5 max-container border-2 rounded-lg px-20 py-10 border-green-300 drop-shadow-xl shadow-xl">
      {!(meetupError || formError) && (
        <div className="border bg-red rounded-full">
          <FeedBackToast
            message={"Form Subimission Failed"}
            isOpen={true}
            code={"failure"}
          />
        </div>
      )}
      {createdSuccessfully && (
        <div className="border bg-green rounded-full">
          <FeedBackToast
            message={"Meetup created successfully"}
            isOpen={true}
            code={"success"}
          />
        </div>
      )}

      <form
        onSubmit={sumbitHandler}
        className="relative xl:3/5 flex flex-col justify-center max-xl:padding-x align-middle gap-5 max-container"
      >
        <FormLabel className="items-start justify-start text-start font-palanquin pb-2">
          Your Name
        </FormLabel>
        <TextField
          type="text"
          fullWidth
          id="fullWidth"
          value={enteredName}
          color={nameInputError ? "primary" : "secondary"}
          variant="outlined"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        ></TextField>

        <FormLabel>Event Address</FormLabel>
        <TextField
          type="text"
          value={enteredAddress}
          color={enteredAddressIsValid ? "primary" : "secondary"}
          variant="outlined"
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
        ></TextField>

        <FormLabel>Event's Poster</FormLabel>
        <div className="border-2 border-slate-700 rounded-md py-3 px-6 flex">
          <input
            className="opacity-0 w-full z-5 mb-[-10px] flex-1"
            type="file"
            name="image"
            id="image"
            accept="/image*"
            onChange={(e) => {
              setEventImage(e.target.files[0]);
            }}
            alt="event poster image"
          ></input>
          <Camera />
        </div>
        <FormLabel>Event's Date</FormLabel>

        <TextField
          type="date"
          onChange={(e) => {
            setDate(e.target.valueAsDate);
          }}
          variant="outlined"
        ></TextField>
        <FormLabel>Enter Event's Description</FormLabel>
        <textarea
          className="my-3 pb-40 pt-2 px-3 border-2 border-slate-700 rounded-md focus:ring focus:ring-blue-200"
          type="text"
          value={enteredDescription}
          color={enteredDescriptionIsValid ? "primary" : "secondary"}
          onChange={descriptionChangeHandler}
          onBlur={descriptionBlurHandler}
          row={4}
          cols={1}
        ></textarea>

        <button
          disabled={isLoading}
          type="submit"
          className=" bg-[#dc143c] text-center text-slate-200 rounded-full font-palanquin font-medium text-lg px-3 py-4 mx-8 "
        >
          {isLoading ? "Submitting..." : "Add Event"}
        </button>
      </form>
    </div>
  );
};

export default MeetUpForm;
