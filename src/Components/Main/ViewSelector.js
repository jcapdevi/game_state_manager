import React, { useEffect, useState } from "react"
import { getAllGames} from "../../Services/LearnService.js" //, getById, createGame, removeGame
import { ViewSelectorMapper } from "./ViewSelectorMapper.js"
import { Link } from "react-router-dom"
import ProtectedRoute from "../../Services/ProtectedRoutes"
import Parse from "parse";
import '../../Styling/ViewSelector.css'

const ViewSelector = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getAllGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <div className="viewselector" id="vs">
      <div>
        <ProtectedRoute
          exact
          path="/ViewSelector"
          flag = {Parse.User.current()}
          component = {ViewSelector}
        />
      </div>

      <h1>View Saved Games</h1>
      <p id="desc">Choose a saved game from the drop down menu to view it.</p>
      <ViewSelectorMapper options={games}/>
      <br /><br />
      <br /><br />
      <Link to="/GameInput">
        <p>Save a Game</p>
      </Link>
    </div>
  );
};

export default ViewSelector;
