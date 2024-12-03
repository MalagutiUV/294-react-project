import { NavLink } from "react-router";

export interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (props) => {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/people"}>People</NavLink>
      <NavLink to={"/rooms"}>Rooms</NavLink>
      <NavLink to={"/profile"}>My Profile</NavLink>
    </nav>
  );
};

export default Navbar;
