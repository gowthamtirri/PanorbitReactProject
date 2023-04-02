import "./profile.css";
import { Dashboard } from "../../components";

const Profile = () => {
  return (
    <Dashboard pageTitle={"Profile"}>
      <div className="profileContent">
        <div className="userDetails">
          <div className="personalDetails">
            <img
              width={"200px"}
              src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1010.jpeg"
              alt=""
            />
            <h3>Gowtam tirri</h3>
            <p>
              <span>Username :</span> Gowtham Tirri
            </p>
            <p>
              <span>email :</span> Gowtham Tirri
            </p>
            <p>
              <span>Username :</span> Gowtham Tirri
            </p>
          </div>
          <div className="companyDetails"></div>
        </div>
        <div className="userAddress"></div>
      </div>
    </Dashboard>
  );
};

export default Profile;
