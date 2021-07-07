import React from "react";

const GameInput = () => {
  return (
    <form>
      <h1>Save Your Game!</h1>
      <p>Choose a game to save from the drop down menu.</p>
      <hr />
      <label htmlFor="game">Select game type: </label>
      <select name="game" id="game" defaultValue="-- select an option --" required>
        <option disabled>-- select an option --</option>
        <option value="ttt">Tic-Tac-Toe</option>
      </select>
      <br /><br />
      <label htmlFor="player-x">Name of Player X: </label>
      <input type="text" id="player-x" name="player-name" />
      <br /><br />
      <label htmlFor="player-o">Name of Player O: </label>
      <input type="text" id="player-o" name="player-name" />
      <br />
      <p>Enter current game-state:</p>
      <input type="text" id="a1" name="board" maxLength="1" size="1" />
      <input type="text" id="a2" name="board" maxLength="1" size="1" />
      <input type="text" id="a3" name="board" maxLength="1" size="1" />
      <br />
      <input type="text" id="b1" name="board" maxLength="1" size="1" />
      <input type="text" id="b2" name="board" maxLength="1" size="1" />
      <input type="text" id="b3" name="board" maxLength="1" size="1" />
      <br />
      <input type="text" id="c1" name="board" maxLength="1" size="1" />
      <input type="text" id="c2" name="board" maxLength="1" size="1" />
      <input type="text" id="c3" name="board" maxLength="1" size="1" />
      <br /><br />
      <button type="submit" name="button">Submit</button>
    </form>
  );
};

export default GameInput;
