import { createContext, useState } from "react";

const GlobalContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) =>{},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) =>{}
});

export function ContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);
  
  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler
  };

  function addFavouriteHandler(favouriteMeetup) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMeetup);
    });
  }

  function removeFavouriteHandler(meetupId) {
    setUserFavourites((prevUserFavourites) => {
        return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
      });
  }

  function itemIsFavouriteHandler(meetupId) {
        return userFavourites.some(meetup => meetup.id === meetupId);
  }

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );

  
}

export default GlobalContext;
