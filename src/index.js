import Phaser from 'phaser';
import Preloader from './scenes/Preloader';
import Splash from './scenes/Splash';
import Game from './scenes/Game';

const config = {
	type: Phaser.AUTO,
	scale: {
		parent: 'phaser-example',
		width: 1080,
		height: 1920,
		mode: Phaser.Scale.FIT,
		//mode: Phaser.Scale.NONE,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
	backgroundColor: 0x666666,
	scene: [Preloader, Splash, Game]
};

const game = new Phaser.Game(config);

document.body.style = 'padding: 0; margin: 0;';
