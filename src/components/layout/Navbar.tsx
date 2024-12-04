import { NavLink } from "react-router";

export interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = (props) => {
  return (
    <nav className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 h-10 w-full text-xl gap-2'>
      <NavLink className='navbutton' to={"/"}>
        Home
      </NavLink>
      <NavLink className='navbutton' to={"/people"}>
        People
      </NavLink>
      <NavLink className='navbutton' to={"/rooms"}>
        Rooms
      </NavLink>
      <NavLink className='navbutton' to={"/feed"}>
        Feed
      </NavLink>
      <NavLink className='navbutton' to={"/profile"}>
        My Profile
      </NavLink>
    </nav>
  );
};

export default Navbar;
