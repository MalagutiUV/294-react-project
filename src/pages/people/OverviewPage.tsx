import Greetings from "../../Greetings";
import Navbar from "../../components/layout/Navbar";
import peopleList from "../../PersonDb";

export interface IPeopleOverviewPageProps {}

const PeopleOverviewPage: React.FC<IPeopleOverviewPageProps> = (props) => {
  const fakePeopleDb = peopleList;
  return (
    <>
      <Navbar />
      <h1>Here is the People List</h1>
      {fakePeopleDb.map((entry) => (
        <div>
          <h1>{entry.id}</h1>
          <Greetings person={entry} />
          <hr />
        </div>
      ))}
    </>
  );
};

export default PeopleOverviewPage;
