import { Actor, Color, CollisionType } from "excalibur";
import { game } from "./index";

class Map {
  constructor() {
    const wall = new Actor({
      name: "wall",
      y: game.drawHeight / 2,
      width: 40,
      height: game.drawHeight,
      color: Color.Chartreuse
    });
    wall.body.collisionType = CollisionType.Fixed;
    game.add(wall);
  }
}

export { Map };
