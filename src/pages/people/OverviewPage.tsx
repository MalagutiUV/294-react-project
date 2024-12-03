import { useEffect, useState } from "react";

import Greetings from "../../Greetings";
import Navbar from "../../components/layout/Navbar";
import { Person } from "../../models/Person";

export interface IPeopleOverviewPageProps {}

const waitSeconds = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3 seconds have passed");
    }, 3000);
  });
};

const PeopleOverviewPage: React.FC<IPeopleOverviewPageProps> = () => {
  // get people data from api
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://react-vid-app.vercel.app/api/people"
      );
      const data = await response.json();
      await waitSeconds();
      setPeople(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Here is the People List</h1>
      {people.map((entry: Person, index: number) => (
        <div>
          <Greetings person={entry} />
          <hr />
        </div>
      ))}
    </>
  );
};

export default PeopleOverviewPage;
