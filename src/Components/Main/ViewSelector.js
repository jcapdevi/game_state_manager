import React, { useEffect, useState } from "react";
import { getAllGames} from "../../Services/LearnService.js"; //, getById, createGame, removeGame
import { ViewSelectorMapper } from "./ViewSelectorMapper.js"
import { Link } from "react-router-dom"

const ViewSelector = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getAllGames().then((games) => {
      setGames(games);
      console.log(games);
    });

    // getById("IDc9LcMCnl").then((games) => {
    //   setGames(games);
    // })
  }, []);

  return (
    <div className="viewselector">
      <h1>View Saved Games</h1>
      <p>Choose a saved game from the drop down menu to view it.</p>
      <hr />
      <ViewSelectorMapper options={games}/>
      <br /><br />
      <hr />
      <br /><br />
      <Link to="/GameInput">
        <p>Save a Game</p>
      </Link>
    </div>
  );
};

export default ViewSelector;
