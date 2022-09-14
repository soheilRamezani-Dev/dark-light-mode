import "./header.css";
import { useContext } from "react";
import ModeContext from "./../../contexts/modeContext";

const Header = () => {
  const modeContext = useContext(ModeContext);

  return (
    <div className={
        modeContext.mode === "light"
          ? "p-3 d-flex t-0 bg-light justify-content-center"
          : "p-3 d-flex t-0 bg-secondary justify-content-center text-light"
      }>
      <div>
        <nav className="navbar ">
          <ul className="navbar-nav d-flex justify-content-center flex-row">
            <li className="nav-item p-2">
              <a className="nav-link
              " href="#">
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
          onClick={""}
        ></div>
      </div>
    </div>
  );
};

export default Header;
