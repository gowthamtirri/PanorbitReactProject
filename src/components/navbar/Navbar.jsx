import "./navbar.css";

const Navbar = ({ pageTitle }) => {
  return (
    <div className="navbar">
      <h4 className="Pagetitle">{pageTitle}</h4>
      <div className="user">
        <img src="" alt="" />
        <h4>name</h4>
      </div>
    </div>
  );
};

export default Navbar;
