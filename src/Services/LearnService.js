import Parse from "parse";

// CREATE operation - new game
export const createGame = (Name) => {
  console.log("Creating: ", Name);
  const Game = Parse.Object.extend("Game");
  const game = new Game();
  // using setter to UPDATE the (local) object
  game.set("name", Name);
  return game.save();
};

// READ operation - get game by ID
export const getById = async (id) => {
  const Game = Parse.Object.extend("Game");
  const query = new Parse.Query(Game);
  const data = [];
  try {
    const game = await query.get(id);
    const board = game.get("board");
    const title = game.get("Title");
    const player_x = game.get("Player_x");
    const player_y = game.get("Player_y");
    data.push(board);
    data.push(title);
    data.push(player_x);
    data.push(player_y);
  } catch (error) {
    alert(`Failed to retrieve the object, with error code: ${error.message}`);
  }
  return data;
};

// READ operation - get all games
export const getAllGames = () => {
  const Game = Parse.Object.extend("Game");
  const query = new Parse.Query(Game);
  return query.find();
};

// UPDATE operation - update games
export const updateGame = async (id, title, player_x, player_o, board) => {
  let Game = new Parse.Object("Game");
  Game.set('objectId', id);
  Game.set('Title', title);
  Game.set('Player_x', player_x);
  Game.set('Player_y', player_o);
  Game.set('board', board);
  try {
    await Game.save();
    alert('Success! Game updated!');
    window.location.reload();
    return true;
  } catch (error) {
    alert(`Error! ${error.message}`);
    return false;
  }
};

// DELETE operation - remove game by ID
export const removeGame = async (id) => {
  const Game = new Parse.Object("Game");
  Game.set('objectId', id);
  try {
    await Game.destroy();
    alert('Success! Game deleted!');
    window.location.reload();
    return true;
  } catch (error) {
    alert(`Error ${error.message}`);
    return false;
  }
};
