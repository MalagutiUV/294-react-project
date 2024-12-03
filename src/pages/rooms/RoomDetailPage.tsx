import Navbar from "../../components/layout/Navbar";
import { findRoom } from "../../models/RoomsDb";
import { useParams } from "react-router";

export interface IRoomDetailPageProps {}

const RoomDetailPage: React.FC<IRoomDetailPageProps> = (props) => {
  // 1. read id from Url
  let params = useParams();
  const roomId = params.roomId;
  console.log(roomId);

  // 2. find room with id from url
  const room = findRoom(roomId);
  console.log(room);

  if (room === undefined) {
    return <h1>Sorry, Room not found</h1>;
  }

  const { id, description, price, location, totalBeds, totalRooms } = room;

  return (
    <>
      <Navbar />
      <h1>
        {description} - {id}
      </h1>
      <table>
        <tr>
          <td>Preis</td>
          <td>{price}</td>
        </tr>
        <tr>
          <td>location</td>
          <td>{location}</td>
        </tr>
        <tr>
          <td>totalBeds</td>
          <td>{totalBeds}</td>
        </tr>
        <tr>
          <td>totalRooms</td>
          <td>{totalRooms}</td>
        </tr>
      </table>
    </>
  );
};

export default RoomDetailPage;
