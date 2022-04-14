import { Actor, Color, CollisionType } from "excalibur";
import { game } from "./index";

class Map {
  constructor() {
    //@ts-ignore
    const wall = new Actor({
      y: game.drawHeight / 2,
      x: 0,
      width: 40,
      height: game.drawHeight,
      collisionType: CollisionType.Fixed,
      name: "wall",
      color: Color.Chartreuse
    });
    // wall.body.collisionType = CollisionType.Fixed;
    game.add(wall);
  }
}

export { Map };
