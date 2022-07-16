import { Application } from 'pixi.js'
import { Peg } from './scenes/Peg';
import { collideCircle } from './util/collision';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

// pass in the screen size to avoid "asking up"
const peg: Peg = new Peg(150, 150, 'blue');
const pegTwo: Peg = new Peg(150, 150, 'orange');

peg.x += 100;
peg.y += 150;

pegTwo.x += 99;
pegTwo.y += 0;
//const sceny: Scene = new Scene(app.screen.width, app.screen.height);

//app.stage.addChild(sceny)
app.stage.addChild(peg);
app.stage.addChild(pegTwo);

console.log(collideCircle(peg, pegTwo));
console.log(peg.peg.width)
function resize() {
	app.renderer.resize(window.innerWidth, window.innerHeight);
}


resize();

