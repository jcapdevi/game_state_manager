import React, { useState, useEffect, useReducer } from "react"
import { getById, removeGame, updateGame } from "../../Services/LearnService.js"
import "../../Styling/ViewGame.css"

const formReducer = (state, e) => {
  return {
    ...state,
    [e.name]: e.value
  }
}

const ViewGame = ({ id }) => {
  const [display, setDisplay] = useState(true);
  const [edit, setEdit] = useState(false);
  const [games, setGames] = useState([]);
  const [board, setBoard] = useState([]);
  const [formData, setFormData] = useReducer(formReducer, {});

  useEffect(() => {
    getById(id).then((games) => {
      setGames(games);
      setBoard(convertBoard(games[0]));
    });
  }, [id]);

  const convertBoard = board => {
    var tempBoard = board;
    if (!display) {
      setDisplay(true);
    }
    for (var i = 0; i < tempBoard.length; i++) {
      if (tempBoard[i] === 'e') {
        tempBoard[i] = " ";
      }
    }
    board = tempBoard;
    return board;
  }

  const handleDelete = id => {
    alert("Successfully deleted the game!");
    removeGame(id);
    if (display) {
      setDisplay(false);
    }
  }

  const handleEdit = board => {
    setEdit(true);
  }

  const handleSubmit = e => {
    e.preventDefault();
    var newBoard = [];
    for (var i = 0; i < 9; i++) {
      var prefix = 's';
      var str = prefix.concat(i);
      if (formData[str] === undefined) {
        newBoard.push(board[i]);
      }
      else {
        newBoard.push(formData[str]);
      }
    }
    updateGame(id, formData['title'], formData['player_x'], formData['player_o'], newBoard);
  }

  const handleChange = e => {
    setFormData({
      name: e.target.name,
      value: e.target.value,
    });
  }

  return (
    <div>
      {display &&
        <div>
          <h3>{games[1]}</h3>
          <div id="players">
            <p><strong>Player X:</strong> {games[2]}</p>
            <p><strong>Player O:</strong> {games[3]}</p>
          </div>
          <div className="container">
            <div className="board">
              <div id="block_0" className="block">{board[0]}</div>
              <div id="block_1" className="block">{board[1]}</div>
              <div id="block_2" className="block">{board[2]}</div>
              <div id="block_3" className="block">{board[3]}</div>
              <div id="block_4" className="block">{board[4]}</div>
              <div id="block_5" className="block">{board[5]}</div>
              <div id="block_6" className="block">{board[6]}</div>
              <div id="block_7" className="block">{board[7]}</div>
              <div id="block_8" className="block">{board[8]}</div>
            </div>
          </div>
          <div className="buttons">
            <button id="delete-button" onClick={() => {handleDelete(id)}}>Delete</button>
            <button id="edit-button" onClick={() => {handleEdit()}}>Edit</button>
          </div>
        </div>
      }
      {edit &&
        <div class="editform">
          <form id="form" onSubmit={handleSubmit}>
            <label htmlFor="title"><strong>Edit Title: </strong></label>
            <input type="text" id="player-o" name="player-o" onChange={handleChange} maxLength="15" />
            <input type="text" id="title" name="title" defaultValue={games[1]}  onChange={handleChange} maxLength="15" /><br />
            <label htmlFor="player_x"><strong>Edit Player X: </strong></label>
            <input type="text" id="player_x" name="player_x" defaultValue={games[2]} onChange={handleChange} maxLength="15" /><br />
            <label htmlFor="player_y"><strong>Edit Player O: </strong></label>
            <input type="text" id="player_y" name="player_o" defaultValue={games[3]} onChange={handleChange} maxLength="15" /><br />
            <div class="boardgrid">
              <input type="text" id="s0" name="s0" maxLength="1" size="1" defaultValue={board[0]} onChange={handleChange} />
              <input type="text" id="s1" name="s1" maxLength="1" size="1" defaultValue={board[1]} onChange={handleChange} />
              <input type="text" id="s2" name="s2" maxLength="1" size="1" defaultValue={board[2]} onChange={handleChange} />
              <br />
              <input type="text" id="s3" name="s3" maxLength="1" size="1" defaultValue={board[3]} onChange={handleChange} />
              <input type="text" id="s4" name="s4" maxLength="1" size="1" defaultValue={board[4]} onChange={handleChange} />
              <input type="text" id="s5" name="s5" maxLength="1" size="1" defaultValue={board[5]} onChange={handleChange} />
              <br />
              <input type="text" id="s6" name="s6" maxLength="1" size="1" defaultValue={board[6]} onChange={handleChange} />
              <input type="text" id="s7" name="s7" maxLength="1" size="1" defaultValue={board[7]} onChange={handleChange} />
              <input type="text" id="s8" name="s8" maxLength="1" size="1" defaultValue={board[8]} onChange={handleChange} />
              <br />
            </div>
            <button id="save">Save!</button>
          </form>
        </div>
      }
    </div>
  );
};

export {ViewGame};
