import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const title = "Priya.Jha";
  const [iteration, setIteration] = useState(0);
  const [text, setText] = useState(title);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ.";

  useEffect(() => {
    let interval = setInterval(() => {
      setText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return title[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= title.length) {
        clearInterval(interval);
      }

      setIteration(iteration + 1 / 3);
    }, 50);

    return () => clearInterval(interval);
  }, [iteration, text]);

  const activeLink = "text-secondary font-bold text-sm mx-2 underline";
  const normalLink = "text-peach font-bold text-sm mx-2";

  return (
    <>
      <div className="w-screen h-12 bg-neutral flex px-6 justify-center items-center font-mono">
        <NavLink
          to="home"
          className="grow text-xl font-bold text-secondary"
          onM
        >
          {text}
        </NavLink>
        {/*  */}
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
          to="home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
          to="projects"
        >
          Projects
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
          to="about"
        >
          About
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
