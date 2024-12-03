import { NavLink } from "react-router";
import { Person } from "./Person";

interface GreetingsProps {
  person: Person;
}

function Greetings(props: GreetingsProps) {
  const { id, name, age, position, heightInMiliMeters } = props.person;

  const detailHref = `/people/${id}`;

  return (
    <div>
      <h2>Greetings {name}</h2>
      <div>
        <span>Age: {age}</span>
        <span>Position: {position}</span>
        <span>Height: {heightInMiliMeters}</span>
      </div>
      <NavLink to={detailHref}>Show Detail Page</NavLink>
    </div>
  );
}

export default Greetings;
