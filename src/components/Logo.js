export default class Logo extends Phaser.GameObjects.Group {
	constructor(scene){
		super(scene);
		this.x = scene.game.config.width - 120;
		this.y = 120;
		this.muted = false;

		this.background = scene.add.graphics();
		this.background.fillStyle(0x000000, 0.5);
		this.background.fillRoundedRect(this.x - 75, this.y - 75, 150, 600, {tl: 75, tr: 75, br: 75, bl: 75});
		this.add(this.background);

		this.logo = scene.add.image(this.x, this.y, 'atlasButtons', 'LOTTO SOCIAL LOGO (unpressed).png').setInteractive({useHandCursor: true}).setName('LOTTO SOCIAL LOGO');
		this.add(this.logo);

		this.soundOn = scene.add.image(this.x, this.y + 150, 'atlasButtons', 'SOUND ON (unpressed).png').setInteractive({useHandCursor: true}).setName('SOUND ON');
		this.add(this.soundOn);

		this.soundOff = scene.add.image(this.x, this.y + 150, 'atlasButtons', 'SOUND OFF (unpressed).png').setInteractive({useHandCursor: true}).setName('SOUND OFF');
		this.add(this.soundOff);

		this.info = scene.add.image(this.x, this.y + 300, 'atlasButtons', 'INFO (unpressed).png').setInteractive({useHandCursor: true}).setName('INFO');
		this.add(this.info);

		this.x = scene.add.image(this.x, this.y + 450, 'atlasButtons', 'X (unpressed).png').setInteractive({useHandCursor: true}).setName('X');
		this.add(this.x);

		this.soundOn.on('pointerup', () => {
			this.updateSound(true);
		});

		this.soundOff.on('pointerup', () => {
			this.updateSound(false);
		});

		this.logo.on('pointerup', () => {
			if(this.background.visible)
				this.hideMenu();
			else
				this.showMenu();
		});

		this.hideMenu();
	}

	destroy(){
		this.soundOn.off('pointerup');
		this.soundOff.off('pointerup');
		this.logo.off('pointerup');
	}

	hideMenu(){
		this.background.setVisible(false);
		this.soundOn.setVisible(false);
		this.soundOff.setVisible(false);
		this.info.setVisible(false);
		this.x.setVisible(false);
	}

	showMenu(){
		this.background.setVisible(true);
		this.info.setVisible(true);
		this.x.setVisible(true);
		this.updateSound(this.muted);
	}

	updateSound(muted){
		this.muted = muted;
		this.soundOn.setVisible(!muted);
		this.soundOff.setVisible(muted);
	}
}