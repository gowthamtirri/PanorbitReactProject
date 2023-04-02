import "./profileModal.css";
import { UserList } from "../../components";
import { Link } from "react-router-dom";

const ProfileModal = ({ activeUser, users, modalOpened }) => {
  return (
    <div className={`profileModal ${modalOpened && "active"}`}>
      <div className="activeUserProfile">
        <img width="100px" src={activeUser.profilepicture} alt="" />
        <p className="userName">{activeUser.name}</p>
        <p className="userEmail">{activeUser.email}</p>
      </div>
      <div className="otherUsers">
        <UserList users={users} />
      </div>
      <div className="signOut">
        <Link to={"/"} className="signOutBtn">
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default ProfileModal;
