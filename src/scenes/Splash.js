import Logo from '../components/Logo';

export default class Splash extends Phaser.Scene {
	constructor(){
		super('splash');
	}

	create(){
		this.add.image(this.game.config.width/2, 500, 'logo').setScale(2);

		this.logo = new Logo(this);

		this.add.text(0, 900, 'Points Deposited', { fontFamily: 'Arial', fontSize: '50px', color: '#fff', align: 'center', fontStyle: '400' }).setFixedSize(this.game.config.width, 0);

		this.points = this.add.text(0, 1000, 1500, { fontFamily: 'Arial', fontSize: '70px', color: '#fff', align: 'center', fontStyle: '700' }).setFixedSize(this.game.config.width, 0);

		this.scrollBar = this.add.graphics();
		this.scrollBar.fillStyle(0xffffff, 1);
		this.scrollBar.fillRect((this.game.config.width - 500) / 2, 1200, 500, 20);

		this.scroller = this.add.image(this.game.config.width / 2, 1200, 'atlasButtons', 'INFO (unpressed).png').setInteractive({useHandCursor: true}).setName('INFO');
		this.input.setDraggable(this.scroller);

		this.deductPoints = this.add.image(150, 1200, 'atlasButtons', 'DEDUCT (unpressed).png').setInteractive({useHandCursor: true}).setName('DEDUCT');

		this.addPoints = this.add.image(this.game.config.width - 150, 1200, 'atlasButtons', 'ADD (unpressed).png').setInteractive({useHandCursor: true}).setName('ADD');

		this.play = this.add.image(this.game.config.width/2, this.game.config.height - 500, 'atlasButtons', 'PLAY (unpressed).png').setInteractive({useHandCursor: true}).setName('PLAY');

		this.input.on('gameobjectdown', this.downHandler);
		this.input.on('gameobjectup', this.upHandler);
		this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
			const maxValue = 3000;
			let x = (this.game.config.width - 500) / 2;
			if(dragX > x && dragX < x + 500){
				gameObject.x = dragX;
			}
			this.points.setText(Math.ceil((gameObject.x - x) / 500 * maxValue));
		});
	}

	destroy(){
		this.input.off('gameobjectdown', this.downHandler);
		this.input.off('gameobjectup', this.upHandler);
		this.scroller.off('drag');
	}

	downHandler(pointer, gameObject){
		if(gameObject.name)
			gameObject.setFrame(gameObject.name + ' (pressed).png');
	}

	upHandler(pointer, gameObject){
		if(gameObject.name)
			gameObject.setFrame(gameObject.name + ' (unpressed).png');
	}
}