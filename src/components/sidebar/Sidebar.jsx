import "./sidebar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const Sidebar = () => {
  const [active, setActive] = useState("profile");

  return (
    <div className="sidebar">
      <ul className="navlinks">
        <Link to={`/profile/1`}>
          <li
            style={{ color: `${active === "profile" ? "white" : "#a5a5e4"}` }}
            onClick={() => setActive("profile")}
          >
            Profile
            {active === "profile" && (
              <div className="active">
                <AiOutlineRight color="#BDC5D4" stroke-width="50" />
              </div>
            )}
          </li>
        </Link>

        <Link to={`/profile/1`}>
          <li
            style={{ color: `${active === "posts" ? "white" : "#a5a5e4"}` }}
            onClick={() => setActive("posts")}
          >
            Posts
            {active === "posts" && (
              <div className="active">
                <AiOutlineRight color="#BDC5D4" stroke-width="50" />
              </div>
            )}
          </li>
        </Link>

        <Link to={`/profile/1`}>
          <li
            style={{ color: `${active === "gallery" ? "white" : "#a5a5e4"}` }}
            onClick={() => setActive("gallery")}
          >
            Gallery
            {active === "gallery" && (
              <div className="active">
                <AiOutlineRight color="#BDC5D4" stroke-width="50" />
              </div>
            )}
          </li>
        </Link>

        <Link to={`/profile/1`}>
          <li
            style={{ color: `${active === "todo" ? "white" : "#a5a5e4"}` }}
            onClick={() => setActive("todo")}
          >
            ToDo
            {active === "todo" && (
              <div className="active">
                <AiOutlineRight color="#BDC5D4" stroke-width="50" />
              </div>
            )}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
