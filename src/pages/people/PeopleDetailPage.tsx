import Navbar from "../../components/layout/Navbar";
import { findPerson } from "../../PersonDb";
import { useParams } from "react-router";

export interface IPeopleDetailPageProps {}

const PeopleDetailPage: React.FC<IPeopleDetailPageProps> = (props) => {
  let params = useParams();

  const { peopleId } = params;

  const person = findPerson(Number(peopleId));

  if (person === undefined) {
    return <h1>Sorry, Person not found</h1>;
  }

  const { id, name, age, position, heightInMiliMeters } = person;

  // const id = person.id;
  // const name = person.name;
  // const age = person.age;
  // const position = person.position;
  // const heightInMiliMeters = person.heightInMiliMeters;

  return (
    <>
      <Navbar />
      <h1>People Detail Page for Person {name}</h1>
      <div>
        <span>ID: {id}</span>
        <span>Age: {age}</span>
        <span>Position: {position}</span>
        <span>Height: {heightInMiliMeters}</span>
      </div>
    </>
  );
};

export default PeopleDetailPage;
