import {useContext} from "react";

import Context from "../store/Context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage(){

    const favouritesCtx = useContext(Context);

    let content;

    if(favouritesCtx.totalFavourites === 0){
        content = <p> No Favourites selected!</p>
    }
    else{
        content = <MeetupList meetups={favouritesCtx.favourites}/>
    }

    return <div className="">
        <h2 className="mt-3 ms-2">My Favourites</h2>
        <div>{content}</div>
    </div>
}



export default FavouritesPage;