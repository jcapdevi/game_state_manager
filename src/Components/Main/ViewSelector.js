import React, { useEffect, useState } from "react";
import { getAllGames, getById } from "../../Services/LearnService.js";
import ViewSelectorMapper from "./ViewSelectorComponents/ViewSelectorMapper"
import DisplaySelection from "./ViewSelectorComponents/DisplaySelection"
import { Link } from "react-router-dom"
import ProtectedRoute from "../../Services/ProtectedRoutes"
import Parse from "parse"

const ViewSelector = () => {
  const [games, setGames] = useState([]);         // Games to populate form
  const [formData, setFormData] = useState("")    // Id of selected game
  const [go, setGo] = useState(false)             // Flag to get data
  const [display, setDisplay] = useState(false)   // Flag to display data
  const [game, setGame] = useState(null)          // Object of selected game

  // Get all games to populate form
  useEffect(() => {
    getAllGames().then((games) => {
      setGames(games);
      console.log(games);
    });
  }, []);

  //  Updates user credentials to match form
  const onChangeHandler = (e) => {
    e.preventDefault();
    const {value: newValue } = e.target
    console.log('Game Selected:', e.target);
    setFormData(newValue);
    setGo(false)
    setDisplay(false)
  };

  // Sets go flag when form is submitted
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('submitted: ', e.target);
    setGo(true);
  }

  // Gets data and sets display flag whenever new data is submitted
  useEffect(() => {
    if (formData && go) {
      getById(formData).then((game) => {
        setGame(game)
        setDisplay(true)
      })
    }
  },[formData, go]);

  return (
    <div className="viewselector">
      <div>
        <ProtectedRoute
          exact
          path="/ViewSelector"
          flag = {Parse.User.current()}
          component = {ViewSelector}
        />
      </div>

      // Get Selection
      <div>
        <h1>View Saved Games</h1>
        <p>Choose a saved game from the drop down menu to view it.</p>
        <hr />
        <br />
        <ViewSelectorMapper
          options={games}
          onChange={onChangeHandler}
          onSubmit={onSubmitHandler}/>
        <br />
        <hr />
      </div>

      // Display Selected Game
      <div>
        { display ? (
          <div>
            <DisplaySelection selection={game} />
            <br />
            <hr />
          </div>
        ) : null }
      </div>

      <div>
        <h3>Navigation:</h3>
        <Link to="/UserInfo">
          <p>User Info</p>
        </Link>
        <Link to="/GameInput">
          <p>Save a Game</p>
        </Link>
        <Link to="/Logout">
          <p>Log Out</p>
        </Link>
      </div>
    </div>
  );
};

export default ViewSelector;
