import { Fragment } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Routes, Route,Navigate } from "react-router-dom";

import Home from "./pages/Home";
import MeetUp from "./pages/Meetup/Meetup";
import HomeLogin from "./pages/HomeLogin";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import UserEvent from "./pages/UserEvent";
import MeetupDetails from "./pages/Meetup/MeetupDetails";
import MeetupEdit from "./pages/Meetup/MeetupEdit";

function App() {
  const isLogin = useSelector((state) => state.login.isAuthenthicated);
  console.log(isLogin);

  const redirectNav = (to) => <Navigate to={to} replace/>
  return (
    <Fragment>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}

        <Route path="/" element={redirectNav("/home")} />
        <Route path="home/" >
          <Route index element={ isLogin?<HomeLogin/>:<Home />}/>
          <Route path="meetups/:id" element={<MeetupDetails />}></Route>
        </Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {isLogin && <Route path="/add-meetup" element={<MeetUp />}></Route>}
        {isLogin && (
          <Route path="/your-meetup/">
            <Route index element={<UserEvent />}></Route>
            <Route path=":id" element={<MeetupDetails />}></Route>
            <Route path="edit/:id" element={<MeetupEdit />} />
            <Route path="*" element={<ContactUs />}></Route>
          </Route>
        )}

        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
