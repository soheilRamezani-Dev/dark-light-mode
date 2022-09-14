import "./header.css";
import { useContext, useEffect } from "react";
import ModeContext from "./../../contexts/modeContext";

const Header = () => {
  const modeContext = useContext(ModeContext);

  useEffect(() => {
    const windowsMode = window.matchMedia("(prefers-color-scheme: light)")
      .matches
      ? "light"
      : "dark";
    modeContext.setMode(windowsMode);
  }, []);

  const modeHandeler = () => {
    if (modeContext.mode == "light") modeContext.setMode("dark");
    else {
      modeContext.setMode("light");
    }
  };

  return (
    <div
      className={
        modeContext.mode === "light"
          ? "p-3 d-flex t-0 bg-light justify-content-center"
          : "p-3 d-flex t-0 bg-secondary justify-content-center text-light"
      }
    >
      <div>
        <nav className="navbar ">
          <ul className="navbar-nav d-flex justify-content-center flex-row">
            <li className="nav-item p-2">
              <a
                className="nav-link
              "
                href="#"
              >
                home
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link" href="#">
                abot us
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link" href="#">
                contact
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link" href="#">
                blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mode ms-5 mt-4 position-relative">
        <div
          className={
            modeContext.mode === "light"
              ? "mode-toggle rounded light-btn"
              : "mode-toggle rounded dark-btn"
          }
          onClick={modeHandeler}
        ></div>
      </div>
    </div>
  );
};

export default Header;
