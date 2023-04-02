import "./navbar.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchActiveUser } from "../../pages/profilePage/singleUserSlice";

const Navbar = ({ pageTitle }) => {
  const { id } = useParams("id");
  const dispatch = useDispatch();

  const activeUser = useSelector((state) => state.activeUser.activeUser);

  useEffect(() => {
    dispatch(fetchActiveUser(id));
  }, [dispatch]);

  const handleUserProfileClick = () => {
    alert("clciked");
  };

  return (
    <div className="navbar">
      <h3 className="PageTitle">{pageTitle}</h3>
      <div className="userProfile" onClick={handleUserProfileClick}>
        <img width="35px" src={activeUser.profilepicture} alt="" />
        <p className="userName">{activeUser.name}</p>
      </div>
    </div>
  );
};

export default Navbar;
