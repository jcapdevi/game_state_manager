// Form for GameInput

const GameForm = ({ game, onChange, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Save Your Game!</h1>
        <hr />
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="Title"  value={game.Title} onChange={onChange} />
        <br /><br />
        <label htmlFor="game">Select game type: </label>
        <select name="Template" id="game" defaultValue="-- select an option --" onChange={onChange} required>
          <option disabled value="-- select an option --">-- select an option --</option>
          <option value="tic-tac-toe">Tic-Tac-Toe</option>
        </select>
        <br /><br />
        <label htmlFor="player-x">Name of Player X: </label>
        <input type="text" id="player-x" name="Player_x"  value={game.Player_x} onChange={onChange} />
        <br /><br />
        <label htmlFor="player-o">Name of Player O: </label>
        <input type="text" id="player-o" name="Player_y"  value={game.Player_y} onChange={onChange} />
        <br />
        <p>Enter current game-state (e represents an empty space):</p>
        <input type="text" id="a1" name="A1" maxLength="1" size="1" value={game.A1} onChange={onChange} />
        <input type="text" id="a2" name="A2" maxLength="1" size="1" value={game.A2} onChange={onChange} />
        <input type="text" id="a3" name="A3" maxLength="1" size="1" value={game.A3} onChange={onChange} />
        <br />
        <input type="text" id="b1" name="B1" maxLength="1" size="1" value={game.B1} onChange={onChange} />
        <input type="text" id="b2" name="B2" maxLength="1" size="1" value={game.B2} onChange={onChange} />
        <input type="text" id="b3" name="B3" maxLength="1" size="1" value={game.B3} onChange={onChange} />
        <br />
        <input type="text" id="c1" name="C1" maxLength="1" size="1" value={game.C1} onChange={onChange} />
        <input type="text" id="c2" name="C2" maxLength="1" size="1" value={game.C2} onChange={onChange} />
        <input type="text" id="c3" name="C3" maxLength="1" size="1" value={game.C3} onChange={onChange} />
        <br /><br />
        <button type="submit" name="button" onSubmit={onSubmit}>Submit</button>
        <br /><br />
        <hr />
      </form>
    </div>
  )
}

export default GameForm
