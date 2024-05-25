import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const NavLink = ({ link, text }) => {
  return (
    <Link to={link} className=" cursor-pointer font-medium ">
      {text}
    </Link>
  );
};

const Navbar = () => {
  const navlinks = [
    { link: "/", text: "Movies" },
    { link: "/favorite", text: "Favorite Movies" },
  ];
  return (
    <nav className="py-2 border-b border-slate-600 sticky top-0 w-full  ">
      <Container>
        <div className="flex items-center  justify-between p-4 text-white">
          <h3 className="text-xl font-semibold">Movies</h3>
          <ul className="flex items-center gap-4 ">
            {navlinks.map((ele, idx) => (
              <NavLink {...ele} key={idx} />
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
