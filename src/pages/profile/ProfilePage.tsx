import Navbar from "../../components/layout/Navbar";
import { useNavigate } from "react-router";

export interface IProfilePageProps {}

const ProfilePage: React.FC<IProfilePageProps> = (props) => {
  const navigate = useNavigate();

  const logoutClick = () => {
    localStorage.removeItem("muv-token");
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <h1>Here is my Profile</h1>
      <button onClick={() => logoutClick()} className='button-primary'>
        Logout
      </button>
    </>
  );
};

export default ProfilePage;
