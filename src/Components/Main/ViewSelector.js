import React, { useEffect, useState } from "react";
import { getAllGames} from "../../Services/LearnService.js"; //, getById, createGame, removeGame
import { ViewSelectorMapper } from "./ViewSelectorMapper.js"

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
      <hr />
      <hr />
      <h1>View Saved Games</h1>
      <p>Choose a saved game from the drop down menu to view it.</p>
      <hr />
      <ViewSelectorMapper options={games}/>
    </div>
  );
};

export default ViewSelector;
