import { useRef } from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const adressInputRef = useRef();
  const descrInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredtitle = titleInputRef.current.value;
    const enteredAdress = adressInputRef.current.value;
    const enteredDescr = descrInputRef.current.value;

    const meetupObject = {
      title: enteredtitle,
      adress: enteredAdress,
      descr: enteredDescr,
    };

    console.log(meetupObject);

    props.onAddMeetup(meetupObject);
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form
        className="w-25 p-3 bg-body bg-gradient shadow-lg rounded m-3"
        onSubmit={submitHandler}
      >
        <div className="mb-3 align-items-center">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            required
            ref={titleInputRef}
          />
          <div id="title" className="form-text">
            We'll never share your title with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="adress" className="form-label">
            Adress
          </label>
          <input
            type="text"
            className="form-control"
            id="adress"
            required
            ref={adressInputRef}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="descr">
            Descrição
          </label>
          <textarea
            rows="5"
            required
            id="descr"
            className="form-control"
            ref={descrInputRef}
          />
        </div>
        <div className="d-flex  justify-content-center">
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewMeetupForm;
