import "./landingPage.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";
import { SkeletonLoading } from "../../components";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const { users, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="landingPage">
      <div className="usersContainer">
        <div className="title">
          <h4>Select an account</h4>
        </div>
        {loading ? (
          <SkeletonLoading />
        ) : (
          <div className="users-wrapper">
            <ul className="users">
              {users.map((user) => (
                <Link key={user.id} to={`/profile/${user.id}`}>
                  <li>
                    <img width="35px" src={user.profilepicture} alt="" />
                    <p>{user.name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
