import { Actor, Color, Input, Timer, CollisionType } from "excalibur";
import { game } from "../index";

class Snake extends Actor {
  public length: number = 1;
  public head: Actor;
  public bodySegments: Actor[] = [];
  public currentDir: String;
  public started: Boolean;
  public timer: Timer = new Timer({
    fcn: () => this.moveHead(this.currentDir),
    repeats: true,
    interval: 150
  });
  constructor() {
    super({
      x: game.drawWidth / 2,
      y: game.drawHeight / 2,
      width: 20,
      height: 20,
      color: Color.Green
    });
    this.body.collisionType = CollisionType.Passive;

    game.add(this);
    this.currentDir = "Up";
    this.head = this;
    this.started = false;
    game.add(this.timer);
    this.timer.pause();
  }
  /* 
        Movement code 
        Save current pos in a variable called prevPos
        move head depending on key press
        loop through each of the indices in prevPos and update their pos to the one above them (except for section right after head that will just get updated to head pos)
    */
  private moveHead(dir: String) {
    switch (dir) {
      case "Up":
        this.currentDir = dir;
        this.pos.y = this.pos.y - this.height;
        break;
      case "Down":
        this.currentDir = dir;
        this.pos.y = this.pos.y + this.height;
        break;
      case "Left":
        this.currentDir = dir;
        this.pos.x = this.pos.x - this.width;
        break;
      case "Right":
        this.currentDir = dir;
        this.pos.x = this.pos.x + this.width;
        break;
    }
  }

  public update(engine) {
    // Check if the game has started and if so start the loop for movement
    if (this.started) {
      this.timer.unpause();
    }
    // Yes I understand this could be a switch but for some reason it doesn't want to read logical operators
    // So I have to do it this way unless I want to write two switch statements
    if (
      engine.input.keyboard._keysDown === Input.Keys.W ||
      engine.input.keyboard._keysDown === Input.Keys.Up
    ) {
      if (this.started === false) {
        this.started = true;
      }
      if (this.currentDir === "Down") {
        // Don't do anything as it would instantly kill the snake
        return;
      }
      this.currentDir = "Up";
    }

    if (
      engine.input.keyboard._keysDown === Input.Keys.A ||
      engine.input.keyboard._keysDown === Input.Keys.Left
    ) {
      if (this.started === false) {
        this.started = true;
      }
      if (this.currentDir === "Right") {
        // Don't do anything as it would instantly kill the snake
        return;
      }
      this.currentDir = "Left";
    }

    if (
      engine.input.keyboard._keysDown === Input.Keys.D ||
      engine.input.keyboard._keysDown === Input.Keys.Right
    ) {
      if (this.started === false) {
        this.started = true;
      }
      if (this.currentDir === "Left") {
        // Don't do anything as it would instantly kill the snake
        return;
      }
      this.currentDir = "Right";
    }

    if (
      engine.input.keyboard._keysDown === Input.Keys.S ||
      engine.input.keyboard._keysDown === Input.Keys.Down
    ) {
      if (this.started === false) {
        this.started = true;
      }
      if (this.currentDir === "Up") {
        // Don't do anything as it would instantly kill the snake
        return;
      }
      this.currentDir = "Down";
    }
  }

  public PreCollision(ev) {
    console.log("a");
  }
}

export { Snake };
