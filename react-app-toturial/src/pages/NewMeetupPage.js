import { useNavigate } from 'react-router-dom';


import NewMeetupForm from "../components/meetups/NewMeetupForm";


function NewMeetupPage() {
  const navigate = useNavigate();



  //funcao que faz http request a API para guardar informacao na BD
  function addMeetupHandler(meetupObject) {
    fetch("endpoint-api",
      {
        method:"POST",
        body: JSON.stringify(meetupObject),
        headers: {
          "Conten-type": "application/json"
        }
      }
    ).then(() => {
      navigate("/", {replace:true})
    });
  }

  return (
    <div className='mt-2'>
      <h1 className="text-center">NewMeetupPage</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetupPage;
