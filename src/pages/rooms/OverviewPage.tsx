import { NavLink } from "react-router";
import { rooms } from "../../models/RoomsDb";

export interface IRoomOverviewPageProps {}

const RoomOverviewPage: React.FC<IRoomOverviewPageProps> = (props) => {
  const fakeRooms = rooms;

  return (
    <>
      <h1>Room Overview</h1>
      {fakeRooms.map((entry) => (
        <div>
          <h2>{entry.description}</h2>
          <NavLink to={`/rooms/${entry.id}`}>Details</NavLink>
          <hr />
        </div>
      ))}
    </>
  );
};

export default RoomOverviewPage;
