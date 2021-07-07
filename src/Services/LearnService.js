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
export const getById = (id) => {
  const Game = Parse.Object.extend("Game");
  const query = new Parse.Query(Game);
  return query.get(id);
};

// READ operation - get all games
export const getAllGames = () => {
  const Game = Parse.Object.extend("Game");
  const query = new Parse.Query(Game);
  return query.find();
};

// DELETE operation - remove game by ID
export const removeGame = (id) => {
  const Game = Parse.Object.extend("Game");
  const query = new Parse.Query(Game);
  return query.get(id).then((game) => {
    game.destroy();
  });
}
