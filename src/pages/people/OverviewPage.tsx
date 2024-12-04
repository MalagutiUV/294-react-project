import { LoaderPinwheel, UserPlus } from "lucide-react";
import { useEffect, useState } from "react";

import Greetings from "../../Greetings";
import { NavLink } from "react-router";
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        "http://react-vid-app.vercel.app/api/people",
        { method: "GET" }
      );
      const data = await response.json();
      await waitSeconds();
      setPeople(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Here is the People List</h1>
      <NavLink className='button-primary' to={"/people/create"}>
        Create new Person
      </NavLink>
      {isLoading === true ? (
        <LoaderPinwheel className='text-blue-700 animate-spin w-12 h-12' />
      ) : (
        <>
          {people.map((entry: Person, index: number) => (
            <div>
              <Greetings person={entry} />
              <hr />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default PeopleOverviewPage;
