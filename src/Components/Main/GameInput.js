import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProtectedRoute from "../../Services/ProtectedRoutes"
import Parse from "parse"
import GameForm from "./Subcomponents/GameForm"
import { createGame } from "./../../Services/DataService"


// Game Input Page
const GameInput = () => {
  const [newGame, setNewGame] = useState({
    Title:"",
    Template:"-- select an option --",
    Player_x:"",
    Player_y:"",
    A1:"e",
    A2:"e",
    A3:"e",
    B1:"e",
    B2:"e",
    B3:"e",
    C1:"e",
    C2:"e",
    C3:"e"
  });

  const [add, setAdd] = useState(false);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);
    setNewGame( {...newGame, [name]: newValue} );
    console.log('updated', newGame)
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('submitted: ', e.target);
    setAdd(true);
  }

  // useEffect will run when changes are made to the state variable
  useEffect(() => {
    if (newGame && add) {
      createGame(newGame).then((newGame) => {
        if (newGame) {
          alert(`${newGame.Title} has been successfully saved!`)
        }
        setAdd(false)
      });
    }
  },[newGame, add]);

  console.log(Parse.User.current())
  return (
    <div>
      <div>
        <ProtectedRoute
          exact
          path="/GameInput"
          flag = {Parse.User.current()}
          component = {GameInput}
        />
      </div>

      {/* Get game data from user */}
      <div>
        <GameForm game={newGame} onChange={onChangeHandler} onSubmit={onSubmitHandler} />
      </div>

      {/* TODO: Send data to Parse database */}

      <div>
        <h3>Navigation:</h3>
        <Link to="/UserInfo">
          <p>User Info</p>
        </Link>
        <Link to="/ViewSelector">
          <p>View Saved Games</p>
        </Link>
        <Link to="/Logout">
          <p>Log Out</p>
        </Link>
      </div>
    </div>
  );
};

export default GameInput;
