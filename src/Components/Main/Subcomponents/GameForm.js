// Form for GameInput

const GameForm = ({ game, onChange, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Save Your Game!</h1>
        <hr />
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="Title"  value={game.Title}/>
        <br /><br />
        <label htmlFor="game">Select game type: </label>
        <select name="game" id="game" defaultValue="-- select an option --" value={game.Template} required>
          <option disabled>-- select an option --</option>
          <option value="ttt">Tic-Tac-Toe</option>
        </select>
        <br /><br />
        <label htmlFor="player-x">Name of Player X: </label>
        <input type="text" id="player-x" name="Player_x"  value={game.Player_x}/>
        <br /><br />
        <label htmlFor="player-o">Name of Player O: </label>
        <input type="text" id="player-o" name="Player_y"  value={game.Player_y}/>
        <br />
        <p>Enter current game-state:</p>
        <input type="text" id="a1" name="board[0]" maxLength="1" size="1" value={game.board[0]} />
        <input type="text" id="a2" name="board[1]" maxLength="1" size="1" value={game.board[1]} />
        <input type="text" id="a3" name="board[2]" maxLength="1" size="1" value={game.board[2]} />
        <br />
        <input type="text" id="b1" name="board[3]" maxLength="1" size="1" value={game.board[3]} />
        <input type="text" id="b2" name="board[4]" maxLength="1" size="1" value={game.board[4]} />
        <input type="text" id="b3" name="board[5]" maxLength="1" size="1" value={game.board[5]} />
        <br />
        <input type="text" id="c1" name="board[6]" maxLength="1" size="1" value={game.board[6]} />
        <input type="text" id="c2" name="board[7]" maxLength="1" size="1" value={game.board[7]} />
        <input type="text" id="c3" name="board[8]" maxLength="1" size="1" value={game.board[8]} />
        <br /><br />
        <button type="submit" name="button" onSubmit={onSubmit}>Submit</button>
        <br /><br />
        <hr />
      </form>
    </div>
  )
}

export default GameForm
