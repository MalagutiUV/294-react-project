import Navbar from "../../components/layout/Navbar";
import { findPerson } from "../../PersonDb";
import { useParams } from "react-router";

export interface IPeopleDetailPageProps {}

const PeopleDetailPage: React.FC<IPeopleDetailPageProps> = (props) => {
  let params = useParams();

  const { peopleId } = params;

  const person = findPerson(Number(peopleId));

  return (
    <>
      <Navbar />
      <h1>People Detail Page for Person {person?.name}</h1>
      <div>
        <span>Age: {person?.age}</span>
        <span>Position: {person?.position}</span>
        <span>Height: {person?.heightInMiliMeters}</span>
      </div>
    </>
  );
};

export default PeopleDetailPage;
