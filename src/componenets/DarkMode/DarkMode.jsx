import light from "../../assets/light-mode-button.png";
import dark from "../../assets/dark-mode-button.png";
import { useEffect, useState } from "react";

export default function DarkMode() {
  const [mode, setMode] = useState("light");

  const element = document.documentElement;

  useEffect(() => {
    if (mode === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [mode, element]);

  const changeMode = (e, selectedMode) => {
    e.preventDefault();
    setMode(selectedMode);
  };

  return (
    <div className="relative">
      {mode === "light" && (
        <img
          src={light}
          onClick={(e) => changeMode(e, "dark")}
          className="w-14 z-20 absolute cursor-pointer drop-shadow-sm"
        />
      )}

      <img
        src={dark}
        onClick={(e) => changeMode(e, "light")}
        className="w-14 cursor-pointer drop-shadow-sm"
      />
    </div>
  );
}
