import Parse from "parse"

// CREATE operation - new game
export const createGame = (newGame) => {
  (async () => {
    console.log("Creating: ", newGame);
    const game = new Parse.Object('Game');
    // using setter to UPDATE the (local) object
    game.set("Title", newGame.Title);
    game.set("Template", newGame.Template);
    game.set("Player_x", newGame.Player_x);
    game.set("Player_y", newGame.Player_y);
    game.set("A1", newGame.A1);
    game.set("A2", newGame.A2);
    game.set("A3", newGame.A3);
    game.set("B1", newGame.B1);
    game.set("B2", newGame.B2);
    game.set("B3", newGame.B3);
    game.set("C1", newGame.C1);
    game.set("C2", newGame.C2);
    game.set("C3", newGame.C3);

    try {
      const result = await game.save();
      console.log(result)
      return result
    } catch (error) {
      console.error('Error while creating Game: ', error);
    }
  })();
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
