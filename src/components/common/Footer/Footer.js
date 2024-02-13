import { Link } from "react-router-dom";

import PreFooter from "./PreFooter";
import { footerlinks } from "../../../constants/index"
const Footer = () => {
  return (
    <footer className=" bg-zinc-800">
      <div className="max-container pb-4">
        <PreFooter />
        <div className="flex flex-col justify-between sm:flex-row px-6 sm:px-4 xl:px-0 md:max-w-screen mx-auto my-0 space-y-6 pb-4">
          <div className=" sm:px-10 mt-5 sm:items-center align-middle">
            <h1 className="text-white font-palanquin font-semibold text-2xl ">
              Meetup
            </h1>
            <p className="text-white">Connect. Discover. Grow.</p>
          </div>
          <nav className="flex justify-around flex-1 lg:gap-10 flex-wrap">
            {footerlinks.map((section) => (
              <nav
                key={section.title}
                className="grid"
              >
                <h4 className="text-white mt-1">{section.title}</h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className="mt-5 mb-5 w-2.5/3 text-white font-montserrat text-base leading-normal hover:text-orange-800"
                      key={link.name}
                    >
                      <Link to={link.page}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </nav>
        </div>
      </div>
      <div className="py-5 bg-slate-700 text-center">
        <h1 className="text-white align-middle">
          © 2023 Meetup. All rights reserved
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
