import { useEffect, useState } from "react";

import Navbar from "../../components/layout/Navbar";
import { findRoom } from "../../models/RoomsDb";
import { useParams } from "react-router";

export interface IRoomDetailPageProps {}

const RoomDetailPage: React.FC<IRoomDetailPageProps> = (props) => {
  let params = useParams();

  const { roomId } = params;

  const [room, setRoom] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://react-vid-app.vercel.app/api/rooms/${roomId}`
      );
      const data = await response.json();

      setRoom(data);
    };
    fetchData();
  }, []);

  if (room === undefined) {
    return <h1>Sorry, Person not found</h1>;
  }

  const { id, description, price, location, totalbeds, totalrooms } = room;

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
          <td>totalbeds</td>
          <td>{totalbeds}</td>
        </tr>
        <tr>
          <td>totalrooms</td>
          <td>{totalrooms}</td>
        </tr>
      </table>
    </>
  );
};

export default RoomDetailPage;
