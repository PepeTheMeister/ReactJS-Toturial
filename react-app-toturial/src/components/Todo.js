import { useState } from "react";
import "../static/global.css";

import ModalView from "./ModalView";

import "bootstrap/dist/css/bootstrap.min.css"


import { Button } from 'react-bootstrap';


function Todo(props) {
  const [ modalIsOpen, setModalIsOpen] = useState(false);




  function deleteHandler() {
      setModalIsOpen(true);

  }

  function closeModal(){
      setModalIsOpen(false);
  }

  return (
    <div >
      <h2>{props.text}</h2>
      <div className="actions">
        <Button variant="secondary" onClick={deleteHandler}>delete</Button>
      </div>
      <ModalView show={modalIsOpen} onHide={closeModal}/>
    </div>
  );
}

export default Todo;
