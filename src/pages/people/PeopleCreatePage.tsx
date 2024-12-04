import { useNavigate } from "react-router";

export interface IPeopleCreatePageProps {}

const PeopleCreatePage: React.FC<IPeopleCreatePageProps> = (props) => {
  let navigate = useNavigate();

  const createPerson = async (formData: any) => {
    console.log("create person");
    console.log(JSON.stringify(formData));
    const response = await fetch("http://react-vid-app.vercel.app/api/people", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    console.log(response);

    const dataObjectFromResponse = await response.json();

    console.log(dataObjectFromResponse);

    const peopleId = dataObjectFromResponse.peopleId;
    console.log(peopleId);

    // redirect to people detail page with id returned from server
    navigate(`/people/${peopleId}`);
  };

  return (
    <>
      <h1>Create new Person</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          // Nicht anpassen start
          const form = e.target as HTMLFormElement;

          const formData = new FormData(form);

          const data: Record<string, any> = {};
          formData.forEach((value, key) => {
            data[key] = value;
          });
          // nicht anpassen ende

          // Use the correct function
          createPerson(data);
        }}
      >
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' placeholder='Name' />
        </div>
        <div>
          <label htmlFor='age'>Age</label>
          <input type='number' name='age' placeholder='Age' />
        </div>
        <div>
          <label htmlFor='position'>Position</label>
          <input type='text' name='position' placeholder='position' />
        </div>
        <div>
          <label htmlFor='heightinmilimeters'>Height in Milimeters</label>
          <input
            type='numer'
            name='heightinmilimeters'
            placeholder='Height in Milimeters'
          />
        </div>
        <button className='button-primary' type='submit'>
          Speichern
        </button>
      </form>
    </>
  );
};

export default PeopleCreatePage;
