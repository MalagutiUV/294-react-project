import { useEffect, useState } from "react";

import Navbar from "../../components/layout/Navbar";
import { findPerson } from "../../models/PersonDb";
import { useParams } from "react-router";

export interface IPeopleDetailPageProps {}

const PeopleDetailPage: React.FC<IPeopleDetailPageProps> = (props) => {
  let params = useParams();

  const { peopleId } = params;

  const [person, setPerson] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://react-vid-app.vercel.app/api/people/${peopleId}`
      );
      const data = await response.json();
      console.log(data);
      setPerson(data);
    };
    fetchData();
  }, []);

  if (person === undefined) {
    return <h1>Sorry, Person not found</h1>;
  }

  const { id, name, age, position, heightinmilimeters } = person;

  return (
    <>
      <Navbar />
      <h1>People Detail Page for Person {name}</h1>
      <div>
        <span>ID: {id}</span>
        <span>Age: {age}</span>
        <span>Position: {position}</span>
        <span>Height: {heightinmilimeters}</span>
      </div>
    </>
  );
};

export default PeopleDetailPage;
