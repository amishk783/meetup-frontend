import { useState, useEffect } from "react";
import { Snackbar, SnackbarContent, IconButton } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { Close } from "@mui/icons-material";
const FeedBackToast = ({ message, isOpen, code }) => {
  const [open, setOpen] = useState(true);
  const [transition, setTransition] = useState(undefined);


  useEffect(() => {
    setTransition(() => Transition);
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
  };
  const Transition = (props) => {
    return <Slide {...props} direction="left" />;
  };

  return (
    <div>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <SnackbarContent
          style={{
            // Add your custom styles here
            backgroundColor: code==="failure"?"red":"green", // Example background color
            color: "#ffffff", // Example text color
            borderRadius: "8px", // Example border radius
          }}
          message={
            <div style={{ display: "flex", alignItems: "center" }}>
              <span>{message}</span>
              <AlertComponent />
            </div>
          }
          action={[
            <IconButton
              key="close"
              style={{ color: "black" }}
              onClick={handleClose}
            >
              <Close />
            </IconButton>,
          ]}
        />
      </Snackbar>
    </div>
  );
};
const AlertComponent = () => {
  // Your alert component logic goes here
  return (
    <div style={{ marginLeft: "auto", paddingLeft: "10px" }}>
      <strong>ALERT!</strong>
    </div>
  );
};
export default FeedBackToast;
