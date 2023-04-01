import "./dashboard.css";
import { Sidebar, Navbar } from "../../components";

const Dashboard = ({ children, pageTitle }) => {
  console.log(children);
  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <Navbar pageTitle={pageTitle} />
        {children}
      </main>
    </div>
  );
};

export default Dashboard;
