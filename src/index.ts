import { Engine } from 'excalibur'
import { Snake } from './entities/snake';
const game = new Engine({
  width: 800,
  height: 600,
});
// Start the engine to begin the game.
game.start()

const head = new Snake();

export { game as game}