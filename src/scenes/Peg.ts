import { Circle, Container, Sprite } from "pixi.js";

export class Peg extends Container {
    private readonly containerWidth: number;
    private readonly containerHeight: number;

    // We promoted clampy to a member of the class
    private pegColor: String;
    private hitbox: Circle;
    public peg: Sprite;

    constructor(containerWidth: number, containerHeight: number, color: String) {
        super(); // Mandatory! This calls the superclass constructor.

        // see how members of the class need `this.`?
        this.containerWidth = containerWidth;
        this.containerHeight = containerHeight;
        this.width = containerWidth;
        this.height = containerHeight;

        // Now clampy is a class member, we will be able to use it in another methods!
        this.pegColor = color;
        if (this.pegColor === "blue") {
            this.peg = Sprite.from("BluePeg.png");
        } else if (this.pegColor === "orange") {
            this.peg = Sprite.from("OrangePeg.png");
        } else {
            this.peg = Sprite.from("Ball.png");
        }


        this.hitbox = new Circle(containerWidth / 2, containerHeight / 2, containerWidth / 2);
        console.log("The radius of our circle is: " + this.hitbox.radius)
        console.log("The width of the container is: " + this.width)
        console.log("The width of the peg sprite is: " + this.peg.texture.width)

        this.peg.anchor.set(0.5); // Move anchor to center of objectx   
        this.peg.x = this.containerWidth / 2;
        this.peg.y = this.containerHeight / 2;
        this.addChild(this.peg);
    }

    public get circleX(): number {
        return this.hitbox.x;
    }

    public get circleY(): number {
        return this.hitbox.y;
    }

    public get radius(): number {
        return this.hitbox.radius;
    }
}