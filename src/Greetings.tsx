import { NavLink } from "react-router";
import { Person } from "./models/Person";

interface GreetingsProps {
  person: Person;
}

function Greetings(props: GreetingsProps) {
  const { id, name, age, position, heightInMiliMeters } = props.person;

  const detailHref = `/people/${id}`;

  return (
    <div>
      <h2>Greetings {name}</h2>
      <NavLink to={detailHref}>Show Detail Page</NavLink>
    </div>
  );
}

export default Greetings;
