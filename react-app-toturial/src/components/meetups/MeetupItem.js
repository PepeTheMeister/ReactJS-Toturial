import { useContext } from "react";
import Context from "../../store/Context";

function MeetupItem(props) {
  const favouriteCtx = useContext(Context);

  const itemIsFavourite = favouriteCtx.itemIsFavourite(props.id);

  function toggleFavouritesStatusHandler() {
    if (itemIsFavourite) {
      favouriteCtx.removeFavourite(props.id);
    } else {
      favouriteCtx.addFavourite({
        id: props.id,
        title: props.title,
        adress: props.adress,
        descr: props.descr,
      });
    }
  }

  return (
    <li className="mb-3 me-3">
      <div className="text-dark card bg-body bg-gradient shadow rounded">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-ligth">{props.adress}</h6>
          <p className="card-text">{props.descr}</p>
          <button
            className="card-link btn btn-outline-danger"
            onClick={toggleFavouritesStatusHandler}
          >
            {itemIsFavourite ? "Remove from Favourites" : "To Favourites"}
          </button>
        </div>
      </div>
    </li>
  );
}

export default MeetupItem;
