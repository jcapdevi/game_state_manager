import React, { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom"
import ProtectedRoute from "../../Services/ProtectedRoutes"
import Parse from "parse"
import { createGame } from "../../Services/LearnService.js"
import '../../Styling/GameInput.css'

const formReducer = (state, e) => {
  return {
    ...state,
    [e.name]: e.value
  }
}

const GameInput = () => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = e => {
    e.preventDefault();
    formData['template'] = "tic-tac-toe";
    var board = [];
    for (var i = 0; i < 9; i++) {
      var prefix = 's';
      var str = prefix.concat(i);
      board.push(formData[str]);
    }
    createGame(formData['title'], formData['template'], formData['player-x'], formData['player-o'], board);
  }

  const handleChange = e => {
    setFormData({
      name: e.target.name,
      value: e.target.value,
    });
  }

  return (
    <div id="vs">
      <div>
        <ProtectedRoute
          exact
          path="/GameInput"
          flag = {Parse.User.current()}
          component = {GameInput}
        />
      </div>

      <form id="savegame" onSubmit={handleSubmit}>
        <h1>Save Your Game!</h1>
        <label htmlFor="title" id="labeltitle">Title: </label>
        <input type="text" id="title" name="title" onChange={handleChange} maxLength="15" required/><br />
        <label htmlFor="player-x" id="labelplayerx">Name of Player X: </label>
        <input type="text" id="player-x" name="player-x" onChange={handleChange} maxLength="15" required />
        <br />
        <label htmlFor="player-o" id="labelplayery">Name of Player O: </label>
        <input type="text" id="player-o" name="player-o" onChange={handleChange} maxLength="15" required/>
        <br />
        <p id="prompt">Enter current game-state (enter 'e' or ' ' for empty square):</p>
        <div className="boardgridsave">
          <input type="text" id="s0" name="s0" maxLength="1" size="1" onChange={handleChange} required/>
          <input type="text" id="s1" name="s1" maxLength="1" size="1" onChange={handleChange} required/>
          <input type="text" id="s2" name="s2" maxLength="1" size="1" onChange={handleChange} required/>
          <br />
          <input type="text" id="s3" name="s3" maxLength="1" size="1" onChange={handleChange} required/>
          <input type="text" id="s4" name="s4" maxLength="1" size="1" onChange={handleChange} required/>
          <input type="text" id="s5" name="s5" maxLength="1" size="1" onChange={handleChange} required/>
          <br />
          <input type="text" id="s6" name="s6" maxLength="1" size="1" onChange={handleChange} required/>
          <input type="text" id="s7" name="s7" maxLength="1" size="1" onChange={handleChange} required/>
          <input type="text" id="s8" name="s8" maxLength="1" size="1" onChange={handleChange} required/>
        </div>
        <button type="submit" name="button" id="savesubmit">Save!</button>
      </form>
      <Link to="/ViewSelector">
        <p>View Saved Games</p>
      </Link>
    </div>
  );
};

export default GameInput;
