import { NavLink } from "react-router";
import { Person } from "./models/Person";

interface GreetingsProps {
  person: Person;
}

function Greetings(props: GreetingsProps) {
  const { id, name } = props.person;

  const detailHref = `/people/${id}`;

  return (
    <div className='p-4 grid grid-cols-3 gap-2 '>
      <p>{id}</p>
      <h2>{name}</h2>
      <div>
        <NavLink className='button-secondary' to={detailHref}>
          Details
        </NavLink>
      </div>
    </div>
  );
}

export default Greetings;
