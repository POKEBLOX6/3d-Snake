import { Engine } from "excalibur";
import { Snake } from "./entities/snake";
import { Map } from "./game";
const game = new Engine({
  width: 800,
  height: 600
});
// Start the engine to begin the game.
game.start();

const head = new Snake();
const map = new Map();
export { game };
