import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const title = "Priya.Jha";
  const titleRef = useRef();

  const [iteration, setIteration] = useState(0);
  const [text, setText] = useState(title);
  const [isHover, setIsHover] = useState(false);

  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+{}[]:;</~>1234567890 ";

  useEffect(() => {
    let interval = setInterval(() => {
      setText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return title[index];
            }

            return letters[Math.floor(Math.random() * 86)];
          })
          .join("")
      );

      if (iteration >= title.length) {
        clearInterval(interval);
      }

      setIteration(iteration + 1 / 3);
    }, 40);

    const intervalId = setInterval(() => {
      const fonts = [
        "Rubik Spray Paint",
        "Rubik Glitch",
        "Press Start 2P",
        "Rubik Bubbles",
        "Noto Sans KR",
        "Noto Sans TC",
        "Noto Nastaliq Urdu",
        "Baloo 2",
        "Inspiration",
        "Bungee Hairline",
        "Bungee Outline",
      ];
      if (isHover === true) {
        const randomIndex = Math.floor(Math.random() * fonts.length);
        titleRef.current.style.fontFamily = fonts[randomIndex];
      }
    }, 45);

    return () => {
      clearInterval(interval);
      clearInterval(intervalId);
    };
  }, [iteration, text, isHover]);

  const activeLink =
    "font-bold transition-all ease-in-out text-secondary text-base mx-2 underline";
  const normalLink =
    "font-bold transition-all ease-in-out text-peach text-sm mx-2";

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
    titleRef.current.style.fontFamily = "Space Mono";
  };

  return (
    <>
      <div className="w-screen h-12 bg-neutral flex px-6 justify-center items-center font-mono">
        <NavLink to="/" className="grow">
          <h1
            ref={titleRef}
            className="text-xl font-bold w-fit px-2 py-px transition-all ease-in-out duration-500 text-secondary hover:text-peach hover:bg-secondary rounded-lg"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {text}
          </h1>
        </NavLink>
        {/* Tabs */}
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
          to="/"
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
