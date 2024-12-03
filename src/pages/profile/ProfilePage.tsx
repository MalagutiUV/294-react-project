import Navbar from "../../components/layout/Navbar";

export interface IProfilePageProps {}

const ProfilePage: React.FC<IProfilePageProps> = (props) => {
  return (
    <>
      <Navbar />
      <h1>Here is my Profile</h1>
    </>
  );
};

export default ProfilePage;
