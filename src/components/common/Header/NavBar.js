import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useSelector, useDispatch } from "react-redux";
const NavBar = () => {
  const isLogin = useSelector((state) => state.login.isAuthenthicated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(loginActions.logout());
    navigate("/home");
  };

  return (
    <ul className="flex flex-1 justify-center items-center gap-5 lg:gap-16 max-lg:flex-col max-sm:gap-6 ">
      <li className=" ">
        <Link
          to="/home"
          className="font-monsterrat leading-normal text-lg text-slate-gray hover:text-red-900 max-sm:gap-6 "
        >
          Home
        </Link>
      </li>
      <li className=" font-monsterrat leading-normal text-lg text-slate-gray hover:text-red-900 max-sm:gap-6 ">
        <Link to={`/${!isLogin ? "about-us" : "your-meetup"}`}>{`${
          !isLogin ? "About Us" : "Your Meetup"
        }`}</Link>
      </li>
      <li className="font-monsterrat leading-normal text-lg text-slate-gray hover:text-red-900 max-sm:gap-6 ">
        <Link to={`/${!isLogin ? "contact-us" : "add-meetup"}`}>
          {`${!isLogin ? "Contact Us" : "Add Meetup"}`}
        </Link>
      </li>
      {!isLogin && (
        <li className="lg:hidden font-monsterrat leading-normal text-lg text-slate-gray hover:text-red-900 max-sm:gap-6 ">
          <Link to="signup">Sign up</Link>
        </li>
      )}
      <li className="lg:hidden font-monsterrat leading-normal text-lg text-slate-gray hover:text-red-900 max-sm:gap-6 ">
        <Link to={`/${!isLogin ? "login" : "logout"}`}>
          {`${!isLogin ? "Log in" : "Log out"}`}
        </Link>
        {isLogin ? (
          <Link to={`/"login"}`}>Log in</Link>
        ) : (
          <button
            onClick={handleLogout}
            className="mr-4 text-blue-600 bg-white px-4 py-2 rounded-full max-sm:py-2"
          >
            Logout
          </button>
        )}
      </li>
    </ul>
  );
};
export default NavBar;
