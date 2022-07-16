import { Sprite } from 'pixi.js'
import { Peg } from '../scenes/Peg';

export function rectsIntersect(a: Sprite, b: Sprite): Boolean {
    let aBox = a.getBounds();
    let bBox = b.getBounds();

    return aBox.width + aBox.x > bBox.x
        && aBox.x < bBox.x + bBox.width
        && aBox.y + aBox.height > bBox.y
        && aBox.y < bBox.y + bBox.height;
}

/* To test if two circles are overlapping, you simply test to see if the distance
     between their two center points is less than their combined radii. The formula
     for distance between two points is sqrt((p1.x - p2.x)^2 + (p1.y - p2.y)^2), but
     since sqrt is an expensive operation, we can simply stop after we square the two
     differences and test against the square of the sum of the radii. */
export function collideCircle(circle1: Peg, circle2: Peg) {

    console.log("Circle Ones X coord for circle: " + circle1.circleX);
    console.log("Circle Twos X coord for circle: " + circle2.circleX);
    /* first we get the x and y distance between the two circles. */
    let distance_x = circle1.circleX - circle2.circleX;
    let distance_y = circle1.circleY - circle2.circleY;
    /* Then we get the sum of their radii. */
    let radii_sum = circle1.radius + circle2.radius;

    /* Then we test to see if the square of their distance is greater than the
    square of their radii. If it is, then there is no collision. If it isn't,
    then we have a collision. */
    if (distance_x * distance_x + distance_y * distance_y <= radii_sum * radii_sum) return true;

    return false;

}