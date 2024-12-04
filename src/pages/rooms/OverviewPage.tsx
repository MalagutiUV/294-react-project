import { useEffect, useState } from "react";

import { NavLink } from "react-router";
import Navbar from "../../components/layout/Navbar";
import { Room } from "../../models/Room";
import { rooms } from "../../models/RoomsDb";

export interface IRoomOverviewPageProps {}

const RoomOverviewPage: React.FC<IRoomOverviewPageProps> = (props) => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch("http://react-vid-app.vercel.app/api/rooms");
      const data = await response.json();

      setRooms(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Room Overview</h1>

      {rooms.map((entry: Room) => (
        <div>
          <h2>{entry.description}</h2>
          <NavLink className='button-primary' to={`/rooms/${entry.id}`}>
            Details
          </NavLink>
          <hr />
        </div>
      ))}
    </>
  );
};

export default RoomOverviewPage;
