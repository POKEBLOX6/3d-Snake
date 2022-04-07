import { Actor, Color } from "excalibur";
import { game } from "../index";


class Snake extends Actor {
    public length: number = 1;
    public head: Actor;
    public bodySegments: Actor[] = [];
    constructor(){
        super({
            x:  game.drawWidth /2,
            y: game.drawHeight /2,
            width: 20,
            height: 20,
            color: Color.Green, 
        });
        game.add(this)
        this.head = this
    }

    
}

export { Snake as Snake}
