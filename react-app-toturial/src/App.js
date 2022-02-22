import { Route, Routes } from "react-router-dom";

//import Todo from "./components/Todo";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import NewMeetupsPage from "./pages/NewMeetupPage";
import FavouritesPage from "./pages/FavouritesPage";
import MainNav from "./components/layout/MainNav";


function App() {
  return (
    <div>
      <MainNav/>
      <Routes>
        <Route exact path="/" element={<AllMeetupsPage />}></Route>
        <Route exact path="newmeetup" element={<NewMeetupsPage />}></Route>
        <Route exact path="favourites" element={<FavouritesPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
