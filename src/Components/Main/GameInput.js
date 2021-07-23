import React from "react";
import { Link } from "react-router-dom"
import ProtectedRoute from "../../Services/ProtectedRoutes"
import Parse from "parse"
import Gameform from "./Subcomponents/GameForm"

const [newGame, setNewGame] = useState({
  Title:"",
  Template:"-- select an option --",
  Player_x:"",
  Player_y:"",
  board:["e", "e", "e", "e", "e", "e", "e", "e", "e"]
});

const [add, setAdd] = useState(false);

const onChangeHandler = (e) => {
  e.preventDefault();
  console.log(e.target);
  const { name, value: newValue } = e.target;
  console.log(newValue);
  setNewGame( {...newGame, [name]: newValue} );
};

const onSubmitHandler = (e) => {
  e.preventDefault();
  console.log('submitted: ', e.target);
  setAdd(true);
}

// Game Input Page
const GameInput = () => {
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
