

function Modal(props) {
  return (
    <div className="modal">
      <p>tem a certeza?</p>
      <button className="btn btn--alt" onClick={props.closeModal}>Cancel</button>
      <button className="btn" onClick={props.closeModal}>Sim</button>
    </div>
  );
}

export default Modal;
