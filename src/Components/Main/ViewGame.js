import React, { useState, useEffect } from "react"
import { getById, removeGame } from "../../Services/LearnService.js"
import "../../Styling/ViewGame.css"

const ViewGame = ({ id }) => {
  const [display, setDisplay] = useState(true);
  const [games, setGames] = useState([]);
  const [board, setBoard] = useState([]);

  useEffect(() => {
    getById(id).then((games) => {
      setGames(games);
      setBoard(convertBoard(games[0]));
      if (!display) {
        setDisplay(true);
      }
    });
  }, [id]);

  const convertBoard = board => {
    var tempBoard = board;
    for (let i = 0; i < tempBoard.length; i++) {
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

  return (
    <div>
      {display &&
        <div>
          <h3>{games[1]}</h3>
          <div id="players">
            <p><strong>Player X:</strong> {games[2]}</p>
            <p><strong>Player Y:</strong> {games[3]}</p>
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
            <button id="edit-button">Edit</button>
          </div>
        </div>
      }
    </div>
  );
};

export {ViewGame};
