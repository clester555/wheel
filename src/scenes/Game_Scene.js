export class Game_Scene extends Phaser.Scene{

    playerset = 2;
    spinning = false;
    speed = 0;
    maxSpeed = 12;
    studentNames1 = ['Ogre!','Evan','Kelly','Lucas','Coin!!!','Shawn','Mia','Anna'];
    studentNames2 = ['Ogre!','Peter','Anne','Ethan','Coin!!!','X','Mia','Rebecca'];
   

    constructor(){
        super({key:'game-scene'});
    }

    preload(){
        this.load.image('background-image','assets/images/background.png');
        this.load.image('wheel1-image','assets/images/blankwheel.png');
        this.load.image('wheel2-image','assets/images/blankwheel2.png');
        this.load.image('spin-image','assets/images/spin_button.png');
        this.load.image('stop-image','assets/images/stop_button.png');
        this.load.image('arrow-image','assets/images/arrow.png');
    }

    create(){
       
        this.add.image(0,0,'background-image').setOrigin(0,0);
        this.z= this.add.text(
            1000,
            500,
            '???',
            {
                color: '#FFFFFF',
                fontSize: '64px'
            }
            ).setOrigin(0.0,0.5);
        this.add.image(890,500,'arrow-image').setOrigin(.5,.5);


        this.classA = this.add.text(
            1000,
            100,
            'A',
            {
                color: '#FFFFFF',
                fontSize: '64px'
            }
            ).setOrigin(0.0,0.5).setInteractive();
        this.classA.on('pointerup', () =>
            {
                this.classA.setVisible(false);
                this.classC.setVisible(false);
                this.playerset = 1;
                this.wheel = this.add.image(450,500,'wheel1-image').setOrigin(.5,.5).setScale(0.7);
            });
        this.classC = this.add.text(
            1000,
            150,
            'C',
            {
                color: '#FFFFFF',
                fontSize: '64px'
            }
            ).setOrigin(0.0,0.5).setInteractive();
        this.classC.on('pointerup', () =>
            {
                this.classA.setVisible(false);
                this.classC.setVisible(false);
                this.playerset = 2;
                this.wheel = this.add.image(450,500,'wheel2-image').setOrigin(.5,.5).setScale(0.7);  
            });



       
        this.stop_button = this.add.image(850,600,'stop-image').setOrigin(0,0).setInteractive().setVisible(false);
        this.stop_button.on('pointerup', () =>
            {
                this.stop_button.setVisible(false);
                this.spinning = false
                this.spin_button.setVisible(true);
                let q = this.wheel.angle + 180;
                q=Math.ceil(q/45);
                if(this.playerset == 1)
                    this.z.setText(this.studentNames1[q-1]);
                if(this.playerset == 2)
                    this.z.setText(this.studentNames2[q-1]);
            }
        );
        this.spin_button = this.add.image(850,600,'spin-image').setOrigin(0,0).setInteractive();
        this.spin_button.on('pointerup', () =>
            {
                this.spin_button.setVisible(false);
                this.speed = .1;
                this.z.setText('???');
                this.spinning = true;

            }
        );
    }

    update(t,dt){
        if(this.spinning){
            if(this.speed<this.maxSpeed){
                this.speed+=0.003*dt;
                if(this.speed>this.maxSpeed*.7){
                    this.stop_button.setVisible(true);
                }
            }
            this.wheel.angle+=this.speed;
            
        
        }
    }



}