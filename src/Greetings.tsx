import { NavLink } from "react-router";
import { Person } from "./models/Person";

interface GreetingsProps {
  person: Person;
}

function Greetings(props: GreetingsProps) {
  const { id, name } = props.person;

  const detailHref = `/people/${id}`;

  return (
    <div className='p-4 flex flex-col gap-2'>
      <h2>Greetings {name}</h2>
      <NavLink className='button-primary' to={detailHref}>
        Details
      </NavLink>
    </div>
  );
}

export default Greetings;
