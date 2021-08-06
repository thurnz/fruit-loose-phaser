import imgLogo from '../assets/images/logo.png';
import jsonButtons from '../assets/images/buttons.json';
import imgButtons from '../assets/images/buttons.png';

export default class Preloader extends Phaser.Scene {
	constructor(){
		super('preloader');
	}

	preload(){
		let progressBar = this.add.graphics();
		let progressBox = this.add.graphics();

		progressBox.fillStyle(0x222222, 0.8);
		progressBox.fillRect((this.game.config.width - 420) / 2, (this.game.config.height - 50) / 2, 420, 50);

		this.load.on('progress', (value) => {
			progressBar.clear();
			progressBar.fillStyle(0xffffff, 1);
			progressBar.fillRect((this.game.config.width - 400) / 2, (this.game.config.height - 30) / 2, 400 * value, 30);
		});

		this.load.on('fileprogress', (file) => {

		});

		this.load.on('complete', () => {
			this.load.off('progress');
			this.load.off('fileprogress');
			this.load.off('complete');
		});

		this.load.image('logo', imgLogo);
		this.load.atlas('atlasButtons', imgButtons, jsonButtons);
	}

	create(){
		this.scene.stop();
		this.scene.start('splash');
	}
}