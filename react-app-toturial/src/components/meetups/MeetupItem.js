function MeetupItem(props) {
  return (
    <li className="mb-3 me-3">
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.adress}</h6>
          <p className="card-text">{props.descr}</p>
          <button className="card-link btn btn-outline-secondary">Another link</button>
        </div>
      </div>
    </li>
  );
}

export default MeetupItem;
