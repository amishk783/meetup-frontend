import { Link, useNavigate } from "react-router-dom";

import { loginActions } from "../../../Store/loginSlice";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Hamburger from "hamburger-react";

const Header = () => {
  const isLogin = useSelector((state) => state.login.isAuthenthicated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(null);

  const handleLogout = () => {
    dispatch(loginActions.logout());
    navigate("/home");
  };
  return (
    <header className=" py-3 bg-[#f5deb3] lg:hover:bg-transparent absolute z-50 w-full text-white shadow-md">
      <nav className="flex justify-between items-center xl:max-container">
        <div className="mx-8 flex justify-start">
          <Link to="/home">
            <h1 className=" text-slate-950 text-3xl font-semibold">Catchup</h1>
          </Link>
        </div>
        <div className="max-lg:hidden">
          <NavBar></NavBar>
        </div>

        <div className="flex max-sm:px-5 max-lg:hidden">
          {isLogin && (
            <button
              onClick={handleLogout}
              className="mr-4 text-blue-600 bg-white px-4 py-2 rounded-full max-sm:py-2"
            >
              Logout
            </button>
          )}
          {!isLogin && (
            <button>
              <Link
                to={"/login"}
                className="mr-4 text-blue-600 bg-white px-4 py-2 rounded-full max-sm:py-2"
              >
                Log In
              </Link>
            </button>
          )}

          {
            <button className="mr-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2  rounded-full max-sm:hidden">
              <Link to={`/${!isLogin ? "signup" : "book-ticket"}`}>
                {`${!isLogin ? "Sign Up" : "Book Ticket"}`}
              </Link>
            </button>
          }
        </div>
        <div className="mx-8 lg:hidden ">
          <Hamburger
            toggled={isMobileMenuOpen}
            size={32}
            toggle={setIsMobileMenuOpen}
          />
          {isMobileMenuOpen && (
            <div className="fixed ml-auto rounded-lg shadow-lg shadow-gray-400 shadow-4xl right-5  text-white-400 top-[5.5rem] p-10 pt-5 bg-orange-200 border-b border-b-white/20">
              <NavBar />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Header;
